<script setup>
import { computed, nextTick, onMounted, onUnmounted, reactive, ref } from 'vue'


import albums from '../../data/albums'

const cdList = reactive(albums)
const activeCd = ref(null)
const showModal = ref(false)
const isPlaying = ref(false)
const currentTime = ref(0)
const totalTime = ref(0)
const progressPercent = ref(0)
const currentLyricIndex = ref(0)
const lyricOffset = ref(0)
const lyricContainerRef = ref(null)
const audioRef = ref(null)

let isLoadingAudio = false
const parallaxY = ref(0)
let isDraggingProgress = false

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0)
    return '00:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

function parseLyric(lyricStr) {
  if (!lyricStr)
    return []
  const lines = lyricStr.split('\n')
  const result = []
  const timeRegex = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/
  for (const line of lines) {
    const match = line.match(timeRegex)
    if (match) {
      const minutes = Number.parseInt(match[1], 10)
      const seconds = Number.parseInt(match[2], 10)
      const milliseconds = match[3] ? (match[3].length === 3 ? Number.parseInt(match[3], 10) : Number.parseInt(match[3], 10) * 10) : 0
      const time = minutes * 60 + seconds + milliseconds / 1000
      const text = line.replace(timeRegex, '').trim() || '...'
      result.push({ time, text })
    }
  }
  result.sort((a, b) => a.time - b.time)
  return result
}

const parsedLyrics = computed(() => {
  if (!activeCd.value?.lyricStr)
    return []
  return parseLyric(activeCd.value.lyricStr)
})

function syncLyric() {
  if (!parsedLyrics.value.length || totalTime.value <= 0)
    return
  const time = currentTime.value
  const lyrics = parsedLyrics.value
  let index = 0
  for (let i = 0; i < lyrics.length; i++) {
    if (time >= lyrics[i].time) {
      index = i
    }
    else {
      break
    }
  }
  if (index !== currentLyricIndex.value) {
    currentLyricIndex.value = index
    nextTick(() => {
      const container = lyricContainerRef.value
      if (!container)
        return
      const activeLine = container.querySelector('.active-lyric')
      if (!activeLine)
        return
      const containerRect = container.getBoundingClientRect()
      const lineRect = activeLine.getBoundingClientRect()
      const offset = lineRect.top - containerRect.top - containerRect.height / 2 + lineRect.height / 2
      lyricOffset.value = lyricOffset.value + offset
    })
  }
}

async function loadAndPlay(cd, autoPlay = true) {
  if (!audioRef.value || isLoadingAudio)
    return
  isLoadingAudio = true

  audioRef.value.pause()
  audioRef.value.src = cd.audio
  audioRef.value.load()

  currentTime.value = 0
  progressPercent.value = 0
  currentLyricIndex.value = 0
  lyricOffset.value = 0

  if (autoPlay) {
    try {
      await audioRef.value.play()
      isPlaying.value = true
    }
    catch {
      isPlaying.value = false
    }
  }

  isLoadingAudio = false
}

function handleScroll(e) {
  const scrollTop = e.target.scrollTop
  parallaxY.value = scrollTop * 0.3
  requestAnimationFrame(() => {
    cdList.forEach((cd, i) => {
      cd.parallax = scrollTop * (0.4 + i * 0.05)
      cd.opacity = Math.max(0.4, 1 - (scrollTop - i * 40) / 450)
    })
  })
}

async function openCdModal(cd) {
  activeCd.value = cd
  showModal.value = true
  await loadAndPlay(cd, true)
  document.body.style.overflow = 'hidden'
}

function openModalFromMini() {
  if (activeCd.value)
    showModal.value = true
}

function closeModal() {
  showModal.value = false
  document.body.style.overflow = ''
}

async function togglePlay() {
  if (!audioRef.value || !activeCd.value)
    return
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  }
  else {
    try {
      await audioRef.value.play()
      isPlaying.value = true
    }
    catch {}
  }
}

async function prevCd() {
  const i = cdList.findIndex(x => x.id === activeCd.value.id)
  const target = cdList[i === 0 ? cdList.length - 1 : i - 1]
  activeCd.value = target
  await loadAndPlay(target, true)
}

async function nextCd() {
  const i = cdList.findIndex(x => x.id === activeCd.value.id)
  const target = cdList[i === cdList.length - 1 ? 0 : i + 1]
  activeCd.value = target
  await loadAndPlay(target, true)
}

function handleTimeUpdate() {
  if (isDraggingProgress)
    return
  currentTime.value = audioRef.value.currentTime
  progressPercent.value = (currentTime.value / totalTime.value) * 100 || 0
  syncLyric()
}

const handleLoadedMetadata = () => totalTime.value = audioRef.value.duration || 0
const handleAudioEnded = () => nextCd()

function setProgress(e) {
  if (!audioRef.value || totalTime.value <= 0)
    return
  const bar = e.currentTarget
  const rect = bar.getBoundingClientRect()
  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
  const p = (x / rect.width) * 100
  progressPercent.value = p
  audioRef.value.currentTime = (p / 100) * totalTime.value
  syncLyric()
}

function startDragProgress(e) {
  e.preventDefault()
  isDraggingProgress = true
  const move = me => setProgress(me)
  const up = () => {
    isDraggingProgress = false
    document.removeEventListener('mousemove', move)
    document.removeEventListener('mouseup', up)
  }
  document.addEventListener('mousemove', move)
  document.addEventListener('mouseup', up)
}

onMounted(() => {
  audioRef.value = new Audio()
  audioRef.value.addEventListener('timeupdate', handleTimeUpdate)
  audioRef.value.addEventListener('loadedmetadata', handleLoadedMetadata)
  audioRef.value.addEventListener('ended', handleAudioEnded)
})

onUnmounted(() => {
  if (audioRef.value) {
    audioRef.value.pause()
    audioRef.value = null
  }
})
</script>

<template>
  <div class="cd-container" @scroll="handleScroll">
    <div class="parallax-bg" :style="{ transform: `translateY(${parallaxY}px)` }" />

    <div class="cd-grid">
      <div
        v-for="cd in cdList"
        :key="cd.id"
        class="cd-item"
        :style="{ transform: `translateY(${cd.parallax}px)`, opacity: cd.opacity }"
        @click="openCdModal(cd)"
      >
        <div class="cd-disc" :class="{ 'active-rotate': activeCd?.id === cd.id && isPlaying }">
          <div class="cd-cover">
            <img :src="cd.cover" :alt="cd.album" loading="lazy">
          </div>
        </div>
        <div class="cd-name">
          {{ cd.album }}
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="showModal" class="modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="modal-cd">
            <div class="cd-disc modal-rotate" :style="{ animationPlayState: isPlaying ? 'running' : 'paused' }">
              <div class="cd-cover">
                <img :src="activeCd.cover" :alt="activeCd.album">
              </div>
            </div>
          </div>
          <div class="modal-title">
            {{ activeCd.name }} - {{ activeCd.album }}
          </div>

          <div ref="lyricContainerRef" class="lyric-container">
            <div class="lyric-wrapper" :style="{ transform: `translateY(-${lyricOffset}px)` }">
              <p
                v-for="(item, index) in parsedLyrics"
                :key="index"
                class="lyric-line"
                :class="{ 'active-lyric': index === currentLyricIndex }"
              >
                {{ item.text }}
              </p>
            </div>
          </div>

          <div class="progress-container">
            <span class="time current-time">{{ formatTime(currentTime) }}</span>
            <div class="progress-bar" @click="setProgress" @mousedown="startDragProgress">
              <div class="progress-bg" />
              <div class="progress-fill" :style="{ width: `${progressPercent}%` }" />
              <div class="progress-dot" :style="{ left: `${progressPercent}%` }" />
            </div>
            <span class="time total-time">{{ formatTime(totalTime) }}</span>
          </div>

          <div class="control-buttons">
            <button class="control-btn" @click="prevCd">
              ◀
            </button>
            <button class="play-btn" @click="togglePlay">
              {{ isPlaying ? '❚❚' : '▶' }}
            </button>
            <button class="control-btn" @click="nextCd">
              ▶
            </button>
          </div>

          <button class="close-btn" @click="closeModal">
            ✕
          </button>
        </div>
      </div>
    </Teleport>

    <Teleport to="body">
      <transition name="slide-up">
        <div v-if="activeCd && !showModal" class="mini-player" @click="openModalFromMini">
          <div class="mini-cd">
            <div class="cd-disc mini-rotate" :class="{ 'active-rotate': isPlaying }">
              <div class="cd-cover">
                <img :src="activeCd.cover" :alt="activeCd.album">
              </div>
            </div>
          </div>
          <div class="mini-info">
            <div class="mini-name">
              {{ activeCd.name }} - {{ activeCd.album }}
            </div>
            <div class="mini-progress" @click.stop="setProgress" @mousedown.stop="startDragProgress">
              <div class="progress-bg" />
              <div class="progress-fill" :style="{ width: `${progressPercent}%` }" />
            </div>
          </div>
          <button class="mini-play-btn" @click.stop="togglePlay">
            {{ isPlaying ? '❚❚' : '▶' }}
          </button>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<style>
:root {
  --cd-color: #333;
  --cd-shadow: rgba(85, 85, 85, 0.9);
  --cd-modal-bg: rgba(18, 18, 32, 0.9);
  --progress-fill-color: #f5f5f5;
  --play-bg-color: #fff;
  --play-hover-bg-color: #fff;
  --control-bg-color: #333;
  --control-hover-bg-color: #fff;
  --close-bg-color: #333;
  --close-hover-bg-color: #fff;
  --close-color: #fff;
  --close-hover-color: #333;
}
html.dark {
  --cd-color: #fff;
  --cd-shadow: rgba(255, 255, 255, 0.9);
  --progress-fill-color: #f5f5f5;
  --play-bg-color: #fff;
  --play-hover-bg-color: #fff;
  --control-bg-color: #333;
  --control-hover-bg-color: #fff;
  --close-bg-color: #333;
  --close-hover-bg-color: #fff;
  --close-color: #fff;
  --close-hover-color: #333;
}
</style>

<style scoped>
.cd-container {
  padding: 60px 0 120px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  position: relative;
  z-index: 1;
}

.parallax-bg {
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; */
  will-change: transform;
}

.cd-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 60px;
  width: 100%;
  max-width: 1200px;
  z-index: 2;
}

.cd-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cd-disc {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 0 30px rgba(180, 180, 180, 0.2),
    0 0 80px rgba(100, 150, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  animation: cdRotate 12s linear infinite paused;
}

.active-rotate {
  animation-play-state: running;
}

.cd-item:hover .cd-disc {
  transform: scale(1.08) rotateY(12deg) rotateX(4deg);
  box-shadow:
    0 0 40px var(--cd-shadow),
    0 0 100px rgba(80, 180, 255, 0.4);
}

.cd-cover {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cd-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cd-name {
  margin-top: 18px;
  color: var(--cd-color);
  font-size: 16px;
  text-align: center;
  transition: all 0.3s;
}

.cd-item:hover .cd-name {
  color: var(--cd-color);
  transform: translateY(-3px);
}

@keyframes cdRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(12px);
  animation: modalFade 0.25s ease;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 620px;
  padding: 32px 24px;
  background: var(--cd-modal-bg);
  border-radius: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.modal-rotate {
  width: 260px;
  height: 260px;
  animation: cdRotate 8s linear infinite paused;
}

.modal-rotate .cd-cover {
  width: 180px;
  height: 180px;
}

.modal-title {
  color: #fff;
  font-size: 26px;
  margin: 20px 0 16px;
  text-shadow: 0 0 8px var(--cd-shadow);
}

.lyric-container {
  width: 100%;
  height: 180px;
  overflow: hidden;
  margin: 12px 0 20px;
  text-align: center;
}

.lyric-wrapper {
  transition: transform 0.35s ease;
}

.lyric-line {
  color: #989898;
  font-size: 17px;
  margin: 10px 0;
}

.active-lyric {
  color: #fff;
  font-size: 20px;
  text-shadow: 0 0 2px #fff;
}

.progress-container {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0 24px;
}

.time {
  color: #ddd;
  font-size: 13px;
  min-width: 48px;
  text-align: center;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  position: relative;
  cursor: pointer;
}

.progress-fill {
  /* position: absolute; */
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 8px;
  background: var(--progress-fill-color);
  transition: width 0.05s linear;
}

.progress-dot {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 8px var(--cd-color);
  transition: left 0.05s linear;
  pointer-events: none;
}

.control-buttons {
  display: flex;
  align-items: center;
  gap: 28px;
}

.control-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--control-bg-color);
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.control-btn:hover {
  background: var(--control-hover-bg-color);
  color: #000;
}

.play-btn {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: var(--play-bg-color);
  color: #000;
  border: none;
  font-size: 28px;
  cursor: pointer;
}
.play-btn:hover {
  box-shadow: 0 0 20px var(--play-hover-bg-color);
}

.close-btn {
  position: absolute;
  top: -16px;
  right: -16px;
  width: 44px;
  height: 44px;
  background: var(--close-bg-color);
  border-radius: 50%;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--close-color);
}
.close-btn:hover {
  background: var(--close-hover-bg-color);
  color: var(--close-hover-color);
}

.mini-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 76px;
  background: rgba(10, 10, 22, 0.96);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 16px;
  z-index: 1001;
  cursor: pointer;
}

.mini-cd {
  width: 56px;
  height: 56px;
}
.mini-rotate {
  width: 56px;
  height: 56px;
}
.mini-rotate .cd-cover {
  width: 42px;
  height: 42px;
}
.mini-info {
  flex: 1;
}
.mini-name {
  color: white;
  margin-bottom: 6px;
}
.mini-progress {
  height: 5px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
.mini-progress .progress-fill {
  height: 5px;
}
.mini-play-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--play-bg-color);
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #000;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

@keyframes modalFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 640px) {
  .cd-container {
    padding: 40px 12px 100px;
  }
  .cd-grid {
    gap: 32px;
  }
  .cd-disc {
    width: 140px;
    height: 140px;
  }
  .cd-cover {
    width: 100px;
    height: 100px;
  }
  .modal {
    align-items: flex-end;
    padding: 0;
  }
  .modal-content {
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 24px 24px 0 0;
    padding: 20px 16px 40px;
    width: 100%;
    max-width: 100%;
  }
  .modal-rotate {
    width: 200px;
    height: 200px;
  }
  .modal-rotate .cd-cover {
    width: 140px;
    height: 140px;
  }
  .modal-title {
    font-size: 20px;
    margin: 16px 0 12px;
  }
  .lyric-container {
    height: 120px;
  }
  .lyric-line {
    font-size: 14px;
    margin: 6px 0;
  }
  .active-lyric {
    font-size: 16px;
  }
  .progress-container {
    margin: 12px 0 16px;
  }
  .time {
    font-size: 12px;
    min-width: 40px;
  }
  .control-btn {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
  .play-btn {
    width: 56px;
    height: 56px;
    font-size: 22px;
  }
  .control-buttons {
    gap: 20px;
  }
  .close-btn {
    top: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
    font-size: 20px;
  }
  .mini-player {
    height: 64px;
    padding: 0 12px;
    gap: 12px;
  }
  .mini-cd {
    width: 48px;
    height: 48px;
  }
  .mini-rotate {
    width: 48px;
    height: 48px;
  }
  .mini-rotate .cd-cover {
    width: 36px;
    height: 36px;
  }
  .mini-name {
    font-size: 13px;
  }
  .mini-play-btn {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}
</style>

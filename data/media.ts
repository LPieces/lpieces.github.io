export type MediaType = 'anime' | 'book' | 'movie' | 'drama' | 'game' | 'music'
export type MediaState = 'done' | 'doing' | 'todo'

export interface MediaRecord {
  name: string
  creator?: string
  state?: MediaState
  date?: string
  note?: string
  lang?: string
}

export const anime: MediaRecord[] = [
  {
    name: '時光代理人',
    creator: '李豪凌',
    lang: 'zh-cn',
  },
  {
    name: '나 혼자만 레벨업 - 俺だけレベルアップな件',
    creator: '추공',
  },
]

export const book: MediaRecord[] = [
  {
    name: '通俗小说',
    creator: '仁科',
  },
  {
    name: '精神现象学',
    creator: '黑格尔(先刚 译)',
  },
]

export const movie: MediaRecord[] = [
  {
    name: 'Avatar',
    creator: 'James Cameron',
  },
  {
    name: '君の名は。',
    creator: '新海誠',
  },
  {
    name: 'The Dark Knight',
    creator: 'Christopher Nolan',
  },
  {
    name: 'Inception',
    creator: 'Christopher Nolan',
  },
  {
    name: 'Spider-Man: Across the Spider-Verse',
    creator: 'Joaquim Santos, Kemp Powers, Justin Thompson',
  },
  {
    name: 'Interstellar',
    creator: 'Christopher Nolan',
  },
  {
    name: 'Dune',
    creator: 'Denis Villeneuve',
  },
  {
    name: 'The Imitation Game',
    creator: 'Morten Tyldum',
  },
  {
    name: 'The Truman Show',
    creator: 'Peter Weir',
  },
  {
    name: 'Joker',
    creator: 'Todd Phillips',
  },
  {
    name: '好东西',
    creator: '邵艺辉',
  },
]

export const drama: MediaRecord[] = [
  {
    name: 'Three Body',
  },
]

export const game: MediaRecord[] = [
  {
    name: 'ELDEN RING',
    creator: 'FromSoftware',
  },
  {
    name: 'Terraria',
    creator: 'Re-Logic',
  },
  {
    name: 'DmC: Devil May Cry',
    creator: 'Ninja Theory',
  },
]

export const music = [
  {
    name: '陀飛輪',
    creator: '陳奕迅',
    lang: 'zh-Hant',
  },
]

export const media: Record<MediaType, MediaRecord[]> = {
  anime,
  drama,
  movie,
  game,
  music,
  book,
}

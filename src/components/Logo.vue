<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
    class="logo-svg"
  >
    <title>LPieces</title>

    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="0.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g transform="translate(60, 60) scale(0.015) translate(-4000, -4000) scale(1, -1) translate(0, -8000)" fill="none">
      <path
        class="animated-path path-1"
        d="M4138 6500 c-115 -29 -266 -136 -412 -291 -274 -291 -535 -733 -826 -1396 -149 -340 -127 -308 -248 -360 -152 -64 -352 -129 -472 -153 -223 -46 -473 -35 -656 29 -46 16 -84 27 -84 25 0 -3 14 -32 31 -66 40 -79 140 -180 211 -213 84 -39 149 -48 298 -42 178 7 390 53 579 124 35 13 66 22 68 19 8 -8 -207 -440 -296 -596 -92 -161 -271 -435 -323 -492 l-33 -38 -90 15 c-210 34 -433 30 -590 -12 -109 -28 -243 -100 -303 -161 -77 -79 -107 -147 -107 -242 1 -95 26 -151 101 -219 71 -65 142 -92 259 -98 223 -13 478 109 729 348 l101 96 150 -47 c83 -25 204 -66 270 -89 407 -146 598 -199 750 -208 135 -8 210 16 370 123 80 53 198 164 160 149 -66 -24 -211 -45 -317 -45 -228 0 -297 16 -825 192 l-392 131 63 91 c206 297 403 661 603 1111 24 55 49 112 55 127 7 20 34 40 106 78 411 218 890 650 1163 1050 193 282 309 584 297 776 -8 119 -73 226 -167 270 -42 20 -167 28 -223 14z"
        stroke="currentColor"
        stroke-width="80"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <path
        class="animated-path path-2 glow"
        d="M4260 6250 c59 -59 -21 -323 -178 -585 -189 -316 -588 -717 -934 -940 l-28 -17 41 88 c102 223 129 279 203 424 189 370 410 697 593 877 92 91 218 171 271 173 6 0 21 -9 32 -20z"
        stroke="currentColor"
        stroke-width="60"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <path
        class="animated-path path-3"
        d="M1763 2834 c32 -12 -138 -139 -266 -199 -172 -82 -328 -85 -357 -9 -33 86 105 183 305 214 62 9 289 5 318 -6z"
        stroke="currentColor"
        stroke-width="60"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <path
        class="animated-path path-4"
        d="M5602 5664 c-314 -39 -620 -158 -922 -360 -365 -243 -618 -519 -784 -854 -87 -177 -110 -263 -111 -415 0 -112 2 -124 29 -183 54 -116 178 -200 327 -221 l60 -8 -39 41 c-93 97 -132 198 -132 345 0 85 5 114 31 193 113 337 404 675 804 933 177 115 416 215 635 266 139 33 391 33 505 1 258 -74 404 -261 405 -518 0 -86 -43 -268 -89 -371 -199 -454 -656 -861 -1162 -1034 -93 -32 -131 -50 -151 -73 -16 -17 -28 -36 -28 -42 0 -14 126 -134 141 -134 26 0 211 52 268 76 252 102 483 258 705 473 183 179 307 344 410 545 56 109 117 282 137 386 16 87 16 280 0 355 -29 136 -106 274 -205 368 -199 190 -498 273 -834 231z"
        stroke="currentColor"
        stroke-width="80"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <path
        class="animated-path path-5"
        d="M5070 4698 c-59 -106 -437 -866 -520 -1048 -100 -216 -269 -594 -352 -785 -194 -446 -240 -553 -355 -824 -68 -162 -122 -299 -120 -304 2 -8 213 -93 245 -99 9 -2 23 20 37 57 12 33 117 296 233 585 548 1369 962 2420 962 2447 0 6 -65 43 -77 43 -7 0 -31 -33 -53 -72z"
        stroke="currentColor"
        stroke-width="70"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>

<style scoped>
.logo-svg {
  width: 100%;
  height: 100%;
  display: block;
}

@media (prefers-reduced-motion) {
  .animated-path {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}

@keyframes drawPath {
  0% {
    stroke-dashoffset: 3000px;
    stroke-dasharray: 0 3000px;
    opacity: 0;
  }
  4% {
    opacity: 1;
  }
  22% {
    stroke-dasharray: 3000px 0;
    stroke-dashoffset: 0;
  }
  78% {
    stroke-dasharray: 3000px 0;
    stroke-dashoffset: 0;
    opacity: 1;
  }
  88% {
    opacity: 0.5;
  }
  92%,
  100% {
    stroke-dasharray: 0 3000px;
    stroke-dashoffset: 3000px;
    opacity: 0;
  }
}

@keyframes drawPathGlow {
  0% {
    stroke-dashoffset: 3000px;
    stroke-dasharray: 0 3000px;
    opacity: 0;
  }
  4% {
    opacity: 0.6;
  }
  22% {
    stroke-dasharray: 3000px 0;
    stroke-dashoffset: 0;
  }
  78% {
    stroke-dasharray: 3000px 0;
    stroke-dashoffset: 0;
    opacity: 0.6;
  }
  88% {
    opacity: 0.3;
  }
  92%,
  100% {
    stroke-dasharray: 0 3000px;
    stroke-dashoffset: 3000px;
    opacity: 0;
  }
}

.animated-path {
  stroke-dashoffset: 3000px;
  stroke-dasharray: 3000px 0;
  animation: drawPath 22s cubic-bezier(0.65, 0, 0.35, 1) forwards infinite;
}

.glow {
  animation: drawPathGlow 22s cubic-bezier(0.65, 0, 0.35, 1) forwards infinite;
}

.path-1 {
  animation-delay: 0s;
}
.path-2 {
  animation-delay: 1.2s;
}
.path-3 {
  animation-delay: 2.4s;
}
.path-4 {
  animation-delay: 3.8s;
}
.path-5 {
  animation-delay: 5.5s;
}

.dark {
  color: #fdfdfd;
}

:root {
  color: #303030;
}
</style>

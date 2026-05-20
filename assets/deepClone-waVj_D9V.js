import{C as e,X as t,_ as n,g as r,z as i}from"./dist-DEmgr78k.js";import{n as a,t as o}from"./vue.D51lypTh-DxhDXDo3.js";var s={__name:`deepClone`,setup(s){let c={title:`深拷贝(deepClone) ES5 与 ES6`,date:`2021-12-25T09:00:00.000Z`,lang:`zh`,duration:`3min`,meta:[{property:`og:title`,content:`深拷贝(deepClone) ES5 与 ES6`},{name:`twitter:title`,content:`深拷贝(deepClone) ES5 与 ES6`}]};return o({title:`深拷贝(deepClone) ES5 与 ES6`,meta:[{property:`og:title`,content:`深拷贝(deepClone) ES5 与 ES6`},{name:`twitter:title`,content:`深拷贝(deepClone) ES5 与 ES6`}]}),(o,s)=>{let l=a;return i(),n(l,{frontmatter:c},{default:t(()=>[...s[0]||=[r(`div`,{class:`prose m-auto slide-enter-content`},[r(`h2`,{id:`es5`,tabindex:`-1`},[e(`ES5 `),r(`a`,{class:`header-anchor`,href:`#es5`,"aria-hidden":`true`},`#`)]),r(`p`,null,[e(`利用`),r(`code`,null,`Object.prototype.toString.call()`),e(`去判断是对象还是数组。`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`function deepClone (origin, target) {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  var toStr = Object.prototype.toString;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  var tar = target || toStr.call(origin) === '[object Array]' ? [] : {};`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  for (var k in origin){`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (origin.hasOwnProperty(k)) {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`      if (typeof origin[k] === 'object' && origin[k] !== null) {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        tar[k] = toStr.call(origin[k]) === '[object Array]' ? [] : {};`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        deepClone(origin[k], tar[k]);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`      }else{`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        tar[k] = origin[k];`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`      }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  return tar;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`h2`,{id:`es6`,tabindex:`-1`},[e(`ES6 `),r(`a`,{class:`header-anchor`,href:`#es6`,"aria-hidden":`true`},`#`)]),r(`p`,null,[e(`利用`),r(`code`,null,`new origin.constructor()`),e(`将返回一个与之不同的新的对象，省了用`),r(`code`,null,`Object.prototype.toString.call()`),e(`去判断，来做到深拷贝。`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`function deepClone (origin, hashMap = new WeakMap()) {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (origin == undefined || typeof origin !== 'object') {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    return origin;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (origin instanceof Date) {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    return new Date(origin);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (origin instanceof RegExp) {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    return new RegExp(origin);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  const hashKey = hashMap.get(origin);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  if (hashKey) {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    return hashKey;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  const target = new origin.constructor();`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  hashMap.set(origin, target);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  for (let k in origin) {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if (origin.hasOwnProperty(k)) {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`      target[k] = deepClone(origin[k], hashMap);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  return target;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])])],-1)]]),_:1})}}};export{s as default};
import{R as e,S as t,Y as n,g as r,h as i}from"./dist-CL_bAmHc.js";import{n as a,t as o}from"./vue.D51lypTh-Cdk7g2dA.js";var s={__name:`deepClone`,setup(s){let c={title:`深拷贝(deepClone) ES5 与 ES6`,date:`2021-12-25T09:00:00.000Z`,lang:`zh`,duration:`3min`,meta:[{property:`og:title`,content:`深拷贝(deepClone) ES5 与 ES6`},{name:`twitter:title`,content:`深拷贝(deepClone) ES5 与 ES6`}]};return o({title:`深拷贝(deepClone) ES5 与 ES6`,meta:[{property:`og:title`,content:`深拷贝(deepClone) ES5 与 ES6`},{name:`twitter:title`,content:`深拷贝(deepClone) ES5 与 ES6`}]}),(o,s)=>{let l=a;return e(),r(l,{frontmatter:c},{default:n(()=>[...s[0]||=[i(`div`,{class:`prose m-auto slide-enter-content`},[i(`h2`,{id:`es5`,tabindex:`-1`},[t(`ES5 `),i(`a`,{class:`header-anchor`,href:`#es5`,"aria-hidden":`true`},`#`)]),i(`p`,null,[t(`利用`),i(`code`,null,`Object.prototype.toString.call()`),t(`去判断是对象还是数组。`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`function deepClone (origin, target) {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  var toStr = Object.prototype.toString;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  var tar = target || toStr.call(origin) === '[object Array]' ? [] : {};`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  for (var k in origin){`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    if (origin.hasOwnProperty(k)) {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`      if (typeof origin[k] === 'object' && origin[k] !== null) {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        tar[k] = toStr.call(origin[k]) === '[object Array]' ? [] : {};`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        deepClone(origin[k], tar[k]);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`      }else{`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        tar[k] = origin[k];`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`      }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  return tar;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}`)])])]),i(`h2`,{id:`es6`,tabindex:`-1`},[t(`ES6 `),i(`a`,{class:`header-anchor`,href:`#es6`,"aria-hidden":`true`},`#`)]),i(`p`,null,[t(`利用`),i(`code`,null,`new origin.constructor()`),t(`将返回一个与之不同的新的对象，省了用`),i(`code`,null,`Object.prototype.toString.call()`),t(`去判断，来做到深拷贝。`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`function deepClone (origin, hashMap = new WeakMap()) {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  if (origin == undefined || typeof origin !== 'object') {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    return origin;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  if (origin instanceof Date) {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    return new Date(origin);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  if (origin instanceof RegExp) {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    return new RegExp(origin);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  const hashKey = hashMap.get(origin);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  if (hashKey) {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    return hashKey;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  const target = new origin.constructor();`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  hashMap.set(origin, target);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  for (let k in origin) {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    if (origin.hasOwnProperty(k)) {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`      target[k] = deepClone(origin[k], hashMap);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  return target;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}`)])])])],-1)]]),_:1})}}};export{s as default};
import{R as e,S as t,Y as n,g as r,h as i}from"./dist-CL_bAmHc.js";import{n as a,t as o}from"./vue.D51lypTh-B3eMZl2O.js";var s={__name:`promise`,setup(s){let c={title:`Promise - 异步问题同步化解决方案`,date:`2021-10-12T09:00:00.000Z`,lang:`zh`,duration:`5min`,meta:[{property:`og:title`,content:`Promise - 异步问题同步化解决方案`},{name:`twitter:title`,content:`Promise - 异步问题同步化解决方案`}]};return o({title:`Promise - 异步问题同步化解决方案`,meta:[{property:`og:title`,content:`Promise - 异步问题同步化解决方案`},{name:`twitter:title`,content:`Promise - 异步问题同步化解决方案`}]}),(o,s)=>{let l=a;return e(),r(l,{frontmatter:c},{default:n(()=>[...s[0]||=[i(`div`,{class:`prose m-auto slide-enter-content`},[i(`h2`,{id:`什么是-promise`,tabindex:`-1`},[t(`什么是 Promise? `),i(`a`,{class:`header-anchor`,href:`#什么是-promise`,"aria-hidden":`true`},`#`)]),i(`p`,null,[i(`strong`,null,`Promise`),t(` 是ES6提供的一个原生的构造函数，我们可以打印看一下这个构造函数：`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`console.log(Promise)`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`打印结果： ƒ Promise() { [native code] }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`console.log(typeof Promise)`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`打印结果： function`)])])]),i(`p`,null,[i(`img`,{src:`https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/663b8e1f30a142b588341930f800bc79~tplv-k3u1fbpfcp-watermark.image?`,alt:`截屏2021-10-08 上午11.20.52.png`})]),i(`p`,null,[t(`可以看到 `),i(`code`,null,`Promise`),t(` 是一个构造函数，自身有`),i(`code`,null,`all`),t(`、`),i(`code`,null,`reject`),t(`、`),i(`code`,null,`resolve`),t(`这几个方法，原型上有`),i(`code`,null,`then`),t(`、`),i(`code`,null,`catch`),t(`等方法。 用`),i(`code`,null,`new`),t(`关键字和`),i(`code`,null,`Promise`),t(`构造器创建它的对象。该函数接受两个函数参数。当异步成功时，第一个函数（`),i(`code`,null,`resolve`),t(`）将被调用，并返回一个值代表成功。当其失败时，第二个函数（`),i(`code`,null,`reject`),t(`）将被调用，并返回失败原因。`)]),i(`h2`,{id:`一个简单的例子`,tabindex:`-1`},[t(`一个简单的例子 `),i(`a`,{class:`header-anchor`,href:`#一个简单的例子`,"aria-hidden":`true`},`#`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`const myFirstPromise = new Promise((resolve, reject) => {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    setTimeout(() => {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        Math.random() > 0.5 ? resolve('success') : reject('fail');`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    }, 1000);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`});`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`console.log(myFirstPromise); // Promise\xA0{<pending>}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`myFirstPromise.then((result) => {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(result);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}, (err) => {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(err);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`});`)])])]),i(`p`,null,[t(`一个\xA0`),i(`code`,null,`Promise`),t(`\xA0必然处于以下几种状态之一：`)]),i(`ul`,null,[i(`li`,null,[i(`strong`,null,`等待（pending）`),t(` : 初始状态，既没有被完成，也没有被拒绝。`)]),i(`li`,null,[i(`strong`,null,`已实现（fulfilled）`),t(` : 意味着操作成功完成。`)]),i(`li`,null,[i(`strong`,null,`已拒绝（rejected）`),t(` : 意味着操作失败。`)])]),i(`p`,null,[i(`code`,null,`then()`),t(`方法返回一个`),i(`code`,null,`Promise`),t(`它最多有两个参数：Promise 的成功和失败情况的回调函数。`)]),i(`p`,null,[t(`第一个参数(`),i(`code`,null,`onFulfilled`),t(`)：当`),i(`code`,null,`Promise`),t(`的状态为`),i(`code`,null,`fulfilled`),t(`时被调用，该函数有一个参数，即完成的最终结果。如果该参数不是一个函数，则会被内部替换为`),i(`code`,null,`(x) => x`),t(`, 即原样返回 Promise 最终结果的函数。`)]),i(`p`,null,[t(`第二个参数(`),i(`code`,null,`onRejected`),t(`)：当`),i(`code`,null,`Promise`),t(`的状态为`),i(`code`,null,`rejected`),t(`时被调用，该函数有一个参数，即拒绝的原因。如果该参数不是一个函数，则会被内部替换为一个`),i(`code`,null,`"Thrower" 函数 (it throws an error it received as argument)`),t(`。`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`myFirstPromise.then((result) => {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    // 当 Promise 被 fulfilled 时`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(result);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}).catch((reason) => {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    // 当 Promise 被 rejected 时`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(reason);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`});`)])])]),i(`p`,null,[i(`code`,null,`catch()`),t(`方法返回一个`),i(`code`,null,`Promise`),t(`并且处理拒绝的情况。它的行为与调用`),i(`code`,null,`then(undefined, onRejected)`),t(`\xA0相同。`)]),i(`p`,null,[i(`code`,null,`catch()`),t(`接受一个参数 (回调函数)：`)]),i(`p`,null,[t(`当`),i(`code`,null,`Promise`),t(`被`),i(`code`,null,`rejected`),t(`时调用的函数。该函数拥有一个参数`),i(`code`,null,`reason`),t(`(`),i(`code`,null,`rejected`),t(`的原因)`)]),i(`p`,null,[t(`如果这个参数 (指的是\xA0`),i(`code`,null,`onRejected`),t(`) 不是函数时，也是会报错的。`),i(`strong`,null,[t(`这与\xA0`),i(`code`,null,`then()`),t(`\xA0方法中第二个参数不是函数的情况吻合。`)])]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`myFirstPromise.finally(() => {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`});`)])])]),i(`p`,null,[i(`code`,null,`finally()`),t(`方法在 Promise 结束时，无论结果是`),i(`code`,null,`fulfilled`),t(`还是`),i(`code`,null,`rejected`),t(`，都会执行的回调函数。这样可以避免同样的语句需要在`),i(`code`,null,`then()`),t(`和`),i(`code`,null,`catch()`),t(`中都要写一次的情况。`)]),i(`p`,null,[t(`如果你想在`),i(`code`,null,`Promise`),t(`执行完毕后无论其结果怎样都做一些处理或清理时`),i(`code`,null,`finally()`),t(`方法或许是你需要的。`)]),i(`p`,null,[i(`code`,null,`finally()`),t(`方法的回调函数不接受任何参数，这意味着没有办法知道前面的`),i(`code`,null,`Promise`),t(`状态到底是`),i(`code`,null,`fulfilled`),t(`还是`),i(`code`,null,`rejected`),t(`。 这表明`),i(`code`,null,`finally`),t(`仅用于无论最终结果如何都要执行的情况，而不能依赖`),i(`code`,null,`Promise`),t(`执行结果。`)]),i(`p`,null,[i(`code`,null,`finally()`),t(`方法本身无异常抛出的情况下，总是会返回原来的`),i(`code`,null,`Promise`),t("对象值；若抛出异常，则返回异常的 Promise`对象。")]),i(`p`,{align:`right`},[i(`a`,{href:`https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise`},`更多关于Promise>>>`)]),i(`h2`,{id:`promise-存在的意义是什么？`,tabindex:`-1`},[t(`Promise 存在的意义是什么？ `),i(`a`,{class:`header-anchor`,href:`#promise-存在的意义是什么？`,"aria-hidden":`true`},`#`)]),i(`p`,null,[t(`我们都知道`),i(`code`,null,`Promise()`),t(`执行是同步的，而`),i(`code`,null,`then()`),t(`执行是异步的，为什么？`)]),i(`p`,null,[t(`为什么`),i(`code`,null,`Promise()`),t(`执行是同步的，而 `),i(`code`,null,`then()`),t(`执行是异步的呢？我就想把`),i(`code`,null,`then()`),t(`设计成同步不行吗？`)]),i(`p`,null,[t(`那么先看一个ajax的例子测试，这里用的是`),i(`code`,null,`jquery`),t(`。`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`data.json`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`[`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        "id": 1,`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        "name": "zhangsan"`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    },`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        "id": 2,`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        "name": "lisi"`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    },`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        "id": 3,`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        "name": "wangwu"`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    },`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        "id": 7,`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        "name": "LPieces"`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`]`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`index.js`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`// 异步程序`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`$.ajax({`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    url: "http://localhost:3000/data.json",`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    success (data) {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        console.log(data.map(item=>item.name));`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`});`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`console.log("My name is LPieces.");`)])])]),i(`p`,null,`运行结果：`),i(`p`,null,[i(`img`,{src:`https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d98b058ed3941b294ff361509fe3a80~tplv-k3u1fbpfcp-watermark.image?`,alt:`截屏2021-10-11 上午11.19.37.png`})]),i(`p`,null,[t(`上面的代码中`),i(`code`,null,`$.ajax()`),t(`是异步程序，而js执行是从上往下同步执行，当异步程序请求没回来时，下面`),i(`code`,null,`console.log()`),t(`当然就打印了这个很简单。那现在我想要把`),i(`code`,null,`success`),t(`中的操作抽离到外层出来怎么做呢？看下面的代码：`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`// 异步程序`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`const data = $.ajax({`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    url: "http://localhost:3000/data.json",`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    async: false // 同步`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`});`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`console.log(data.responseJSON.map(item=>item.name));`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`console.log("My name is LPieces.");`)])])]),i(`p`,null,`运行结果：`),i(`p`,null,[i(`img`,{src:`https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16fe2875fb904297a50cefba5d2f1525~tplv-k3u1fbpfcp-watermark.image?`,alt:`截屏2021-10-11 下午6.19.25.png`})]),i(`p`,null,[t(`当我设置了`),i(`code`,null,`async: false`),t(`上面的`),i(`code`,null,`ajax`),t(`和下面的打印就形成了同步的关系，虽然实现了我想要的结果，但是打印的`),i(`code`,null,`My name is LPieces`),t(`跑到下面去了，它要等着上面`),i(`code`,null,`ajax`),t(`执行完才打印出来，那这就不对了哦，这会阻塞了下面所有的代码。既然这样，来看看`),i(`code`,null,`Promise`),t(`怎么帮我解决这个问题：`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`const p = new Promise((resolve, reject) => {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    $.ajax({`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        url: 'http://localhost:3000/data.json',`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        success (data) {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`            resolve(data);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    })`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`})`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`p.then(res => {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(res.map(item=>item.name));`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`})`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`console.log("My name is LPieces.");`)])])]),i(`p`,null,`运行结果：`),i(`p`,null,[i(`img`,{src:`https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc7c5f86c1e441e381a734e9b353e2b9~tplv-k3u1fbpfcp-watermark.image?`,alt:`截屏2021-10-12 上午10.11.40.png`})]),i(`p`,null,[t(`是不是完美的解决了阻塞的问题呀，到这里应该能理解为什么`),i(`code`,null,`Promise()`),t(`的执行一定是同步的，而\xA0`),i(`code`,null,`then()`),t(`的执行一定是异步的了吧，如果`),i(`code`,null,`then()`),t(`是同步执行的话，那么就会回到上面阻塞的问题去了，那我设置`),i(`code`,null,`async: false`),t(`不香吗？干嘛还要写个`),i(`code`,null,`Promise`),t(`包裹`),i(`code`,null,`ajax`),t(`的代码呢？`)]),i(`h3`,{id:`promise-的存在是解决回调地狱吗？`,tabindex:`-1`},[t(`Promise 的存在是解决回调地狱吗？ `),i(`a`,{class:`header-anchor`,href:`#promise-的存在是解决回调地狱吗？`,"aria-hidden":`true`},`#`)]),i(`p`,null,[i(`code`,null,`Promise`),t(`只是顺便解决回调地狱，解决回调地狱最好的方法是`),i(`code`,null,`Promise + async awiat`),t(`的结合，举个栗子：`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`function getData(){`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    return new Promise((resolve, reject) => {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        // 注：当然 ajax 本身也有 Promise , 这里只是举个栗子`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        $.ajax({`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`            url: 'http://localhost:3000/data.json',`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`            success (data) {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`                resolve(data);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`            }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        })`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    })`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`async function doSth(){`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    try{`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        const data = await getData();`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        console.log(data.map(item=>item.name));`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        console.log("My name is LPieces.");`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    }catch(err){`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`        console.log(err);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`doSth();`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`console.log("My name is LPieces.");`)])])]),i(`p`,null,`运行结果：`),i(`p`,null,[i(`img`,{src:`https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17caeba4043141e88946145b922bec44~tplv-k3u1fbpfcp-watermark.image?`,alt:`截屏2021-10-12 上午10.56.09.png`})]),i(`p`,null,[i(`code`,null,`doSth()`),t(`和下面的打印是同步的执行关系。在`),i(`code`,null,`doSth()`),t(`里处理异步请求，如果需要上一个请求有结果后再请求，一路`),i(`code`,null,`await`),t(`下去就行了。`)]),i(`h3`,{id:`promise-存在的意义是异步问题同步化解决方案`,tabindex:`-1`},[i(`strong`,null,`Promise 存在的意义是异步问题同步化解决方案`),t(),i(`a`,{class:`header-anchor`,href:`#promise-存在的意义是异步问题同步化解决方案`,"aria-hidden":`true`},`#`)])],-1)]]),_:1})}}};export{s as default};
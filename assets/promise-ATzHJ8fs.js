import{C as e,X as t,_ as n,g as r,z as i}from"./dist-DEmgr78k.js";import{n as a,t as o}from"./vue.D51lypTh-DxhDXDo3.js";var s={__name:`promise`,setup(s){let c={title:`Promise - 异步问题同步化解决方案`,date:`2021-10-12T09:00:00.000Z`,lang:`zh`,duration:`5min`,meta:[{property:`og:title`,content:`Promise - 异步问题同步化解决方案`},{name:`twitter:title`,content:`Promise - 异步问题同步化解决方案`}]};return o({title:`Promise - 异步问题同步化解决方案`,meta:[{property:`og:title`,content:`Promise - 异步问题同步化解决方案`},{name:`twitter:title`,content:`Promise - 异步问题同步化解决方案`}]}),(o,s)=>{let l=a;return i(),n(l,{frontmatter:c},{default:t(()=>[...s[0]||=[r(`div`,{class:`prose m-auto slide-enter-content`},[r(`h2`,{id:`什么是-promise`,tabindex:`-1`},[e(`什么是 Promise? `),r(`a`,{class:`header-anchor`,href:`#什么是-promise`,"aria-hidden":`true`},`#`)]),r(`p`,null,[r(`strong`,null,`Promise`),e(` 是ES6提供的一个原生的构造函数，我们可以打印看一下这个构造函数：`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`console.log(Promise)`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`打印结果： ƒ Promise() { [native code] }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`console.log(typeof Promise)`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`打印结果： function`)])])]),r(`p`,null,[r(`img`,{src:`https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/663b8e1f30a142b588341930f800bc79~tplv-k3u1fbpfcp-watermark.image?`,alt:`截屏2021-10-08 上午11.20.52.png`})]),r(`p`,null,[e(`可以看到 `),r(`code`,null,`Promise`),e(` 是一个构造函数，自身有`),r(`code`,null,`all`),e(`、`),r(`code`,null,`reject`),e(`、`),r(`code`,null,`resolve`),e(`这几个方法，原型上有`),r(`code`,null,`then`),e(`、`),r(`code`,null,`catch`),e(`等方法。 用`),r(`code`,null,`new`),e(`关键字和`),r(`code`,null,`Promise`),e(`构造器创建它的对象。该函数接受两个函数参数。当异步成功时，第一个函数（`),r(`code`,null,`resolve`),e(`）将被调用，并返回一个值代表成功。当其失败时，第二个函数（`),r(`code`,null,`reject`),e(`）将被调用，并返回失败原因。`)]),r(`h2`,{id:`一个简单的例子`,tabindex:`-1`},[e(`一个简单的例子 `),r(`a`,{class:`header-anchor`,href:`#一个简单的例子`,"aria-hidden":`true`},`#`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`const myFirstPromise = new Promise((resolve, reject) => {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    setTimeout(() => {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        Math.random() > 0.5 ? resolve('success') : reject('fail');`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }, 1000);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`});`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`console.log(myFirstPromise); // Promise\xA0{<pending>}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`myFirstPromise.then((result) => {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(result);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}, (err) => {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(err);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`});`)])])]),r(`p`,null,[e(`一个\xA0`),r(`code`,null,`Promise`),e(`\xA0必然处于以下几种状态之一：`)]),r(`ul`,null,[r(`li`,null,[r(`strong`,null,`等待（pending）`),e(` : 初始状态，既没有被完成，也没有被拒绝。`)]),r(`li`,null,[r(`strong`,null,`已实现（fulfilled）`),e(` : 意味着操作成功完成。`)]),r(`li`,null,[r(`strong`,null,`已拒绝（rejected）`),e(` : 意味着操作失败。`)])]),r(`p`,null,[r(`code`,null,`then()`),e(`方法返回一个`),r(`code`,null,`Promise`),e(`它最多有两个参数：Promise 的成功和失败情况的回调函数。`)]),r(`p`,null,[e(`第一个参数(`),r(`code`,null,`onFulfilled`),e(`)：当`),r(`code`,null,`Promise`),e(`的状态为`),r(`code`,null,`fulfilled`),e(`时被调用，该函数有一个参数，即完成的最终结果。如果该参数不是一个函数，则会被内部替换为`),r(`code`,null,`(x) => x`),e(`, 即原样返回 Promise 最终结果的函数。`)]),r(`p`,null,[e(`第二个参数(`),r(`code`,null,`onRejected`),e(`)：当`),r(`code`,null,`Promise`),e(`的状态为`),r(`code`,null,`rejected`),e(`时被调用，该函数有一个参数，即拒绝的原因。如果该参数不是一个函数，则会被内部替换为一个`),r(`code`,null,`"Thrower" 函数 (it throws an error it received as argument)`),e(`。`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`myFirstPromise.then((result) => {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    // 当 Promise 被 fulfilled 时`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(result);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}).catch((reason) => {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    // 当 Promise 被 rejected 时`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(reason);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`});`)])])]),r(`p`,null,[r(`code`,null,`catch()`),e(`方法返回一个`),r(`code`,null,`Promise`),e(`并且处理拒绝的情况。它的行为与调用`),r(`code`,null,`then(undefined, onRejected)`),e(`\xA0相同。`)]),r(`p`,null,[r(`code`,null,`catch()`),e(`接受一个参数 (回调函数)：`)]),r(`p`,null,[e(`当`),r(`code`,null,`Promise`),e(`被`),r(`code`,null,`rejected`),e(`时调用的函数。该函数拥有一个参数`),r(`code`,null,`reason`),e(`(`),r(`code`,null,`rejected`),e(`的原因)`)]),r(`p`,null,[e(`如果这个参数 (指的是\xA0`),r(`code`,null,`onRejected`),e(`) 不是函数时，也是会报错的。`),r(`strong`,null,[e(`这与\xA0`),r(`code`,null,`then()`),e(`\xA0方法中第二个参数不是函数的情况吻合。`)])]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`myFirstPromise.finally(() => {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`});`)])])]),r(`p`,null,[r(`code`,null,`finally()`),e(`方法在 Promise 结束时，无论结果是`),r(`code`,null,`fulfilled`),e(`还是`),r(`code`,null,`rejected`),e(`，都会执行的回调函数。这样可以避免同样的语句需要在`),r(`code`,null,`then()`),e(`和`),r(`code`,null,`catch()`),e(`中都要写一次的情况。`)]),r(`p`,null,[e(`如果你想在`),r(`code`,null,`Promise`),e(`执行完毕后无论其结果怎样都做一些处理或清理时`),r(`code`,null,`finally()`),e(`方法或许是你需要的。`)]),r(`p`,null,[r(`code`,null,`finally()`),e(`方法的回调函数不接受任何参数，这意味着没有办法知道前面的`),r(`code`,null,`Promise`),e(`状态到底是`),r(`code`,null,`fulfilled`),e(`还是`),r(`code`,null,`rejected`),e(`。 这表明`),r(`code`,null,`finally`),e(`仅用于无论最终结果如何都要执行的情况，而不能依赖`),r(`code`,null,`Promise`),e(`执行结果。`)]),r(`p`,null,[r(`code`,null,`finally()`),e(`方法本身无异常抛出的情况下，总是会返回原来的`),r(`code`,null,`Promise`),e("对象值；若抛出异常，则返回异常的 Promise`对象。")]),r(`p`,{align:`right`},[r(`a`,{href:`https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise`},`更多关于Promise>>>`)]),r(`h2`,{id:`promise-存在的意义是什么？`,tabindex:`-1`},[e(`Promise 存在的意义是什么？ `),r(`a`,{class:`header-anchor`,href:`#promise-存在的意义是什么？`,"aria-hidden":`true`},`#`)]),r(`p`,null,[e(`我们都知道`),r(`code`,null,`Promise()`),e(`执行是同步的，而`),r(`code`,null,`then()`),e(`执行是异步的，为什么？`)]),r(`p`,null,[e(`为什么`),r(`code`,null,`Promise()`),e(`执行是同步的，而 `),r(`code`,null,`then()`),e(`执行是异步的呢？我就想把`),r(`code`,null,`then()`),e(`设计成同步不行吗？`)]),r(`p`,null,[e(`那么先看一个ajax的例子测试，这里用的是`),r(`code`,null,`jquery`),e(`。`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`data.json`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`[`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        "id": 1,`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        "name": "zhangsan"`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    },`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        "id": 2,`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        "name": "lisi"`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    },`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        "id": 3,`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        "name": "wangwu"`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    },`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        "id": 7,`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        "name": "LPieces"`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`]`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`index.js`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`// 异步程序`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`$.ajax({`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    url: "http://localhost:3000/data.json",`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    success (data) {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        console.log(data.map(item=>item.name));`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`});`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`console.log("My name is LPieces.");`)])])]),r(`p`,null,`运行结果：`),r(`p`,null,[r(`img`,{src:`https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d98b058ed3941b294ff361509fe3a80~tplv-k3u1fbpfcp-watermark.image?`,alt:`截屏2021-10-11 上午11.19.37.png`})]),r(`p`,null,[e(`上面的代码中`),r(`code`,null,`$.ajax()`),e(`是异步程序，而js执行是从上往下同步执行，当异步程序请求没回来时，下面`),r(`code`,null,`console.log()`),e(`当然就打印了这个很简单。那现在我想要把`),r(`code`,null,`success`),e(`中的操作抽离到外层出来怎么做呢？看下面的代码：`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`// 异步程序`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`const data = $.ajax({`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    url: "http://localhost:3000/data.json",`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    async: false // 同步`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`});`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`console.log(data.responseJSON.map(item=>item.name));`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`console.log("My name is LPieces.");`)])])]),r(`p`,null,`运行结果：`),r(`p`,null,[r(`img`,{src:`https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16fe2875fb904297a50cefba5d2f1525~tplv-k3u1fbpfcp-watermark.image?`,alt:`截屏2021-10-11 下午6.19.25.png`})]),r(`p`,null,[e(`当我设置了`),r(`code`,null,`async: false`),e(`上面的`),r(`code`,null,`ajax`),e(`和下面的打印就形成了同步的关系，虽然实现了我想要的结果，但是打印的`),r(`code`,null,`My name is LPieces`),e(`跑到下面去了，它要等着上面`),r(`code`,null,`ajax`),e(`执行完才打印出来，那这就不对了哦，这会阻塞了下面所有的代码。既然这样，来看看`),r(`code`,null,`Promise`),e(`怎么帮我解决这个问题：`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`const p = new Promise((resolve, reject) => {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    $.ajax({`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        url: 'http://localhost:3000/data.json',`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        success (data) {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`            resolve(data);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    })`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`})`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`p.then(res => {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(res.map(item=>item.name));`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`})`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`console.log("My name is LPieces.");`)])])]),r(`p`,null,`运行结果：`),r(`p`,null,[r(`img`,{src:`https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc7c5f86c1e441e381a734e9b353e2b9~tplv-k3u1fbpfcp-watermark.image?`,alt:`截屏2021-10-12 上午10.11.40.png`})]),r(`p`,null,[e(`是不是完美的解决了阻塞的问题呀，到这里应该能理解为什么`),r(`code`,null,`Promise()`),e(`的执行一定是同步的，而\xA0`),r(`code`,null,`then()`),e(`的执行一定是异步的了吧，如果`),r(`code`,null,`then()`),e(`是同步执行的话，那么就会回到上面阻塞的问题去了，那我设置`),r(`code`,null,`async: false`),e(`不香吗？干嘛还要写个`),r(`code`,null,`Promise`),e(`包裹`),r(`code`,null,`ajax`),e(`的代码呢？`)]),r(`h3`,{id:`promise-的存在是解决回调地狱吗？`,tabindex:`-1`},[e(`Promise 的存在是解决回调地狱吗？ `),r(`a`,{class:`header-anchor`,href:`#promise-的存在是解决回调地狱吗？`,"aria-hidden":`true`},`#`)]),r(`p`,null,[r(`code`,null,`Promise`),e(`只是顺便解决回调地狱，解决回调地狱最好的方法是`),r(`code`,null,`Promise + async awiat`),e(`的结合，举个栗子：`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`function getData(){`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    return new Promise((resolve, reject) => {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        // 注：当然 ajax 本身也有 Promise , 这里只是举个栗子`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        $.ajax({`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`            url: 'http://localhost:3000/data.json',`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`            success (data) {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`                resolve(data);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`            }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        })`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    })`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`async function doSth(){`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    try{`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        const data = await getData();`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        console.log(data.map(item=>item.name));`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        console.log("My name is LPieces.");`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }catch(err){`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`        console.log(err);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`doSth();`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`console.log("My name is LPieces.");`)])])]),r(`p`,null,`运行结果：`),r(`p`,null,[r(`img`,{src:`https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17caeba4043141e88946145b922bec44~tplv-k3u1fbpfcp-watermark.image?`,alt:`截屏2021-10-12 上午10.56.09.png`})]),r(`p`,null,[r(`code`,null,`doSth()`),e(`和下面的打印是同步的执行关系。在`),r(`code`,null,`doSth()`),e(`里处理异步请求，如果需要上一个请求有结果后再请求，一路`),r(`code`,null,`await`),e(`下去就行了。`)]),r(`h3`,{id:`promise-存在的意义是异步问题同步化解决方案`,tabindex:`-1`},[r(`strong`,null,`Promise 存在的意义是异步问题同步化解决方案`),e(),r(`a`,{class:`header-anchor`,href:`#promise-存在的意义是异步问题同步化解决方案`,"aria-hidden":`true`},`#`)])],-1)]]),_:1})}}};export{s as default};
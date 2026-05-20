import{C as e,X as t,_ as n,g as r,z as i}from"./dist-DEmgr78k.js";import{n as a,t as o}from"./vue.D51lypTh-DxhDXDo3.js";var s={__name:`js-pre-compilation`,setup(s){let c={title:`JS预编译`,date:`2021-11-10T05:00:00.000Z`,lang:`zh`,duration:`3min`,meta:[{property:`og:title`,content:`JS预编译`},{name:`twitter:title`,content:`JS预编译`}]};return o({title:`JS预编译`,meta:[{property:`og:title`,content:`JS预编译`},{name:`twitter:title`,content:`JS预编译`}]}),(o,s)=>{let l=a;return i(),n(l,{frontmatter:c},{default:t(()=>[...s[0]||=[r(`div`,{class:`prose m-auto slide-enter-content`},[r(`h2`,{id:`js运行三步曲`,tabindex:`-1`},[e(`JS运行三步曲 `),r(`a`,{class:`header-anchor`,href:`#js运行三步曲`,"aria-hidden":`true`},`#`)]),r(`ol`,null,[r(`li`,null,[r(`p`,null,`语法分析：扫描看有没有语法错误，但不执行`)]),r(`li`,null,[r(`p`,null,`预编译`)]),r(`li`,null,[r(`p`,null,`解释执行：解释一行执行一行`)])]),r(`h2`,{id:`预编译在什么时候发生？`,tabindex:`-1`},[e(`预编译在什么时候发生？ `),r(`a`,{class:`header-anchor`,href:`#预编译在什么时候发生？`,"aria-hidden":`true`},`#`)]),r(`p`,null,[e(`全局预编译发生在`),r(`code`,null,`页面加载完成`),e(`时执行，而函数预编译发生在`),r(`code`,null,`函数执行的前一刻`),e(`。`)]),r(`p`,null,[e(`预编译会把`),r(`code`,null,`函数声明提升`),e(`，`),r(`code`,null,`变量`),e(`的`),r(`code`,null,`声明提升`)]),r(`h2`,{id:`预编译前奏`,tabindex:`-1`},[e(`预编译前奏 `),r(`a`,{class:`header-anchor`,href:`#预编译前奏`,"aria-hidden":`true`},`#`)]),r(`ol`,null,[r(`li`,null,[r(`code`,null,`imply global`),e(` 暗示全局变量：即任何变量，如果变量未经声明就赋值，此变量就为全局对象所有。`)])]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`// eg(exempli gratia):`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`a = 123;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`var a = 123;`)])])]),r(`ol`,{start:`2`},[r(`li`,null,`一切声明的全局变量，都是window的属性。`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`eg: var a = 123; ===> window.a = 123;`)])])]),r(`h2`,{id:`预编译四部曲：`,tabindex:`-1`},[e(`预编译四部曲： `),r(`a`,{class:`header-anchor`,href:`#预编译四部曲：`,"aria-hidden":`true`},`#`)]),r(`ol`,null,[r(`li`,null,[r(`p`,null,[e(`创建`),r(`code`,null,`AO(Activation Object，执行期上下文)`),e(`对象`)])]),r(`li`,null,[r(`p`,null,[e(`找形参和变量声明，将变量和形参名作为`),r(`code`,null,`AO`),e(`对象的属性名，赋值为`),r(`code`,null,`undefined`)])]),r(`li`,null,[r(`p`,null,[e(`将`),r(`code`,null,`实参`),e(`的值和`),r(`code`,null,`形参相统一`)])]),r(`li`,null,[r(`p`,null,[e(`找`),r(`code`,null,`function函数声明`),e(`(非函数表达式)，值`),r(`code`,null,`赋予函数体`)])])]),r(`blockquote`,null,[r(`p`,null,[e(`注：上面是函数预编译四部曲，相比全局预编译不同点在于创建对象为`),r(`code`,null,`GO(Global Object，全局执行期上下文，在浏览器中为window)`),e(`，全局预编译`),r(`code`,null,`无形参`),e(`自然也`),r(`code`,null,`没有第三步`),e(`！！！`)])]),r(`h2`,{id:`函数预编译举例`,tabindex:`-1`},[e(`函数预编译举例 `),r(`a`,{class:`header-anchor`,href:`#函数预编译举例`,"aria-hidden":`true`},`#`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`function fu(a){`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(a);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var a = 123;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(a);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function a(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(a);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var b = function(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(b);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(d);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var d = 456;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function d(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(d);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var d = function(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(d);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  fu(7);`)])])]),r(`h3`,{id:`第一步`,tabindex:`-1`},[e(`第一步 `),r(`a`,{class:`header-anchor`,href:`#第一步`,"aria-hidden":`true`},`#`)]),r(`p`,null,`创建AO对象`),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`AO {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`h3`,{id:`第二步`,tabindex:`-1`},[e(`第二步 `),r(`a`,{class:`header-anchor`,href:`#第二步`,"aria-hidden":`true`},`#`)]),r(`p`,null,`找形参和变量声明，形参有a，变量声明有a，b，d，作为AO对象属性名，值为undefined。`),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`AO {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    a: undefined,`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    b: undefined,`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    d: undefined`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`h3`,{id:`第三步`,tabindex:`-1`},[e(`第三步 `),r(`a`,{class:`header-anchor`,href:`#第三步`,"aria-hidden":`true`},`#`)]),r(`p`,null,`实参和形参相统一，把实参7丢给形参a`),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`AO {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    a: 7,`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    b: undefined,`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    d: undefined`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`h3`,{id:`第四步`,tabindex:`-1`},[e(`第四步 `),r(`a`,{class:`header-anchor`,href:`#第四步`,"aria-hidden":`true`},`#`)]),r(`p`,null,`找函数声明，函数声明有fun a,fun d，值赋予函数体。`),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`AO {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    a: function a(){},`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    b: undefined,`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    d: function d(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`h3`,{id:`解释执行`,tabindex:`-1`},[e(`解释执行 `),r(`a`,{class:`header-anchor`,href:`#解释执行`,"aria-hidden":`true`},`#`)]),r(`p`,null,`到这预编译就结束了，开始解释执行代码，结果如下：`),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`function fu(a){`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(a); // function a(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var a = 123;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(a); // 123`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function a(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(a); // 123`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var b = function(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(b); // function(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(d); // function d(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var d = 456;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function d(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(d); // 456`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var d = function(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(d); // function(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  fu(7);`)])])]),r(`h2`,{id:`全局预编译举例`,tabindex:`-1`},[e(`全局预编译举例 `),r(`a`,{class:`header-anchor`,href:`#全局预编译举例`,"aria-hidden":`true`},`#`)]),r(`p`,null,`预编译先成GO对象，再生成AO对象，看下面这个例子：`),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`console.log(test);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  function test(){`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(test);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var test = 123;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(test);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function test(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  test(1);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  var test = 234;`)])])]),r(`h3`,{id:`第一步-1`,tabindex:`-1`},[e(`第一步 `),r(`a`,{class:`header-anchor`,href:`#第一步-1`,"aria-hidden":`true`},`#`)]),r(`p`,null,`创建GO对象`),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`GO {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`h3`,{id:`第二步-1`,tabindex:`-1`},[e(`第二步 `),r(`a`,{class:`header-anchor`,href:`#第二步-1`,"aria-hidden":`true`},`#`)]),r(`p`,null,[e(`全局`),r(`code`,null,`没有形参`),e(`只找变量声明test，作为GO对象属性名，值为undefined。`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`GO {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    test: undefined`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`h3`,{id:`第三步-1`,tabindex:`-1`},[e(`第三步 `),r(`a`,{class:`header-anchor`,href:`#第三步-1`,"aria-hidden":`true`},`#`)]),r(`p`,null,`全局没有第三步`),r(`h3`,{id:`第四步-1`,tabindex:`-1`},[e(`第四步 `),r(`a`,{class:`header-anchor`,href:`#第四步-1`,"aria-hidden":`true`},`#`)]),r(`p`,null,`找函数声明，函数声明有fun test，值赋予函数体。`),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`GO {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    test: function (){...}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`}`)])])]),r(`h3`,{id:`解释执行-1`,tabindex:`-1`},[e(`解释执行 `),r(`a`,{class:`header-anchor`,href:`#解释执行-1`,"aria-hidden":`true`},`#`)]),r(`p`,null,`函数预编译发生在函数执行的前一刻，所以当test执行前一刻会预编译AO对象，再执行函数体`),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`console.log(test); // 输出函数体`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  /*`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`      AO { // AO预编译最终结果`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`          test: function (){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`      }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  */`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  function test(){`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(test); // 输出AO自己的test function (){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var test = 123;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(test); // 123`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function test(){}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  test(1);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  var test = 234;`)])])]),r(`h2`,{id:`练习`,tabindex:`-1`},[e(`练习 `),r(`a`,{class:`header-anchor`,href:`#练习`,"aria-hidden":`true`},`#`)]),r(`h3`,{id:`_1`,tabindex:`-1`},[e(`1. `),r(`a`,{class:`header-anchor`,href:`#_1`,"aria-hidden":`true`},`#`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`function test(){`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(b);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if(a){`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`      var b = 100;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    c = 234;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(c);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  var a;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  test();`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  a = 10;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  console.log(c);`)])])]),r(`h3`,{id:`_2-1`,tabindex:`-1`},[e(`2.1 `),r(`a`,{class:`header-anchor`,href:`#_2-1`,"aria-hidden":`true`},`#`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`function bar() {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    return foo;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    foo = 10;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function foo() {}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var foo = 11;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  console.log(bar());`)])])]),r(`h3`,{id:`_2-2`,tabindex:`-1`},[e(`2.2 `),r(`a`,{class:`header-anchor`,href:`#_2-2`,"aria-hidden":`true`},`#`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`console.log(bar());`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  function bar() {`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    foo = 10;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function foo() {}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var foo = 11;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    return foo;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)])])]),r(`h3`,{id:`_3`,tabindex:`-1`},[e(`3. `),r(`a`,{class:`header-anchor`,href:`#_3`,"aria-hidden":`true`},`#`)]),r(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[r(`code`,{class:`language-text`},[r(`span`,{class:`line`},[r(`span`,null,`a = 100;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  function demo(e){`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    function e() {}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    arguments[0] = 2;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(e);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    if(a){`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`      var b = 123;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`      function c() {}`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var c;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    a = 10;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    var a;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(b);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    f = 123;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(c);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`    console.log(a);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  }`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  var a;`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  demo(1);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  console.log(a);`)]),e(`
`),r(`span`,{class:`line`},[r(`span`,null,`  console.log(f);`)])])])],-1)]]),_:1})}}};export{s as default};
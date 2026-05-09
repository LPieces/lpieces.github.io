import{R as e,S as t,Y as n,g as r,h as i}from"./dist-CL_bAmHc.js";import{n as a,t as o}from"./vue.D51lypTh-BcaeP652.js";var s={__name:`js-pre-compilation`,setup(s){let c={title:`JS预编译`,date:`2021-11-10T05:00:00.000Z`,lang:`zh`,duration:`3min`,meta:[{property:`og:title`,content:`JS预编译`},{name:`twitter:title`,content:`JS预编译`}]};return o({title:`JS预编译`,meta:[{property:`og:title`,content:`JS预编译`},{name:`twitter:title`,content:`JS预编译`}]}),(o,s)=>{let l=a;return e(),r(l,{frontmatter:c},{default:n(()=>[...s[0]||=[i(`div`,{class:`prose m-auto slide-enter-content`},[i(`h2`,{id:`js运行三步曲`,tabindex:`-1`},[t(`JS运行三步曲 `),i(`a`,{class:`header-anchor`,href:`#js运行三步曲`,"aria-hidden":`true`},`#`)]),i(`ol`,null,[i(`li`,null,[i(`p`,null,`语法分析：扫描看有没有语法错误，但不执行`)]),i(`li`,null,[i(`p`,null,`预编译`)]),i(`li`,null,[i(`p`,null,`解释执行：解释一行执行一行`)])]),i(`h2`,{id:`预编译在什么时候发生？`,tabindex:`-1`},[t(`预编译在什么时候发生？ `),i(`a`,{class:`header-anchor`,href:`#预编译在什么时候发生？`,"aria-hidden":`true`},`#`)]),i(`p`,null,[t(`全局预编译发生在`),i(`code`,null,`页面加载完成`),t(`时执行，而函数预编译发生在`),i(`code`,null,`函数执行的前一刻`),t(`。`)]),i(`p`,null,[t(`预编译会把`),i(`code`,null,`函数声明提升`),t(`，`),i(`code`,null,`变量`),t(`的`),i(`code`,null,`声明提升`)]),i(`h2`,{id:`预编译前奏`,tabindex:`-1`},[t(`预编译前奏 `),i(`a`,{class:`header-anchor`,href:`#预编译前奏`,"aria-hidden":`true`},`#`)]),i(`ol`,null,[i(`li`,null,[i(`code`,null,`imply global`),t(` 暗示全局变量：即任何变量，如果变量未经声明就赋值，此变量就为全局对象所有。`)])]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`// eg(exempli gratia):`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`a = 123;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`var a = 123;`)])])]),i(`ol`,{start:`2`},[i(`li`,null,`一切声明的全局变量，都是window的属性。`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`eg: var a = 123; ===> window.a = 123;`)])])]),i(`h2`,{id:`预编译四部曲：`,tabindex:`-1`},[t(`预编译四部曲： `),i(`a`,{class:`header-anchor`,href:`#预编译四部曲：`,"aria-hidden":`true`},`#`)]),i(`ol`,null,[i(`li`,null,[i(`p`,null,[t(`创建`),i(`code`,null,`AO(Activation Object，执行期上下文)`),t(`对象`)])]),i(`li`,null,[i(`p`,null,[t(`找形参和变量声明，将变量和形参名作为`),i(`code`,null,`AO`),t(`对象的属性名，赋值为`),i(`code`,null,`undefined`)])]),i(`li`,null,[i(`p`,null,[t(`将`),i(`code`,null,`实参`),t(`的值和`),i(`code`,null,`形参相统一`)])]),i(`li`,null,[i(`p`,null,[t(`找`),i(`code`,null,`function函数声明`),t(`(非函数表达式)，值`),i(`code`,null,`赋予函数体`)])])]),i(`blockquote`,null,[i(`p`,null,[t(`注：上面是函数预编译四部曲，相比全局预编译不同点在于创建对象为`),i(`code`,null,`GO(Global Object，全局执行期上下文，在浏览器中为window)`),t(`，全局预编译`),i(`code`,null,`无形参`),t(`自然也`),i(`code`,null,`没有第三步`),t(`！！！`)])]),i(`h2`,{id:`函数预编译举例`,tabindex:`-1`},[t(`函数预编译举例 `),i(`a`,{class:`header-anchor`,href:`#函数预编译举例`,"aria-hidden":`true`},`#`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`function fu(a){`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(a);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var a = 123;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(a);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    function a(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(a);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var b = function(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(b);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(d);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var d = 456;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    function d(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    `)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(d);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var d = function(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(d);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  fu(7);`)])])]),i(`h3`,{id:`第一步`,tabindex:`-1`},[t(`第一步 `),i(`a`,{class:`header-anchor`,href:`#第一步`,"aria-hidden":`true`},`#`)]),i(`p`,null,`创建AO对象`),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`AO {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}`)])])]),i(`h3`,{id:`第二步`,tabindex:`-1`},[t(`第二步 `),i(`a`,{class:`header-anchor`,href:`#第二步`,"aria-hidden":`true`},`#`)]),i(`p`,null,`找形参和变量声明，形参有a，变量声明有a，b，d，作为AO对象属性名，值为undefined。`),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`AO {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    a: undefined,`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    b: undefined,`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    d: undefined`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}`)])])]),i(`h3`,{id:`第三步`,tabindex:`-1`},[t(`第三步 `),i(`a`,{class:`header-anchor`,href:`#第三步`,"aria-hidden":`true`},`#`)]),i(`p`,null,`实参和形参相统一，把实参7丢给形参a`),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`AO {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    a: 7,`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    b: undefined,`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    d: undefined`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}`)])])]),i(`h3`,{id:`第四步`,tabindex:`-1`},[t(`第四步 `),i(`a`,{class:`header-anchor`,href:`#第四步`,"aria-hidden":`true`},`#`)]),i(`p`,null,`找函数声明，函数声明有fun a,fun d，值赋予函数体。`),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`AO {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    a: function a(){},`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    b: undefined,`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    d: function d(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}`)])])]),i(`h3`,{id:`解释执行`,tabindex:`-1`},[t(`解释执行 `),i(`a`,{class:`header-anchor`,href:`#解释执行`,"aria-hidden":`true`},`#`)]),i(`p`,null,`到这预编译就结束了，开始解释执行代码，结果如下：`),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`function fu(a){`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(a); // function a(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var a = 123;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(a); // 123`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    function a(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(a); // 123`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var b = function(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(b); // function(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(d); // function d(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var d = 456;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    function d(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(d); // 456`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var d = function(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(d); // function(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  fu(7);`)])])]),i(`h2`,{id:`全局预编译举例`,tabindex:`-1`},[t(`全局预编译举例 `),i(`a`,{class:`header-anchor`,href:`#全局预编译举例`,"aria-hidden":`true`},`#`)]),i(`p`,null,`预编译先成GO对象，再生成AO对象，看下面这个例子：`),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`console.log(test);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  function test(){`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(test);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var test = 123;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(test);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    function test(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  test(1);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  var test = 234;`)])])]),i(`h3`,{id:`第一步-1`,tabindex:`-1`},[t(`第一步 `),i(`a`,{class:`header-anchor`,href:`#第一步-1`,"aria-hidden":`true`},`#`)]),i(`p`,null,`创建GO对象`),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`GO {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}`)])])]),i(`h3`,{id:`第二步-1`,tabindex:`-1`},[t(`第二步 `),i(`a`,{class:`header-anchor`,href:`#第二步-1`,"aria-hidden":`true`},`#`)]),i(`p`,null,[t(`全局`),i(`code`,null,`没有形参`),t(`只找变量声明test，作为GO对象属性名，值为undefined。`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`GO {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    test: undefined`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}`)])])]),i(`h3`,{id:`第三步-1`,tabindex:`-1`},[t(`第三步 `),i(`a`,{class:`header-anchor`,href:`#第三步-1`,"aria-hidden":`true`},`#`)]),i(`p`,null,`全局没有第三步`),i(`h3`,{id:`第四步-1`,tabindex:`-1`},[t(`第四步 `),i(`a`,{class:`header-anchor`,href:`#第四步-1`,"aria-hidden":`true`},`#`)]),i(`p`,null,`找函数声明，函数声明有fun test，值赋予函数体。`),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`GO {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    test: function (){...}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`}`)])])]),i(`h3`,{id:`解释执行-1`,tabindex:`-1`},[t(`解释执行 `),i(`a`,{class:`header-anchor`,href:`#解释执行-1`,"aria-hidden":`true`},`#`)]),i(`p`,null,`函数预编译发生在函数执行的前一刻，所以当test执行前一刻会预编译AO对象，再执行函数体`),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`console.log(test); // 输出函数体`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  /*`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`      AO { // AO预编译最终结果`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`          test: function (){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`      }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  */`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  function test(){`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(test); // 输出AO自己的test function (){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var test = 123;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(test); // 123`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    function test(){}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  test(1);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  var test = 234;`)])])]),i(`h2`,{id:`练习`,tabindex:`-1`},[t(`练习 `),i(`a`,{class:`header-anchor`,href:`#练习`,"aria-hidden":`true`},`#`)]),i(`h3`,{id:`_1`,tabindex:`-1`},[t(`1. `),i(`a`,{class:`header-anchor`,href:`#_1`,"aria-hidden":`true`},`#`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`function test(){`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(b);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    if(a){`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`      var b = 100;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    c = 234;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(c);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  var a;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  test();`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  a = 10;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  console.log(c);`)])])]),i(`h3`,{id:`_2-1`,tabindex:`-1`},[t(`2.1 `),i(`a`,{class:`header-anchor`,href:`#_2-1`,"aria-hidden":`true`},`#`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`function bar() {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    return foo;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    foo = 10;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    function foo() {}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var foo = 11;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  console.log(bar());`)])])]),i(`h3`,{id:`_2-2`,tabindex:`-1`},[t(`2.2 `),i(`a`,{class:`header-anchor`,href:`#_2-2`,"aria-hidden":`true`},`#`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`console.log(bar());`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  function bar() {`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    foo = 10;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    function foo() {}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var foo = 11;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    return foo;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)])])]),i(`h3`,{id:`_3`,tabindex:`-1`},[t(`3. `),i(`a`,{class:`header-anchor`,href:`#_3`,"aria-hidden":`true`},`#`)]),i(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light`,style:{"--s-dark":`#dbd7caee`,"--s-light":`#393a34`,"--s-dark-bg":`#121212`,"--s-light-bg":`#ffffff`},tabindex:`0`},[i(`code`,{class:`language-text`},[i(`span`,{class:`line`},[i(`span`,null,`a = 100;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  function demo(e){`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    function e() {}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    arguments[0] = 2;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(e);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    if(a){`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`      var b = 123;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`      function c() {}`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var c;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    a = 10;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    var a;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(b);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    f = 123;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(c);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`    console.log(a);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  }`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  var a;`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  demo(1);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  console.log(a);`)]),t(`
`),i(`span`,{class:`line`},[i(`span`,null,`  console.log(f);`)])])])],-1)]]),_:1})}}};export{s as default};
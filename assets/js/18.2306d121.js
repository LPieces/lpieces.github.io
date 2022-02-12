(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{581:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"缘由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缘由"}},[s._v("#")]),s._v(" 缘由")]),s._v(" "),a("p",[s._v("最近在做公司的一个点餐H5项目需要前端动态计算用户选的商品的总价（单价*数量）和购物车的总价格时发现关于 JavaScript 浮点数计算精度不准确问题。在控制台输入0.1+0.2也能发现此问题。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    // 加法\n    0.1 + 0.2 = 0.30000000000000004\n    0.7 + 0.1 = 0.7999999999999999\n    0.2 + 0.4 = 0.6000000000000001\n\n    // 减法\n    1.5 - 1.2 = 0.30000000000000004\n    0.3 - 0.2 = 0.09999999999999998\n    \n    // 乘法\n    19.9 * 100 = 1989.9999999999998\n    0.8 * 3 = 2.4000000000000004\n    35.41 * 100 = 3540.9999999999995\n\n    // 除法\n    0.3 / 0.1 = 2.9999999999999996\n    0.69 / 10 = 0.06899999999999999\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"问题的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题的原因"}},[s._v("#")]),s._v(" 问题的原因")]),s._v(" "),a("p",[s._v("为什么 0.1+0.2 JS加不了？\n产生浮点数计算精度不准确的原因： 在计算机角度，计算机算的是二进制，而不是十进制。二进制后变成了无线不循环的数，而计算机可支持浮点数的小数部分可支持到52位，所有两者相加，在转换成十进制，得到的数就不准确了，加减乘除运算原理一样。")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("十进制")]),s._v(" "),a("th",[s._v("二进制")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("0.1")]),s._v(" "),a("td",[s._v("0.0001 1001 1001 1001 ...")])]),s._v(" "),a("tr",[a("td",[s._v("0.2")]),s._v(" "),a("td",[s._v("0.0011 0011 0011 0011 ...")])]),s._v(" "),a("tr",[a("td",[s._v("0.3")]),s._v(" "),a("td",[s._v("0.0100 1100 1100 1100 ...")])]),s._v(" "),a("tr",[a("td",[s._v("0.4")]),s._v(" "),a("td",[s._v("0.0110 0110 0110 0110 ...")])]),s._v(" "),a("tr",[a("td",[s._v("0.5")]),s._v(" "),a("td",[s._v("0.1")])]),s._v(" "),a("tr",[a("td",[s._v("0.6")]),s._v(" "),a("td",[s._v("0.1001 1001 1001 1001 ...")])])])]),s._v(" "),a("p",[s._v("所以两者相加之后得到这么一串 "),a("strong",[s._v("0.0100110011001100110011001100110011001100110011001100")]),s._v(" 因浮点数小数位的限制而截断的二进制数字，这时候，我们再把它转换为十进制，就成了 "),a("strong",[s._v("0.30000000000000004")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"最通俗的解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最通俗的解释"}},[s._v("#")]),s._v(" 最通俗的解释")]),s._v(" "),a("p",[s._v("比如一个数 1÷3=0.33333333...... 大家都知道3会一直无限循环，数学可以表示，但是计算机要存储，方便下次取出来再使用，但0.333333...... 这个数 无限循环，你让计算机怎么存储？计算机再大的内存它也存不下，对吧! 所以不能存储一个相对于数学来说的值，只能存储一个近似值，所以当计算机存储后再取出来用时就会出现精度问题。")]),s._v(" "),a("h2",{attrs:{id:"解决方案-math-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-math-js"}},[s._v("#")]),s._v(" 解决方案 - Math.js")]),s._v(" "),a("p",[s._v("对于任意精度的计算，math.js 支持BigNumber 数据类型。")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install mathjs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("请注意，在 TypeScript 项目中使用 mathjs 时，您还必须安装类型定义文件：npm install @types/mathjs.")])]),s._v(" "),a("h3",{attrs:{id:"封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[s._v("#")]),s._v(" 封装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import * as math from 'mathjs';\nexport default {\n    // 加\n\tadd(num1,num2){\n\t\treturn math.add(math.bignumber(num1),math.bignumber(num2));\n\t},\n\t// 乘\n\tmultiply(num1,num2){\n\t\treturn math.multiply(math.bignumber(num1),math.bignumber(num2));\n\t},\n\t// 减\n\tsubtract(num1,num2){\n\t\treturn math.subtract(math.bignumber(num1),math.bignumber(num2));\n\t},\n\t// 除\n\tdivide(num1,num2){\n\t\treturn math.divide(math.bignumber(num1),math.bignumber(num2));\n\t}\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import math from './math.js'\nlet addNum = math.add(3,2); // 5\nlet mulNum = math.multiply(3,2); // 6\nlet subNum = math.subtract(3,2); // 1 \nlet divNum = math.divide(3,2); // 1.5\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
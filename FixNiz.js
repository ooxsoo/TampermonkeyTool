// ==UserScript==
// @name         nizFix
// @namespace    https://github.com/ooxsoo/TampermonkeyTool
// @version      0.1
// @description  fix niz
// @author       ooxsoo
// @match        http://www.niztech.cn/%E6%9C%80%E6%96%B0%E5%9B%BA%E4%BB%B6
// @icon         https://www.google.com/s2/favicons?domain=niztech.cn
// @grant        none
// @run-at       document-start
// @updateURL    https://ooxsoo.github.io/TampermonkeyTool/FixNiz.js
// ==/UserScript==

(function () {
  "use strict";

  // let needRemoveNode = null;
  // for (let i = 0; i < document.head.childNodes.length; i++) {
  //   let node = document.head.childNodes[i];
  //   if (
  //     node.attributes != null &&
  //     node.attributes.getNamedItem("src") != null
  //   ) {
  //     let src = node.attributes.getNamedItem("src").value;
  //     console.log(src);
  //     if (src == "/Content/lib/laypage/laypage.js") {
  //       needRemoveNode = node;
  //       console.log("找到错误节点");
  //       break;
  //     }
  //   }
  // }

  // if (needRemoveNode != null) {
  //   console.log("删除错误节点");
  //   document.head.removeChild(needRemoveNode);
  // }

  console.log("添加head");
  var script = document.createElement("script");
  // script.type = "text/javascript";
  script.setAttribute("src", "/content/lib/laypage/laypage.js");
  document.head.appendChild(script);
  console.log(document.head);

  let wait = setInterval(() => {
    if (typeof laypage != "undefined") {
      console.log("关闭等待");
      clearInterval(wait);
      laypage({
        cont: "pages",
        pages: Math.ceil(0 / 15), //可以叫服务端把总页数放在某一个隐藏域，再获取。假设我们获取到的是18
        curr: 1,
        //skip: true,
        skin: "yahei", //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
        groups: 7, //连续显示分页数
        jump: function (e, first) {
          //触发分页后的回调
          if (!first) {
            //一定要加此判断，否则初始时会无限刷新
            location.href = "?page=" + e.curr;
          }
        },
      });
    }
  }, 200);
})();

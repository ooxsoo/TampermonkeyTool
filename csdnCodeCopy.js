// ==UserScript==
// @name         Csdn CodeCopy
// @namespace    https://github.com/ooxsoo/TampermonkeyTool
// @version      0.2
// @description  csdn code copy
// @author       You
// @match        https://blog.csdn.net/*/article/details/*
// @match        https://*.blog.csdn.net/article/details/*
// @icon         https://www.google.com/s2/favicons?domain=csdn.net
// @grant        none
// @run-at       document-idle
// @updateURL    https://ooxsoo.github.io/TampermonkeyTool/csdnCodeCopy.js
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  // code top div
  let content_views = document.getElementById("content_views");
  if (content_views) {
    content_views.style.userSelect = "auto";
    let pres = content_views.getElementsByTagName("pre");
    // console.log(pres);
    if (pres) {
      for (let i = 0; i < pres.length; i++) {
        pres[i].style.userSelect = "auto";
        let codes = pres[i].getElementsByTagName("code");

        if (codes) {
          for (let j = 0; j < codes.length; j++) {
            let el = codes[j];
            el.style.userSelect = "auto";
            el.removeAttribute("onclick");
            el.onclick = null;
          }
        }
      }
    }
  }

  let test = document.getElementsByClassName("blog-content-box");
  if (test) {
    for (let i = 0; i < test.length; i++) {
      let copyNode = test[i];
      // replace element
      //   let old_element = copyNode;
      //   let new_element = old_element.cloneNode(false);
      //   old_element.parentNode.replaceChild(new_element, old_element);

      copyNode.addEventListener(
        "copy",
        function (event) {
          console.log("修改复制内容");
          let str = event.clipboardData?.getData("text/plain");
          if (str == null) {
            str = window.clipboardData.getData("text");
          }
          str = str.replace(csdn.copyright.textData, "");

          if (event.clipboardData) {
            event.clipboardData.setData("text/plain", str);
          } else {
            if (window.clipboardData) {
              window.clipboardData.setData("text", str);
            }
          }
        },
        false
      );
    }
  }

  var css = [
    "#content_views pre{user-select: auto;}\n#content_views pre code{user-select: auto;}",
  ];

  var node = document.createElement("style");
  node.appendChild(document.createTextNode(css));
  var heads = document.getElementsByTagName("head");
  if (heads.length > 0) {
    heads[0].appendChild(node);
  } else {
    // no head yet, stick it whereever
    document.documentElement.appendChild(node);
  }
})();

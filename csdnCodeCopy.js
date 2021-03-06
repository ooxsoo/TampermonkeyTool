// ==UserScript==
// @name         Csdn CodeCopy
// @namespace    https://github.com/ooxsoo/TampermonkeyTool
// @version      0.6.0
// @description  csdn code copy
// @author       ooxsoo
// @match        https://*.csdn.net/*
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

  // 红包雨
  var redpack = document.getElementById("csdn-redpack");
  if (redpack) {
    document.removeChild(redpack);
  }

  // let scriptsInBody = document.body.getElementsByTagName("script");
  // for (let i = 0; i < scriptsInBody.length; i++) {
  //   let node = scriptsInBody[i];
  //   let src = node.getAttribute("src");
  //   if (src == "https://g.csdnimg.cn/common/csdn-toolbar/csdn-toolbar.js") {
  //     document.body.removeChild(node);
  //     break;
  //   }
  // }

  // 头部广告
  document.body.onload = () => {
    console.log("document load");

    let removeAdInterval = setInterval(() => {
      clearInterval(removeAdInterval);
      var toolbar_advert = document.getElementsByClassName("toolbar-advert");
      if (toolbar_advert != null) {
        for (let i = 0; i < toolbar_advert.length; i++) {
          toolbar_advert[i].parentElement.removeChild(toolbar_advert[i]);
        }
      }

      if (typeof $ != "undefined" && $ != null) {
        $(document).trigger = () => {};
        $(document).prepend = () => {};
      }
    }, 200);

    for (let index = 0; index < removeAdInterval; index++) {
      clearInterval(index);
    }
  };
  
  // 去除关注博主可看全文
  let article_content = document.getElementById("article_content");
  article_content.removeAttribute("style");
  var hide_art_box = document.getElementsByClassName("hide-article-box");
  if (hide_art_box != null) {
    for (let i = 0; i < hide_art_box.length; i++) {
      hide_art_box[i].parentElement.removeChild(hide_art_box[i]);
    }
  };
})();

// ==UserScript==
// @name         beautify weibo
// @namespace    https://github.com/ooxsoo/TampermonkeyTool
// @version      0.1
// @description  beautify weibo
// @author       ooxsoo
// @match        https://weibo.com/*
// @icon         https://www.google.com/s2/favicons?domain=weibo.com
// @grant        none
// @grant        document-idle
// @updateURL    https://ooxsoo.github.io/TampermonkeyTool/BeautifyWeibo.js
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  let elementApp = document.getElementById("app");
  if (elementApp) {
    let divArr = elementApp.getElementsByTagName("div");
    for (let i = 0; i < divArr.length; i++) {
      let el = divArr[i];
      let className = el.getAttribute("class");
      //   console.log(className);
      if (className == null || className == "") continue;

      if (
        className.indexOf("Frame_side_") >= 0 ||
        className.indexOf("Main_side_") >= 0 ||
        className.indexOf("Frame_top_") >= 0
        //  ||
        // className.indexOf("SecBar_visable_") >= 0 ||
        // className.indexOf("SecBar_secBar_") >= 0
      ) {
        el.hidden = true;
      }

      if (className.indexOf("Main_full_") >= 0) {
        let waitBar = setInterval(() => {
          let node2Arr = el.getElementsByTagName("div");
          //   console.log("寻找");
          for (let j = 0; j < node2Arr.length; j++) {
            let el2 = node2Arr[j];
            let className2 = el2.getAttribute("class");
            if (className2 == null || className2 == "") continue;
            if (
              className2.indexOf("SecBar_visable_") >= 0 ||
              className2.indexOf("SecBar_secBar_") >= 0
            ) {
              el2.hidden = true;
              clearInterval(waitBar);
              //   console.log("break");
              break;
            }
          }
        }, 500);
      }
    }
  } else {
    console.log("未找到");
  }
})();

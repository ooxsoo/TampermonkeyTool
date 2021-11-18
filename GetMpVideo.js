// ==UserScript==
// @name         GetMpVideo
// @namespace    https://github.com/ooxsoo/TampermonkeyTool
// @version      0.1.1
// @description  get wechat mp video
// @author       ooxsoo
// @match        https://mp.weixin.qq.com/s/*
// @icon         https://www.google.com/s2/favicons?domain=qq.com
// @grant        none
// @run-at       document-idle
// @updateURL    https://ooxsoo.github.io/TampermonkeyTool/GetMpVideo.js
// ==/UserScript==

(function () {
  "use strict";

  let arr = window.__mpVideoTransInfo;
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      let data = arr[i];
      console.log(data.video_quality_wording + ":" + data.url);
    }
  }
})();

// ==UserScript==
// @name         视频答题点击跳过
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*:8003/learning/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let doProtect = ()=>{
        let modle = document.querySelector("body > div.modal-scrollable > div")
        if (modle == null) {
            console.warn("no Protect")
            return
        }
        if (modle.style.display == "None"){
            console.warn("no Protect")
            return;
        }

        let btn = document.querySelector("body > div.modal-scrollable > div > div > div > div.modal-footer.border-none.center.pt1 > button")
        if (btn == null) {
            console.warn("no Protect")
            return
        }

        btn.click()
        console.log("jump Protect")
    }

    let doAsk = ()=>{
        let skipBtn = document.querySelector("body > div:nth-child(1) > div.playPage.loadingwhite.qqq > div.body > div.live.left.posi-r > div > div > div > div.pv-ask-modal-wrap > div > div.pv-ask-foot > button.pv-ask-skip.pv-hide")
        if (skipBtn == null) {
            console.warn("no ask")
            return
        }

        skipBtn.click()
        console.log("jump ask")
    }

    // 人脸识别无法跳过。
    let doFace = ()=>{
        let faceModal = document.querySelector("body > div.modal-scrollable");
        if (faceModal == null){
            console.warn("no face")
            return;
        }

        // 倒计时节点，有这个节点，能确保是人脸识别窗口
        document.querySelector("body > div.modal-scrollable > div > div > div > div.modal-body > div > div.step.step2 > div.center.clearfix.noCameraHide > div.countdown")

        faceModal.remove();
        console.log("jump face")
    }

    let doAutoPlay = ()=>{
        let btnPlay = document.querySelector("body > div:nth-child(1) > div.playPage.loadingwhite.qqq > div.body > div.live.left.posi-r > div > div > div > div.pv-skin-red.pv-video-bottom.pv-subtitle-hide.pv-base-panel > div.pv-controls > div.pv-controls-left > button")
        if (btnPlay == null){
            console.warn("no playBtn")
            return;
        }
        let playClassIndex = btnPlay.className.indexOf("pv-icon-btn-play");
        if (playClassIndex < 0){
            console.warn("isplaying")
            return;
        }
        btnPlay.click();
        console.log("auto play")
    }

    var t1 = setInterval(()=>{
        doProtect();
        doAsk();
        // doFace();
        doAutoPlay();
        console.warn("-------------")
    },3000)
})();
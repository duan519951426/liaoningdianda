/* 视频播放 */
const documentReady = require("./modules/documentReady.js");   // domready

const main= ()=>{
    const play = document.getElementById("video-play");
    const ctrl = document.getElementById("video-ctrl");
    const video = document.getElementById("video");
    // 播放
    function videoPlay(event){
        event.stopImmediatePropagation();
        play.style.display = "none";
        ctrl.style.cursor = "pointer";
        video.play();
        ctrl.addEventListener("click", videoPause, false);
    }
    // 暂停
    function videoPause(event){
        play.style.display = "block";
        ctrl.style.cursor = "default";
        video.pause();
        ctrl.removeEventListener("click", videoPause);
    }
    // 初始化
    const init = ()=>{
        play.addEventListener("click", videoPlay,  false);
        video.addEventListener("ended", videoPause, false);
    };
    init();
};

module.exports = ()=>{
    if(!/(MSIE (6|7|8)\.0)/ig.test(window.navigator.appVersion)){
        documentReady(main);
    }
};
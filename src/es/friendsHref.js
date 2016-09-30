/* 常用链接点击打开新页面 */
const compatible = require("./modules/compatibleFunction.js"); // 兼容函数
const documentReady = require("./modules/documentReady.js");   // domready

// 判断是否是有效的网址
const href = h => /[a-zA-z]+:\/\/[^\s]+/ig.test(h) ? true : false;

// 打开新窗口
function penNewWindow(event){
    const h = this.value;
    if(href(h) === true){
        window.open(h);
    }
}

const main = ()=>{
    for(let i = 0, j = 4; i < j; i++){
        compatible.on(document.getElementById(`friendsHref-select-${i}`), "change", penNewWindow, false);
    }
};

module.exports = ()=>{
    documentReady(main);
};

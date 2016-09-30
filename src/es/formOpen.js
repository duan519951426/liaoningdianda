/* 点击立即登录弹出表单 */

const compatible = require("./modules/compatibleFunction.js"); // 兼容函数
const documentReady = require("./modules/documentReady.js");   // domready

const main = ()=>{
    const [login, form] = [document.getElementById("navbox-login"), document.getElementById("navbox-form")];
    // 点击出现
    function open(event){
        event.stopImmediatePropagation ? event.stopImmediatePropagation() : window.event.cancelBubble = true;
        form.style.display = "block";
    }
    // 点击windowx消失
    function close(event){
        form.style.display = "none";
    }
    // form不消失
    function formNotClose(event){
        event.stopImmediatePropagation ? event.stopImmediatePropagation() : window.event.cancelBubble = true;
    }
    // 初始化
    const init = ()=>{
        compatible.on(login, "click", open, false);
        compatible.on(form, "click", formNotClose, false);
        compatible.on(document.body, "click", close, false);
    };
    init();
};

module.exports = ()=>{
    documentReady(main);
};
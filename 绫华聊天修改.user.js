// ==UserScript==
// @name         绫华聊天修改器
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       洛天依x64
// @match        *://chat.tariri.xyz/*
// @match        *://chat.tariri.xyz:7860/*
// @match        *://chat.solarisai.xyz/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';console.log('脚本已加载');
	let btn=document.createElement("button");
btn.innerHTML="开始修改，点一下就好";//innerText也可以,区别是innerText不会解析html
btn.onclick=function(){
    //code
    document.querySelector("#component-4 > label > textarea").disabled=0;
    document.querySelector("#component-5 > label > textarea").disabled=0;
    alert("成功");
}
btn.style.background="#6cf";
btn.style.color="#fff";
document.body.insertBefore(btn,undefined);
})();

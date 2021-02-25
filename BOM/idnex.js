/*
    如何识别浏览器类型
    如何拆解url的各个部分

    navigator history
    screen    location


*/
//识别设备浏览器
const us = navigator.userAgent


console.log(us)
console.log(us.indexOf('Chrome'))

//screen
console.log(screen.width)
console.log(screen.height)

//loaction
console.log(location.href)//网址
console.log(location.protocol)//协议
console.log(location.host)//域名
console.log(location.search)//查询参数
console.log(location.hash)//查询hash
console.log(location.pathname)//查询路径

//history
history.forward//控制浏览器前进后退
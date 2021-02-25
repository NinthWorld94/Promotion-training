// const div1 =document.getElementById('div1')
// console.log('div1',div1)
// const divList = document.getElementsByTagName('div')
// console.log('divList',divList)
// const classList = document.getElementsByClassName('container')
// console.log('classList',classList)
// const p=document.querySelectorAll('p')
// const p2=Array.prototype.slice.call(p)
// const p1=Array.from(p)
// console.log('p',p)
// console.log('p1',p1)
// console.log('p2',p2)

//节点操作

//新增节点
// const div1=document.getElementById('div1')
// const p=document.createElement('p')
// p.innerHTML = 'new p'
//插入节点
// div1.appendChild(p)
//移动节点
// p.setAttribute('id','newp')
// console.log(p)
// const div2 = document.getElementById('div2')
// div2.appendChild(p)

//获取父元素
// p.parentNode

//获取子元素
// div2.chin

//优化dom操作之把dom操作整理成一步操作
let pList={
 0:'0',
 1:'1',
 2:'2',
 3:'3',
 4:'4' ,
 tagName:'p',
 length:5
}
const farg = document.createDocumentFragment()//虚拟dom
for(let i=0,p;i<pList.length;i++){
    p = document.createElement(pList.tagName)
    p.innerHTML=pList[i]
    farg.appendChild(p)
}
const div2 = document.getElementById('div2')
div2.appendChild(farg)

//不缓存dom查询结果
// for(let i= 0;i<div2.getElementsByTagName('p').length;i++){
//     console.log(i)
// }

//缓存dom查询结果
const div2pList = div2.getElementsByTagName('p')
const length =div2pList.length
for(let i=0;i<length;i++){
    console.log(i)
}

//property attribute的区别
/*
     property 修改对象的属性，不会体现到html结构
     attribute 修改的是html属性会改变htl数据结构
     两者都有肯引起dom重新渲染
*/
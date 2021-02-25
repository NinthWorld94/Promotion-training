// //通用的事件代理函数 应用场景 瀑布流
function delegateEvent(ele, type, delegateTarget, fn) {
    if (fn == null) { fn = delegateTarget; delegateTarget = null }
    delegateTarget
        ? ele.addEventListener(type, (e) => {
            let eventTarget = e.target
            while (!eventTarget.matches(delegateTarget)) {
                if (eventTarget === ele) {
                    eventTarget = null
                    break
                }
                eventTarget = eventTarget.parentNode
            }
            eventTarget && fn.call(eventTarget, e)
        })
        : ele.addEventListener(type, (e) => {
            fn.call(e.target, e)
        })
}
const div1 = document.getElementById('div1')
console.log(div1)
delegateEvent(div1, 'click', (e) => {
    e.preventDefault()
    e.target.innerHTML += '1'
    alert(e.target.innerHTML)
})
// delegateEvent(div1,'click','li',(e)=>{
//     e.preventDefault()
//     e.target.innerHTML+='1'
//     alert(e.target.innerHTML)
// })
const div1 = document.getElementById('div1')
function drag(ele) {
    let isDrag = false
    let position = []

    ele.addEventListener('mousedown', (e) => {
        isDrag = true
        position = [e.clientX, e.clientY]
    })
    document.addEventListener('mousemove', (e) => {
        if (!isDrag) return
        let dX = e.clientX - position[0]
        let dY = e.clientY - position[1]
        const left = parseInt(ele.style.left || 0)
        const top = parseInt(ele.style.top || 0)
        ele.style.left = left + dX + 'px'
        ele.style.top = top + dY +'px'
        position=[e.clientX,e.clientY]
    })
    ele.addEventListener('mouseup', () => {
        isDrag = false
    })
}
drag(div1)
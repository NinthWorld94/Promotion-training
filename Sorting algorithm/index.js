function deepth(node){
    let res = 0
    const dfs = (node,depth)=>{
        if(!node) return
        if(!node.left&&!node.right){
            res = Math.max(res,depth)
        }
        dfs(node.left,depth+1)
        dfs(node.right,depth+1)
    }
    dfs(node,1)
    return res
}
Array.prototype.seqSerach = function () {
    for (let i = 0; i < nums.length; i++) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1
}

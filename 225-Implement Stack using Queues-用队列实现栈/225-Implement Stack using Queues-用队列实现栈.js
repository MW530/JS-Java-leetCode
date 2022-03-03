var MyStack = function() {
    this.queue1 = []
    this.queue2 = []
};



/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype._revert = function(pop) {
    let preVal = null
    while(this.queue1.length !== 0){
        if(preVal !== null){
            this.queue2.unshift(preVal)
        }
        preVal = this.queue1.pop()
    }
    if(!pop){
        this.queue2.unshift(preVal)
    }
    let temp = this.queue1
    this.queue1 = this.queue2
    this.queue2 = temp
    return preVal
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.unshift(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this._revert(true)
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this._revert(false)
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
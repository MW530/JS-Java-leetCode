class MyQueue {

	private Stack<Integer> storeStack;
	private Stack<Integer> fetchStack;
	
    public MyQueue() {
    	storeStack = new Stack<>();
    	fetchStack = new Stack<>();
    }
    
    private void revertStack() {
    	while(!storeStack.isEmpty()) {
    		fetchStack.add(storeStack.pop());
    	}
    }
    
    public void push(int x) {
    	storeStack.add(x);
    }
    
    public int pop() {
    	if(fetchStack.isEmpty()) this.revertStack();
    	return fetchStack.pop();
    }
    
    public int peek() {
    	if(fetchStack.isEmpty()) this.revertStack();
    	return fetchStack.peek();
    }
    
    public boolean empty() {
    	return storeStack.isEmpty() && fetchStack.isEmpty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
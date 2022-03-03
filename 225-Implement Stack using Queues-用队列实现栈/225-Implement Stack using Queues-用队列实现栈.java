class MyStack {

	private Queue<Integer> queue1;
	private Queue<Integer> queue2;
	
    public MyStack() {
    	queue1 = new PriorityQueue<>();
    	queue2 = new PriorityQueue<>();
    }
    
    public void push(int x) {
    	queue1.add(x);
    }
    
    private int reQueue(boolean pop) {
    	Integer preVal = null;
    	while(!queue1.isEmpty()) {
    		if(preVal != null) queue2.add(preVal); 
    		preVal = queue1.poll();
    	}
    	if(!pop) {
    		queue2.add(preVal);
    	}
    	Queue<Integer> temp = queue1;
    	queue1 = queue2;
    	queue2 = temp;
    	return preVal;
    }
    
    public int pop() {
    	return reQueue(true);
    }
    
    public int top() {
    	return reQueue(false);
    }
    
    public boolean empty() {
    	return queue1.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */
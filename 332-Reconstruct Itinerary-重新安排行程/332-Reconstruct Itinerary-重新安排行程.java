class Solution {
    private Map<String, PriorityQueue<String>> map = new HashMap<>();

    private LinkedList<String> list = new LinkedList<>();

    public List<String> findItinerary(List<List<String>> tickets) {
        for (List<String> ticket : tickets) {
            String src = ticket.get(0);
            String dst = ticket.get(1);
            if (!map.containsKey(src)) {
                PriorityQueue<String> pq = new PriorityQueue<>();
                map.put(src, pq);
            }
            map.get(src).offer(dst);
        }
        dfs("JFK");
        return list;
    }

    private void dfs(String src) {
        PriorityQueue<String> pq = map.get(src);
        while (pq != null && !pq.isEmpty())
            dfs(pq.poll());
        list.addFirst(src);
    }
}
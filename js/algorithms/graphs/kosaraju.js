/*
    1. DFS on graph G with finishing times for each nodes and keep this track for each vertex u in graph O(n+m)
    2. Construct new Graph Gt from G called the transpose graph such that if we have (u,v) in G then Gt has (v,u) O(n+m)
    3. call DFS on Gt with specific ordering of vertices such that it is decreasing order of finishing time stamps
    4. For every time we get a point where we hit a back edge / deadlock we found us a connected component i.e each tree is strongly connected component
*/
Consider a graph with num nodes, labeled from 0 to num - 1. Given num and a list of edges where each edges[i] = [a, b] represents an undirected connection between nodes a and b, determine whether the provided edges form a valid tree.

A valid tree is a connected, acyclic graph that spans all num nodes. This means:

All nodes must be reachable from any other node
The graph must not contain any cycles
The graph must have exactly num - 1 edges, where num is the number of nodes
Return true if the edges form a valid tree; otherwise, return false.

Input
num: number: Number of nodes in the graph
edges: Array<[number, number]>: A 2D array where edges[i] = [a, b] represents an undirected edge between nodes a and b
Examples

Input: num = 5, edges = [[3,4],[0,3],[1,2],[0,1]]
Output: true
Explanation: The graph consists of 5 nodes (0, 1, 2, 3, 4) connected by 4 edges. All nodes are reachable from any other node, and there are no cycles. The graph has exactly num - 1 = 4 edges, satisfying the conditions for a valid tree.
Input: num = 5, edges = [[0,1],[1,2],[2,3],[3,4],[1,4]]
Output: false
Explanation: Although all nodes are connected, the graph contains a cycle (e.g., 1 -> 4 -> 3 -> 1), which violates the condition of being acyclic. Hence, the graph is not a valid tree.
Input: num = 3, edges = [[0,1]]
Output: false
Explanation: The graph consists of 3 nodes (0, 1, 2), but only 1 edge is provided. This leaves node 2 disconnected, violating the condition of being connected. Hence, the graph is not a valid tree.
Constraints
1 <= num <= 1000
1 <= edges.length <= 1000
edges[i].length == 2
0 <= a, b < num
a != b
There are no self-loops or repeated edges

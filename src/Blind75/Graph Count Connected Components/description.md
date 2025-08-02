Consider a graph with num nodes, labeled from 0 to num - 1. Given num and a list of edges where each edges[i] = [a, b] represents an undirected connection between nodes a and b, determine the number of connected components in the graph.

In the context of a graph, a component of an undirected graph is a connected subgraph that is not part of any larger connected subgraph.

Input
num: number: An integer, the number of nodes in the graph
edges: Array<[number, number]>: A 2D array where edges[i] = [a, b] represents an undirected edge between nodes a and b
Examples

Input: num = 6, edges = [[0,1],[4,5],[2,4],[1,3],[0,2]]
Output: 1
Explanation: All nodes are connected.
Input: num = 3, edges = [[0,1],[1,2]]
Output: 1
Explanation: All nodes are connected.
Input: num = 4, edges = [[0,1],[2,3]]
Output: 2
Explanation: There are two connected components: {0, 1} and {2, 3}.
Constraints
1 <= num <= 1000
1 <= edges.length <= 2000
edges[i].length == 2
0 <= a < b < num
a != b
There are no self-loops or duplicate edges

/**
 * Graph Data Structure
 * Assuming each node is connected to at least one other node.
 * Can be direcred/undirecred and/or weighted/unweighted.
 * Using adjacency list.
 */
class Graph {
  // default graph is direcred & unweighted
  constructor(direcred = true, weighted = false) {
    this.direcred = direcred;
    this.weighted = weighted;
    this.adjacencyList = {};
    this.nodes = {};
    this.nodeCount = 0;
  }

  // // when we have weighted graph the weight will be 1 for all edges
  addEdge(from, to, weight = 1) {
    weight = this.weighted ? weight : 1;

    if (!this.adjacencyList.hasOwnProperty(from)) {
      this.adjacencyList[from] = {};
    }
    this.adjacencyList[from][to] = weight;

    if (!this.direcred) {
      if (!this.adjacencyList.hasOwnProperty(to)) {
        this.adjacencyList[to] = {};
      }
      this.adjacencyList[to][from] = weight;
    }

    this.addNode(from);
    this.addNode(to);
  }

  addNode(node) {
    if (!this.nodes.hasOwnProperty(node)) {
      this.nodes[node] = 1;
      this.nodeCount++;
    }
  }
}

// ----------------
// --- Examples ---
// ----------------

let graph = new Graph(); // direcred & unweighted

graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(4, 1);

console.log(graph);

graph = new Graph(false, true); // undirecred & weighted

graph.addEdge(1, 2, 6);
graph.addEdge(2, 3, 15);
graph.addEdge(2, 4, 8);
graph.addEdge(3, 4, 3);
graph.addEdge(4, 1, 9);

console.log(graph);

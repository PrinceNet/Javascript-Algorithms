/**
 * Graph Data Structure
 * Assuming each node is connected to at least one other node.
 * Can be direcred/undirecred and/or weighted/unweighted.
 * Using adjacency list.
 */
class Graph {
  // default graph is direcred & unweighted
  constructor(options = {}) {
    options.direcred = options.hasOwnProperty('direcred') ? options.direcred : true;
    options.weighted = options.hasOwnProperty('weighted') ? options.weighted : false;
    options.edges = options.hasOwnProperty('edges') ? options.edges : null;

    this.direcred = options.direcred;
    this.weighted = options.weighted;
    this.adjacencyList = {};
    this.nodes = {};
    this.nodeCount = 0;

    if (Array.isArray(options.edges)) {
      for (let index = 0; index < options.edges.length; index++) {
        const edge = options.edges[index];

        this.addEdge(edge);
      }
    }
  }

  // // when we have weighted graph the weight will be 1 for all edges
  addEdge(edge = {}) {
    edge.weight = this.weighted && edge.hasOwnProperty('weight') ? edge.weight : 1;

    if (!this.adjacencyList.hasOwnProperty(edge.from)) {
      this.adjacencyList[edge.from] = {};
    }

    this.adjacencyList[edge.from][edge.to] = edge.weight;

    if (!this.direcred) {
      if (!this.adjacencyList.hasOwnProperty(edge.to)) {
        this.adjacencyList[edge.to] = {};
      }

      this.adjacencyList[edge.to][edge.from] = edge.weight;
    }

    this.addNode(edge.from);
    this.addNode(edge.to);
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

// direcred & unweighted
let graph = new Graph({
  edges: [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 4, to: 1 },
  ],
});

console.log(graph);

// undirecred & weighted
graph = new Graph({
  direcred: false,
  weighted: true,
});

graph.addEdge({ from: 1, to: 2, weight: 6 });
graph.addEdge({ from: 2, to: 3, weight: 15 });
graph.addEdge({ from: 2, to: 4, weight: 4 });
graph.addEdge({ from: 3, to: 4, weight: 3 });
graph.addEdge({ from: 4, to: 1, weight: 9 });

console.log(graph);

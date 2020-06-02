/**
 * Bin Data Structure
 * To be used in bin packing algorithms.
 */
class Bin {
  // default graph is direcred & unweighted
  constructor(options = {}) {
    options.capacity = options.hasOwnProperty('capacity') ? options.capacity : 100;

    this.capacity = options.capacity;
    this.load = 0;
  }
}

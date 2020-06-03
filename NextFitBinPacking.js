const Bin = require("./Bin");
const CAPACITY = 20;

/**
 * Next Fit (NF) - Bin Packing
 *
 * At any given time there is only 1 open bin that we check.
 * It considers the items in an order defined by a list 'items'.
 * If an item fits inside the currently considered bin, the item is placed inside it. 
 * Otherwise, the current bin is closed, a new bin is opened and the current item is placed inside this new bin.
 * 
 * Time Complexity: O(n) where n = |items|
 * Approximation Guarantee: 2*OPT(n) where n = |items|
 * @param {Array} items
 */
function nextFitBinPacking(items) {
  let bins = [new Bin({ capacity: CAPACITY })];
  let didntFitItems = [];

  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    const lastBin = bins[bins.length - 1];
    const isExceedCapacity = item > lastBin.capacity;

    if (!isExceedCapacity) {
      const isFit = item <= lastBin.capacity - lastBin.load;

      if (isFit) {
        lastBin.addItem(item);
      } else {
        bins.push(new Bin({ capacity: CAPACITY }));
        bins[bins.length - 1].addItem(item);
      }
    } else {
      didntFitItems.push(item);
    }
  }

  return { bins, didntFitItems };
}

// ----------------
// --- Examples ---
// ----------------
let items = [1, 15, 16, 9, 14, 23, 30, 8, 4];
var { bins, didntFitItems } = nextFitBinPacking(items);
console.log("nextFit([%s]) =", items.join(', '));
console.log(bins);
console.log("Didnt Fit Items: ", didntFitItems, '\n');

items = [10, 11, 3, 5, 2, 19, 14, 9, 3];
var { bins, didntFitItems } = nextFitBinPacking(items);
console.log("nextFit([%s]) =", items.join(', '));
console.log(bins);
console.log("Didnt Fit Items: ", didntFitItems, '\n');

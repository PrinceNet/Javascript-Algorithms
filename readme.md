# Javascript Algorithms

Here I will add a handful of algorithms from many fields I find useful and interesting.

## Euclidean (aka GCD)

[Preview](Euclidean.js)  
GCD stands for Greatest Common Divisor.  
Given 2 natural numbers, find their greatest common divisor that divides both of them without leaving any reminder.

> Time Complexity: O(log min(a, b))

## Graph (Data Structure)

[Preview](Graph.js)  
Will be used in graph algorithms later on.  
Assuming each node is connected to at least one other node.  
Can be direcred/undirecred and/or weighted/unweighted.  
Using adjacency list.  
Default graph is direcred & unweighted (weight = 1).

## Bin (Data Structure)

[Preview](Bin.js)  
To be used in bin packing algorithms.

## Next Fit (NF) - Bin Packing

[Preview](NextFitBinPacking.js)  
At any given time there is only 1 open bin that we check.
It considers the items in an order defined by a list 'items'.
If an item fits inside the currently considered bin, the item is placed inside it. 
Otherwise, the current bin is closed, a new bin is opened and the current item is placed inside this new bin.

> Time Complexity: O(n) where n = |items|

> Approximation Guarantee: 2*OPT(n) where n = |items|

## License

All algorithms are licensed under the [MIT license](https://opensource.org/licenses/MIT).

Have fun!

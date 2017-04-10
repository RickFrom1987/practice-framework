#Bloom Filters

The basic bloom filter supports two operations: test and add.

Test is used to check whether a given element is in the set or not. If it returns:

false then the element is definitely not in the set.

true then the element is probably in the set. The false positive rate is a function of the bloom filter's size and the number and independence of the hash functions used.

Add simply adds an element to the set. Removal is impossible without introducing false negatives, but extensions to the bloom filter are possible that allow removal e.g. counting filters.

Bloom filters have a strong space advantage over other data structures like sets, hash tables or binary search trees. Bloom filters also have the property that the time taken to add an item or to check for membership is a constant O(k) and is independent of the number of items in the filter.

The price paid for this efficiency is that a Bloom filter is a probabilistic data structure.
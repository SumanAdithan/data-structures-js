const set = new Set([1, 2, 3]);
set.add(4);
set.add(4);

// check element exists in the set
console.log(set.has(4));

// delete individual element
set.delete(3);

// size
console.log(set.size);

// delete all element in the set
set.clear();

// iterate set using for of
for (const item of set) {
    console.log(item);
}

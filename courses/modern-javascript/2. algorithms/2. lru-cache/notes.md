# Least Recently Used (LRU) Cache

## Notes

### Problems You Might Face on a Tech Interview

Q. Create a data structure that implements the requirements of a Least Recently Used (LRU) cache with O(1) average time complexity.

- Initialize an object with a maximum capacity of elements.
- `getItem` Return the value of the key. Update cache with the most recently used key.
- `putItem` Create or update a key value pair in the cache. Evict the least recently used key if the size of keys exceeds the max capacity.

A. Essentially, you want a data structure that works like an object or map where you can retrieve an item, but it has a fixed length that automatically gets rid of the oldest item.

i.e. You might have an app that returns recipes so you would put the most popular recipes in a cache. This cache is small and fast and lives in memory while your main database is slow and lives on the disk.

```javascript
export class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  getItem(key) {
    const item = this.cache.get(key);

    // Map keeps track of insertion order, this will refresh the item
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  putItem(key, val) {
    // delete to refresh the insertion order
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // evict the oldest item in the cache
    else if (this.cache.size == this.capacity) {
      this.cache.delete(this.oldestItem);
    }

    this.cache.set(key, val);
  }

  get oldestItem() {
    return this.cache.keys().next().value;
  }
}

const cache = new LRU(5);
cache.putItem('a', 1);
cache.getItem('a');
```

### Supplemental Course Notes (from site)

The LRU cache is one of the most commonly asked algorithm questions on interviews.

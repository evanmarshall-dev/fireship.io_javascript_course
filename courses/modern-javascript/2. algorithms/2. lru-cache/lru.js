/* eslint-disable eqeqeq */

// Create a custom data structure.
// We need to manage STATE and FUNCTIONALITY.
// JS classes are syntactic sugar for the prototypal inheritance and functions.
// Instead of using a class we could just define a function and then use its prototype property and add a variety of methods to it. This results in code that is harder to read and understand.
// ? const LRU = function (capacity) {};
// ? LRU.prototype.getItem = function (key) {};

// Now for using a CLASS.
class LRU {
  // Inside the class we will define a constructor function, which is like a function that gets called when a new object is initialized.
  // We will give the constructor function a parameter of capacity, which is a number which defines how long the cache can get (i.e. It might store a max of 10 items). The THIS keyword sets it as a property on the object.
  constructor(capacity) {
    // The below two properties are the STATE of the object.
    this.capacity = capacity;
    // We will use the built in map of JS and set that as the cache property on the object.
    // We use a map instead of a plain object is because when you insert a key value pair into a map, it remembers the order in which the key value pairs were inserted. This is important because we want to remove the oldest item from the cache when we reach the capacity.
    this.cache = new Map();
  }

  // Now we define some methods or functions to interact with the state of the object above.
  // getItem will return an item from the cache based on its key. This is simple because map has a built in get method named get which takes a key and returns the item.
  getItem(key) {
    const item = this.cache.get(key);

    // If the item is already in the cache the map keeps track of the order in which the items were inserted. So we need to delete the item and then re-insert it to the map to make it the most recently used item.
    if (item) {
      // Delete and re-insert the item. This is done to update the insertion order because we always want the most recently accessed item to be in the front.
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  // Now that we have the oldest item from below, we will implement the put method, which will add a new element to the cache.
  // putItem takes key value as inputs then we check to see if the cache already has that key, which if we do have we have to delete it and reset it with this new value. This insures that we have a unique item in the map.
  putItem(key, val) {
    if (this.cache.has(key)) {
      // Delete it.
      this.cache.delete(key);
    }
    // If the cache is full we need to remove the oldest item from the cache.
    // If the cache doesn't already have that key then we need to check if the cache size is equal to the capacity. If it is then we need to remove the oldest item from the cache/map.
    else if (this.cache.size == this.capacity) {
      this.cache.delete(this.oldestItem);
    }
    // Set it.
    this.cache.set(key, val);
  }

  // When the LRU reaches capacity we will have to find the oldest item and remove it from the cache. This is done by setting a getter followed by a function that returns the oldest item.
  get oldestItem() {
    // The keys is a method on the JS map that returns all of the keys, next will grab the first one, which will also be the oldest one.
    return this.cache.keys().next().value;
  }
}

// The above takes care of implementation, now we can create a new object using the new keyword and give it a capacity and start calling its methods (i.e. putItem and getItem).
const cache = new LRU(5);
cache.putItem('a', 1);
cache.getItem('a');

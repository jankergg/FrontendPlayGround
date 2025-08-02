/**
 * @param {string[]} tasks
 * @param {number} k
 * @return {number}
 */
// Max heap to store frequencies
const maxHeap = [];
// Helper function to maintain the max heap property
function heapPush(value) {
  maxHeap.push(value);
  let index = maxHeap.length - 1;
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (maxHeap[index] > maxHeap[parentIndex]) {
      [maxHeap[index], maxHeap[parentIndex]] = [
        maxHeap[parentIndex],
        maxHeap[index],
      ];
      index = parentIndex;
    } else {
      break;
    }
  }
}
export default function taskCoordinator(tasks, k) {
  // thoughts:
  // 1. using heap. to store task by frequency
  // 2. get task from heap top if heap isn't empty and intervals not end
  // 3. otherwise we add the remaining interval length onto result
  const map = new Map();
  tasks.forEach((t) => {
    map.set(t, (map.get(t) ?? 0) + 1);
  });
  map.values().forEach((v) => heapPush(v));

  let ans = 0;
  while (maxHeap.length) {
    const store = [];
    let currentInterval = 0;
    while (currentInterval <= k && maxHeap.length) {
      const freq = maxHeap.shift();
      if (freq > 1) store.push(freq - 1);
      currentInterval++;
    }

    for (const t of store) {
      heapPush(t);
    }
    ans += maxHeap.length === 0 ? currentInterval : k + 1;
  }
  return ans;
}

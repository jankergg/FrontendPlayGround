import { PriorityQueue } from '@datastructures-js/priority-queue';
/**
 * @param {number[][]} intervals
 * @return {number}
 */
export default function minMeetingRoomsNeeded(intervals) {
  if (intervals.length === 0) return 0;
  // sort the intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);
  const heap = new PriorityQueue((a, b) => a - b);
  heap.push(intervals[0][1]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= heap.front()) {
      heap.pop();
    }
    heap.push(intervals[i][1]);
  }

  return heap.size();
}

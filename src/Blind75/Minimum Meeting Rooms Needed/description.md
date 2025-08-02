Given an array of meeting time intervals, where each interval is represented as [start, end] which represents a meeting starting at time start and ending at time end, determine the minimum number of meeting rooms required to accommodate all the meetings without any overlap.

Input
intervals: Array<[number, number]>: An array of integers pairs
Examples

Input: intervals = [[83,99]]
Output: 1
Explanation: Since there is only one meeting, only one room is required. There is no overlap, so just one room can accommodate the meeting.
Input: intervals = [[1,5],[2,6],[8,9]]
Output: 2
Explanation: There are two overlapping meetings: [1, 5] and [2, 6]. To accommodate both meetings simultaneously, at least two rooms are needed. The other meeting [8, 9] do not overlap with the earlier ones, so only two rooms are required in total.
Input: intervals = [[5,10],[10,15],[15,20]]
Output: 1
Explanation: The meetings are back-to-back, meaning they do not overlap. Since the end of one meeting coincides with the start of the next, only one room is sufficient to host all the meetings.
Constraints
0 <= intervals.length <= 1000
intervals[i].length == 2
0 <= start < end <= 1,000,000

Given a list of tasks, each represented by a letter (from A to Z), and a cooldown period k. The cooldown period specifies that the same task must be separated by at least k intervals between executions.

Determine the minimum number of intervals required to complete all tasks, while ensuring that the same task is not executed again before the cooldown period has passed.

Input
tasks: string[]: An array of characters, where each task is represented as a letter (A-Z)
k: number: An integer representing the cooldown period, the minimum number of intervals between two executions of the same task
Examples

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: Task 'A' appears 3 times and task 'B' appears 3 times. Since there is a cooldown of 2, we need to ensure that after every 'A' there are at least 2 other tasks or idle intervals before we can add another 'A'. The same applies to 'B'. A valid sequence might look like this: 'A' -> 'B' -> idle -> 'A' -> 'B' -> idle -> 'A' -> 'B'. Thus, the total number of intervals required is 8.
Input: tasks = ["A","C","A","B","D","B"], n = 1
Output: 6
Explanation: The tasks 'A', 'B', and 'C' appear multiple times, but the cooldown is only 1. After completing one 'A', we can immediately complete another 'A' after just one other task. A valid sequence could look like this: 'A' -> 'C' -> 'A' -> 'B' -> 'D' -> 'B'. Thus, the total number of intervals required is 6.
Input: tasks = ["A","A","A","B","B","B"], n = 3
Output: 10
Explanation: The cooldown is 3, meaning after completing a task, we must wait for 3 intervals before repeating the same task. A valid sequence could be: 'A' -> 'B' -> idle -> idle -> 'A' -> 'B' -> idle -> idle -> 'A' -> 'B'. Thus, the total number of intervals needed is 10.
Constraints
1 <= tasks.length <= 1000
tasks[i] is an uppercase English letter
0 <= k <= 100

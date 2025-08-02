There are a set of courses numbered from 0 to courses - 1. Each course may have prerequisites that dictate the order in which the courses must be taken. These prerequisites are given as a list of pairs, where each pair [a, b] indicates that course b must be completed before course a.

Determine if it is possible to complete all courses without violating any prerequisite constraints. Return true if it is possible to complete all the courses; otherwise, return false.

Input
courses: number: An integer representing the total number of courses
prerequisites: Array<[number, number]>: A 2D array where each element [a, b] indicates that course b is a prerequisite for course a
Examples

Input: courses = 4, prerequisites = [[1,0],[2,1],[3,2],[1,3]]
Output: false
Explanation: There are 4 courses labeled from 0 to 3. The prerequisite relationships are as follows: course 1 requires course 0 to be completed first, course 2 requires course 1, course 3 requires course 2, and course 1 requires course 3. This creates a circular dependency: course 1 depends on course 3, which in turn depends on course 2, which then depends on course 1 again. Since it is impossible to break this cycle and complete all courses, the output is false.
Input: courses = 2, prerequisites = [[1,0]]
Output: true
Explanation: The prerequisite [1, 0] indicates that course 0 must be completed before course 1. Since there are no other dependencies or cycles, it is straightforward to complete the courses in the order: course 0, then course 1. Therefore, the output is true.
Constraints
1 <= courses <= 1000
0 <= prerequisites.length <= 1000
prerequisites[i].length == 2
0 <= a, b < courses
All pairs [a, b] in prerequisites are unique

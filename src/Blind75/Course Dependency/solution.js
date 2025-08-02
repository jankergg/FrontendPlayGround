/**
 * @param {number[]} courses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
export default function canCompleteCourse(courses, prerequisites) {
  if (courses.length === 1 || prerequisites.length === 0) return true;

  const deps = new Map();
  for (const [course, prerequisite] of prerequisites) {
    if (!deps.has(course)) {
      deps.set(course, [prerequisite]);
    } else {
      deps.get(course).push(prerequisite);
    }
  }

  const visited = new Set();
  function dfs(course) {
    if (visited.has(course)) return false;
    if (!deps.has(course) || deps.get(course).length === 0) return true;

    visited.add(course)
    for (const cs of deps.get(course)) {
      if (!dfs(cs)) return false;
    }
    visited.delete(course);
    deps.set(course, []);
    return true;
  }

  for (let c = 0; c < courses; c++) {
    if (!dfs(c)) return false
  }

  return true;
}

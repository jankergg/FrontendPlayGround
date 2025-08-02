/**
 * @param {number[]} courses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
export default function canCompleteCourse(courses, prerequisites) {
  if (courses.length === 1 || prerequisites.length === 0) return true;
  const deps = Array(courses).fill([]);
  prerequisites.forEach(([crs, dep]) => {
    deps[crs].push(dep)
  });

  const q = deps.filter(dep => !dep.length);
  let finished = 0;
  while (q.length) {
    const cs = q.shift();
    finished++;
    for (const x of deps[cs]) {
      deps[x] = deps[x].filter(c => c !== x)
      if (deps[x].length === 0) {
        q.push(x);
      }
    }
  }
  return finished === courses;
}

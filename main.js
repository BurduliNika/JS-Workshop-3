// --- დავალება 1 ---
function task1_generateFromUserInput(fallbackInput) {
  let raw =
    typeof prompt === "function"
      ? prompt("შეიყვანეთ რაოდენობა:")
      : fallbackInput;
  if (raw === null || raw === undefined) raw = fallbackInput;

  let count = Number(raw);
  if (!Number.isFinite(count) || count <= 0) {
    console.log("Task1: არასწორი შეყვანა:", raw);
    return [];
  }

  count = Math.floor(count);
  let arr = [];

  for (let i = 0; i < count; i++) {
    let r = Math.floor(Math.random() * 101);
    arr.push(r);
  }

  console.log("Task1 result:", arr);
  return arr;
}

// --- დავალება 2 ---
function task2_combineHTMLandCSS() {
  let academy = {
    name: "Digital Academy",
    courses: ["JavaScript", "HTML", "CSS", "Angular", "React", "Python", "C#"],
  };

  let found = [];

  for (let i = 0; i < academy.courses.length; i++) {
    let course = String(academy.courses[i]).trim();
    let lower = course.toLowerCase();
    if (lower === "html" || lower === "css") {
      found.push(course);
    }
  }

  let combined = found.length ? found.join(" & ") : "";
  console.log("Task2 combined:", combined);
  return combined;
}

// --- დავალება 3 ---
function task3_evenOnlyWhile(fallbackRangeCount) {
  let limit = Math.floor(Math.random() * (fallbackRangeCount || 10)) + 1;
  let result = [];
  let i = 0;

  while (i < limit) {
    let r = Math.floor(Math.random() * 101);
    if (r % 2 === 0) {
      result.push(r);
    }
    i++;
  }

  console.log("Task3 limit:", limit, "even items:", result);
  return { limit, result };
}

// --- დავალება 4 ---
function task4_unique15() {
  let arr = [];

  while (arr.length < 15) {
    let r = Math.floor(Math.random() * 31); // 0..30
    if (!arr.includes(r)) {
      arr.push(r);
    }
  }

  console.log("Task4 unique 15:", arr);
  return arr;
}

// --- დავალება 5 ---
function task5_minMax() {
  let arr = [12, 45, 26, 4, 7, 14, 19];

  if (!Array.isArray(arr) || arr.length === 0) {
    console.log("Task5: არასწორია.");
    return null;
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let v = arr[i];
    if (v < min) min = v;
    if (v > max) max = v;
  }

  console.log("Task5 min:", min, "max:", max);
  return { min, max };
}

// გაშვება
task1_generateFromUserInput("8");
task2_combineHTMLandCSS();
task3_evenOnlyWhile(12);
task4_unique15();
task5_minMax();

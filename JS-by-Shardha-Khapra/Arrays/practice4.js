// ! We are given array of marks of students. Filter our of marks of students that scored 90+ .

let marks = [90, 78, 100,99, 98, 95, 56, 91];

let filltermarks = marks.filter((val) => {
  return val > 90;
});

console.log(filltermarks);
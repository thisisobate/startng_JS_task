var name = 'Uchechukwu Obasi';

var courses = ['HTML', 'CSS', 'JavaScript'];

for (let i = 0; i <= 200; i++) {
  if (courses.length % 2 !== 0) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  } else if (courses.length % 2 == 0) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

function Student() {}
var stu = new Student();

console.log(Student.prototype.constructor === Student) // true
console.log(stu.constructor === Student) // true
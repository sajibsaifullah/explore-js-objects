const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        return this.name + 'is participating is an exam';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount -tips;
        return this.money;
    }
}

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('algebra');
// console.log(reExam);
const remaining = student.treatDey(900, 100);
console.log(remaining);
const againRemaining = student.treatDey(500);
// console.log(againRemaining);
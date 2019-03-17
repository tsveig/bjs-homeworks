'use strict';

class StudentLog {
    constructor(studentName) {
        this.studentName = studentName;
        this.subjects = {};
    }
    getName() {
        return this.studentName;
    }
    addGrade(grade, subject) {
        if (typeof Number(grade) === 'number' && Number(grade) <= 5 && Number(grade) >= 0) {
            if (this.subjects[subject] !== undefined) {
                this.subjects[subject].push(grade);
            } else {
                this.subjects[subject] = [grade];
            }
            return this.subjects[subject].length;
        } else {
            console.log(`ERROR you are trying to put grade "${grade}" for subject "${subject}". Use only grade: 0-5`);
        }
    }
    getAverageBySubject(subject) {
        let gradeTotal = 0;
        let average = 0;
        let getSubject = this.subjects[subject];
        if (getSubject !== undefined) {
            for (let i = 0; i < getSubject.length; i++) {
                gradeTotal += getSubject[i];
            }
            average = gradeTotal / getSubject.length;
        }
        return average;
    }
    getTotalAverage() {
        let newSubjects = Object.values(this.subjects);
        let allSubjectSum = 0;
        let allSubjectCount = 0;
        let allSubjectAverage = 0;
        for (let i = 0; i < newSubjects.length; i++) {
            allSubjectCount += newSubjects[i].length;
            for (let j = 0; j < newSubjects[i].length; j++) {
                allSubjectSum += newSubjects[i][j];
            }
            allSubjectAverage = allSubjectSum / allSubjectCount;
        }
        return allSubjectAverage;
    }
    getGradesBySubject(subject) {
        if (this.subjects[subject] !== undefined) {
            return this.subjects[subject];
        } else {
            return [];
        }
    }
    getGrades() {
        return this.subjects;
    }
}

let log = new StudentLog('Иван Иванов');
console.log(log.studentName)
console.log(log.addGrade(5, 'math'))
console.log(log.addGrade(3, 'math'))
console.log(log.addGrade(2, 'chemistry'))
console.log(log.addGrade(5, 'chemistry'))
console.log(log.addGrade(10, 'math'))
console.log(log.addGrade(3, 'biology'))
console.log(log.addGrade(4, 'biology'))
console.log(log.addGrade(5, 'biology'))
console.log(log.getAverageBySubject('math'))
console.log(log.getTotalAverage())
console.log(log.getGradesBySubject('math'))
console.log(log.getGrades())
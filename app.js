class School {
    constructor(name, numberOfStudents) {
        this._name = name;
        this._level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(number) {
        if (typeof number === 'number') {
            this._numberOfStudents = number;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
        
    }
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
        return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)];
    }
}

class Primary extends School {
    constructor(name, pickupPolicy, numberOfStudents) {
        super(name, numberOfStudents);
        this._level = 'primary';
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name, numberOfStudents) {
        super(name, numberOfStudents);
        this._level = 'middle';
    }
}

class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, numberOfStudents);
        this._level = 'high';
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}

class SchoolCatalog {
    constructor() {
        this._schools = [];
    }
    get schools() {
        return this._schools;
    }
    static addSchool(school) {
        if (school.level === 'primary') {
            primaryCatalog.schools.push(school);
        } else if (school.level === 'middle') {
            middleCatalog.schools.push(school);
        } else if (school.level === 'high') {
            highCatalog.schools.push(school);
        } else {
            console.log('Incorrect entry!');
        }
    }
    static print() {
        console.log(primaryCatalog, middleCatalog, highCatalog);
    }
}

const primaryCatalog = new SchoolCatalog;
const middleCatalog = new SchoolCatalog;
const highCatalog = new SchoolCatalog;


const lorraineHansbury = new Primary('Lorraine Hansbury', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.', 514);
lorraineHansbury.quickFacts();
console.log(lorraineHansbury);
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);
SchoolCatalog.addSchool(lorraineHansbury);
SchoolCatalog.addSchool(alSmith);
console.log(highCatalog);
console.log(middleCatalog);
console.log(primaryCatalog);
//SchoolCatalog.print();
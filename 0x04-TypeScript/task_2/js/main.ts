interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return ' Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

const createEmployee = (salary: number | string): Director | Teacher  => {
  if ( typeof salary === 'number' && salary < 500 ) {
    return new Teacher();
  }
  return new Director();
};

export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  switch (todayClass) {
    case "Math":
      return "Teaching Math";
    case "History":
      return "Teaching History";
    default:
      throw new Error("Invalid class");
  }
}

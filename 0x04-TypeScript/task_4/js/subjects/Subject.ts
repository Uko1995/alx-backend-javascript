import Subjects from './Teacher';

namespace Subjects {
  export class Subject {
    teacher = Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}

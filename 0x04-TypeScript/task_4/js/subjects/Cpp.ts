import Subjects from './Teacher';

namespace Subjects {
  interface Teacher {
    experienceTeachingC: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is a list of requirements for Cpp';
    }

    get AvailableTeacher(): string {
      if (!experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

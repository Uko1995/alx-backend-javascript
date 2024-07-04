import Subjects from './Teacher';

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is a list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (!experienceTeachingJava) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

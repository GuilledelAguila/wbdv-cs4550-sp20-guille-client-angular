import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/guille/modules/${moduleId}/lessons`)
      .then(response => response.json())
}

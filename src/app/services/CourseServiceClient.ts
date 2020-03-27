import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/guille/courses')
      .then(response => response.json())

  findCourseById = (cid) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/guille/courses/${cid}`)
      .then(response => response.json())
}

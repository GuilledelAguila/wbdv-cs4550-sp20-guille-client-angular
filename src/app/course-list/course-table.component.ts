import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})

export class CourseTableComponent implements OnInit {

  title = 'Course List Component'
  newCourseTitle = ''
  courses = []

  deleteCourse = (courseToDelete) =>
    this.courses = this.courses.filter(course => course !== courseToDelete)

  createCourse = (title) =>
    this.courses.push({_id: '321', title})

  constructor(private service: CourseServiceClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}

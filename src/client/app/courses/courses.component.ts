import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
@Component({
    moduleId:module.id,
    selector: 'course-as',
    templateUrl:'courses.component.html',
    providers:[CourseService]

})
export class CoursesComponent implements OnInit {
    title = 'the title of courses';
    courses: any[] = [];
    errorMessage: string;
    constructor( public courseService : CourseService) {}
    ngOnInit() {
        this.getCourses();
    }

    getCourses() {
         this.courseService.get().subscribe(
        courses => this.courses = courses,
        error => this.errorMessage = <any>error);
  }
}


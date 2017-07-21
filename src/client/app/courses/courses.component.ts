import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
@Component({
    moduleId:module.id,
    selector: 'course-as',
    templateUrl:'courses.component.html',
    providers:[CourseService]

})
export class CoursesComponent implements OnInit {
    title :string;
    courses: any[] = [];
    errorMessage: string;
    address :Address;
    showAddress: boolean;
    constructor( public courseService : CourseService) {}
    ngOnInit() {
        this.getCourses();

        this.address = {
            state: 'NY',
            city: 'New York',
            street: 'Hartland St'
        };
        this.showAddress=false;
    }

    getCourses() {
        this.title = 'Xiao Bian courses';
        this.courseService.get().subscribe(
        courses => this.courses = courses,
        error => this.errorMessage = <any>error);
  }
    toggleAddress() {
        this.showAddress=!this.showAddress;
    }
    addCourse(course:string) {
        console.log(course);
        this.courses.push(course);
        return false;
    }

}

interface Address {
    street:string;
    city:string;
    state:string;
}


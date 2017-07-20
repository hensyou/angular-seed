import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { CoursesModule } from '../courses/courses.module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [CommonModule, AboutRoutingModule,CoursesModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }

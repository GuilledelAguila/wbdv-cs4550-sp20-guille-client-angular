import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CourseTableComponent} from './course-list/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'courses', component: CourseTableComponent},
  {path: 'course/:cid', component: CourseViewerComponent},
  {path: 'course/:cid/module/:mid', component: CourseViewerComponent},
  {path: 'course/:cid/module/:mid/lesson/:lid', component: CourseViewerComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

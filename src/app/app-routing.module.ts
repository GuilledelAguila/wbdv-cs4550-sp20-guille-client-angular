import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CourseTableComponent} from './course-list/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'courses', component: CourseTableComponent},
  {path: 'courses/:cid/modules', component: CourseViewerComponent},
  {path: 'courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponent},
  {path: 'courses/:cid/quizzes', component: QuizzesComponent},
  {path: 'courses/:cid/quizzes/:qid', component: QuizComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

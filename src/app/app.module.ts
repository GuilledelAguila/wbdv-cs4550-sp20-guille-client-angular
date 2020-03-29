import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {CourseTableComponent} from './course-list/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {HomeComponent} from './home/home.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizServiceClient} from './services/QuizServiceClient';
import {QuizComponent} from './quiz/quiz.component';
import {TrueFalseQuestionComponent} from './true-false-question/true-false-question.component';
import {QuestionServiceClient} from './services/QuestionServiceClient';
import {MultipleChoiceQuestionComponent} from './multiple-choice-question/multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    HomeComponent,
    ModuleListComponent,
    LessonTabsComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    QuizServiceClient,
    QuestionServiceClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

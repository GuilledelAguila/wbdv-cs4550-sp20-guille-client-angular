import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/QuizServiceClient';
import {QuestionServiceClient} from '../services/QuestionServiceClient';
import {AttemptsServiceClient} from '../services/AttemptsServiceClient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: QuestionServiceClient,
              private serviceAttempts: AttemptsServiceClient,
              private router: Router) { }

  questions = []
  quizId = ''
  courseId =''
  submitQuiz = () => {
    this.serviceAttempts.saveAttemptForQuiz(this.quizId, this.questions)
      .then(r => this.router.navigateByUrl(`courses/${this.courseId}/quizzes`))
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.qid;
      this.courseId = params.cid;
      this.service.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    });

  }

}

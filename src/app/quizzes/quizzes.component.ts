import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/QuizServiceClient';
import {ActivatedRoute} from '@angular/router';
import {AttemptsServiceClient} from '../services/AttemptsServiceClient';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  courseId = ''
  quizzes = []
  attempts = []

  constructor(private service: QuizServiceClient, private route: ActivatedRoute, private serviceAttempts: AttemptsServiceClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.service.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes)
        .then(quizzes => {
          for (const quiz of this.quizzes) {
            this.serviceAttempts.findAttemptsForQuiz(quiz._id)
              .then(attempts => this.attempts = this.attempts.concat(attempts));
          }
        });
      });
    }


}

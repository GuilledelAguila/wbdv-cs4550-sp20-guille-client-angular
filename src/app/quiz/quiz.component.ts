import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/QuizServiceClient';
import {QuestionServiceClient} from '../services/QuestionServiceClient';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: QuestionServiceClient) { }

  questions = []
  quizId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.qid;
      this.service.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    });
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Output()
  answerChange = new EventEmitter<string>()

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''}
  @Input()
  answer = ''

  grading = false
  grade = () => this.grading = true;

  submitAnswer = () => this.answerChange.emit(this.answer)

  ngOnInit(): void {
  }

}

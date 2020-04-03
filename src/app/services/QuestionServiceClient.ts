import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://wbdv-sp20-guille-server-node.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())


}

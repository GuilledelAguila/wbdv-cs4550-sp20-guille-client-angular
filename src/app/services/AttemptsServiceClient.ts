import {Injectable} from '@angular/core';

@Injectable()
export class AttemptsServiceClient {

  findAttemptsForQuiz = (qid) =>
    fetch(`https://wbdv-sp20-guille-server-node.herokuapp.com/api/quizzes/${qid}/attempts`)
    .then(response => response.json())

  saveAttemptForQuiz = (qid, questions) =>
    fetch(`https://wbdv-sp20-guille-server-node.herokuapp.com/api/quizzes/${qid}/attempts`, {
      method: 'POST',
      body: JSON.stringify(questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())


}

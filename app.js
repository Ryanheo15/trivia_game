//Selectors
let question = $(".question");
let question_btn = $(".question_btn");
let answer_btn = $(".answer_btn");

//Event listeners
//ready event listener
$(document).ready(() => {

  //init
  let response = fetch("http://jservice.io/api/random");
  response.then((res) => {
    return res.json();
  }).then((res_json) => {
    let question_res = res_json[0].question;
    let answer_res = res_json[0].answer;
    question.text("Q: " + question_res);

    answer_btn.click(() => {
      question.text("A: " + answer_res);
    });

  }).catch((err) => {
    console.log(err);
  });

  //new question
  question_btn.click(() => {
    let response = fetch("http://jservice.io/api/random");
    response.then((res) => {
      return res.json();
    }).then((res_json) => {
      let question_res = res_json[0].question;
      let answer_res = res_json[0].answer;
      question.text("Q: " + question_res);

      answer_btn.click(() => {
        question.text("A: " + answer_res);
      });

    }).catch((err) => {
      console.log(err);
    });
  });

});

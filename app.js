const questions = document.querySelectorAll(".question");

console.log("questions");

questions.forEach( function (question) {

    const button = question.querySelector(".question-btn");

   

    button.addEventListener("click", function () {

        questions.forEach( function (otherQuestion) {

            if (otherQuestion !== question){
                otherQuestion.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});
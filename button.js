
var buttons = $(".btn");

buttons.on("click", (e) => {
    var scaleValue = $(e.target).text();
    var questionNum = $(e.target).parents()[1].id;
    console.log({question: questionNum, value: scaleValue})
    return {question: questionNum, value: scaleValue};
});


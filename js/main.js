$('#users-equation').keyup((e) => {
    let equation = [];
    let userInput = e.target.value;
    $('#equals').click(function () {
        equation.push(userInput);
    });
    console.log(equation);
});


//use konami code assignment as an example.

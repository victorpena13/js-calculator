equationList = [];

function captureEquation() {
    var equation = {
        problem: ''
    }
    equation.problem = $('#users-equation').val();
    equationList.push(equation);
    console.log(equation);
    calculateEquation();
}
$('#equals').click(captureEquation);

function calculateEquation() {
    for(let i = 0; i < equationList.length; i++) {
        let splitEquation = equationList[i].problem.split('+');
        console.log(splitEquation);
    }
}



//use .split to convert string to an equation.






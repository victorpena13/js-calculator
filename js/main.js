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
        console.log(parseInt(splitEquation[0]) + parseInt(splitEquation[1]));
    }
}


//use .filter or .contains to create an if statement based on symbol.
//use .split to convert string to an equation.






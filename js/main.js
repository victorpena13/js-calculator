
equationList = [
    {problem: '1+1'}
];
function captureEquation() {
    var equation = {
        problem: ''
    }
    equation.problem = $('#users-equation').val();
    equationList.push(equation);
    console.log(equation);
}
$('#equals').click(captureEquation);

var splitEquation = equationList[0].problem.split('+');
console.log(splitEquation);


//use .split to convert string to an equation.






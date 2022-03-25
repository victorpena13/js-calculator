
equationList = [];
function captureEquation() {
    var equation = {
        problem: ''
    }
    equation.problem = $('#users-equation').val();
    equationList.push(equation);
    console.log(equation);
}
$('#equals').click(captureEquation);







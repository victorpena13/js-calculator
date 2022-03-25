
equationList = [];
function calculateEquation() {
    var equation = {
        problem: ''
    }
    equation.problem = document.getElementById('users-equation').value;
    equationList.push(equation);
    console.log(equation);
}

var equalsBtn = document.getElementById('equals');
equalsBtn.addEventListener('click', calculateEquation);



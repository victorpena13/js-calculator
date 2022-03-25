
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

// $('#equals').click(function () {
//     let equation = {
//         problem: ''
//     }
//     equation.problem = $('#users-equation').val;
//     console.log(equation);
// });


//use konami code assignment as an example.

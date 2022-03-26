equationList = [];

function captureEquation() {
    var equation = {
        problem: ''
    }
    equation.problem = $('#users-equation').val();
    equationList.push(equation);
    console.log(equation);
    calculate();
}
$('.equals').click(captureEquation);

function calculate() {
    let result = {
        answer: ''
    }
    for(let i = 0, x = 0; i < equationList.length, x < result.length; i++, x++) {
        if (equationList[i].problem.includes('-')) {
            let splitEquation = equationList[i].problem.split('-');
            console.log(splitEquation);
            console.log(parseInt(splitEquation[0]) - parseInt(splitEquation[1]));
        } else if (equationList[i].problem.includes('+')) {
            let splitEquation = equationList[i].problem.split('+');
            console.log(splitEquation);
            console.log(parseInt(splitEquation[0]) + parseInt(splitEquation[1]));
        } else if (equationList[i].problem.includes('*')) {
            let splitEquation = equationList[i].problem.split('*');
            console.log(splitEquation);
            console.log(parseInt(splitEquation[0]) * parseInt(splitEquation[1]));
        } else if(equationList[i].problem.includes('/')) {
            let splitEquation = equationList[i].problem.split('/');
            console.log(splitEquation);
            console.log(parseInt(splitEquation[0]) / parseInt(splitEquation[1]));;
        }
    }
}







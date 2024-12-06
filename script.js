let currentResult = '';

function append(value) {
    currentResult += value;
    document.getElementById('result').value = currentResult;
}

function clearResult() {
    currentResult = '';
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        currentResult = eval(currentResult); // avalia a expressão matemática
        document.getElementById('result').value = currentResult;
    } catch {
        document.getElementById('result').value = 'Error';
    }
}

function scientific(operation) {
    try {
        let result = parseFloat(currentResult);
        if (operation === 'sqrt') {
            result = Math.sqrt(result);
        } else if (operation === 'sin') {
            result = Math.sin(result * (Math.PI / 180)); // converte para radianos
        } else if (operation === 'cos') {
            result = Math.cos(result * (Math.PI / 180)); // converte para radianos
        } else if (operation === 'tan') {
            result = Math.tan(result * (Math.PI / 180)); // converte para radianos
        }
        currentResult = result.toString();
        document.getElementById('result').value = currentResult;
    } catch {
        document.getElementById('result').value = 'error';
    }
}
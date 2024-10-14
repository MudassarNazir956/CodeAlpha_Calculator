let result = document.getElementById("result").value;
console.log(result);

function clearScreen() {
    document.getElementById("result").value = "";
}

function del() {
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1)
}

function calculate() {
    try {
        document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch (err) {
        alert('Invalid Command');
    }
}

function display(num) {
    let operators = ["+", "-", "*", "/", ".", "%"];
    let resultInputValue = document.getElementById("result").value;
    let lastCharacter = resultInputValue.charAt(resultInputValue.length - 1);

    if (operators.includes(num) && operators.includes(lastCharacter)) {
        console.log('Entered');
        let valueWithoutLastOperator = resultInputValue.substr(0, resultInputValue.length - 1);
        document.getElementById("result").value = valueWithoutLastOperator + num;
        return
    }
    document.getElementById("result").value += num;
}

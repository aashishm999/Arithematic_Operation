function calculate(operation){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }else{
        switch(operation){
            case 'addition':
                result = num1 + num2;
                break;
            case 'subtraction':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'division':
                if (num2 === 0) {
                    alert("Cannot divide by zero.");
                    return;
                }else{
                    result = num1 / num2;
                }
                break;
            default:
                alert("Invalid operation.");
                return;
        }
    }
    document.getElementById("result").innerText = "Result: " + result;
}
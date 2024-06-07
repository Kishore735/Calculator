const display = document.getElementById("display");

function appendToDisplay(input)
{
    display.value += input;
}

function clearDisplay()
{
    display.value = "";
}

function calculate()
{
    let expression = display.value;
    try {
        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

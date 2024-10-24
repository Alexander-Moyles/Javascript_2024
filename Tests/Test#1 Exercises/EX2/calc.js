const $ = (selector) => document.querySelector(selector);

const addButton = () => {
    total = parseFloat($("#value1").value) + parseFloat($("#value2").value);
    $("#result").value = total;
}

const subtractButton = () => {
    total = parseFloat($("#value1").value) - parseFloat($("#value2").value);
    $("#result").value = total;
}

const multiplyButton = () => {
    total = parseFloat($("#value1").value) * parseFloat($("#value2").value);
    $("#result").value = total;
}

const divideButton = () => {
    total = parseFloat($("#value1").value) / parseFloat($("#value2").value);
    $("#result").value = total;
}

const resetButton = () => {
    $("#value1").value = "";
    $("#value2").value = "";
    $("#result").value = "";

    $("#value1").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#value1").focus();
    $("#add").addEventListener("click", addButton);
    $("#sub").addEventListener("click", subtractButton);
    $("#mult").addEventListener("click", multiplyButton);
    $("#div").addEventListener("click", divideButton);
    $("#reset").addEventListener("click", resetButton);
});

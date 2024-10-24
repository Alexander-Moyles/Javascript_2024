const $ = (selector) => document.querySelector(selector);

const numCheck = () => {
    let check = true;
    const price = parseFloat($("#price").value);
    const rate = parseFloat($("#rate").value);

    if (isNaN(price) || price <= 0) {
        alert("The price must be a valid number greater than 0")
        check = false;
    }

    if (isNaN(rate) || rate < 2 || rate > 12) {
        alert("The tax rate must be a valid number between 2 and 12")
        check = false;
    }

    if (check == true) {
        taxRate(price, rate);
    }
}

const clearAll = () => {
    $("#price").value = "";
    $("#rate").value = "";
    $("#total").value = "";

    $("#price").focus();
}

const taxRate = (price, tax) => {
    $("#total").value = price + (price * (tax / 100));
}

document.addEventListener("DOMContentLoaded", () => {
    $("#price").focus();
    $("#calculate").addEventListener("click", numCheck);
    $("#reset").addEventListener("click", clearAll)
});

"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);

    if (isNaN(subtotal) || subtotal < 0 || subtotal > 10000) {
        alert(`Subtotal must be > 0 and < 10000`);
    }
    else if (isNaN(taxRate) || taxRate < 0 || taxRate > 12) {
        alert(`Tax Rate must be > 0 and < 12`);
    }
    else {
        const salesTax = (subtotal * (taxRate / 100));
        const total = (subtotal + salesTax);
        
        $("#sales_tax").value = salesTax.toFixed(2);
        $("#total").value = total.toFixed(2);
    }
    $("#subtotal").focus()
};

const clearSubtotal = () => {
    $("#subtotal").value = "";
}

const clearTaxRate = () => {
    $("#tax_rate").value = "";
}

const clearEntries = () => {
    clearSubtotal();
    clearTaxRate();
    $("#sales_tax").value = "";
    $("#total").value = "";

    $("#subtotal").focus()
};

document.addEventListener("DOMContentLoaded", () => {
    $("#subtotal").focus();
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#subtotal").addEventListener("click", clearSubtotal);
    $("#tax_rate").addEventListener("click", clearTaxRate);
});

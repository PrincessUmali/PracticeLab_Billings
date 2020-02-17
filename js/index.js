/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction() {
    let cBox = document.getElementById("same");
    let sName = document.getElementById("shippingName");
    let sZip = document.getElementById("shippingZip");
    let bName  = document.getElementById("billingName");
    let bZip = document.getElementById("billingZip");

    if (cBox.checked) {
        bName.value = sName.value;
        bZip.value = sZip.value;
    }
    else {
        bName.value = "";
        bZip.value = "";
    }
}
function compareEntries() {
    let sName = document.getElementById("shippingName");
    let sZip = document.getElementById("shippingZip");
    let bName  = document.getElementById("billingName");
    let bZip = document.getElementById("billingZip");
    
    if (bName.value == sName.value && sZip.value == bZip.value) {
        alert("The entries were sent to the server.");
    }
    else {
        alert("The Entries does not match...");
    } 
    billingFunction();
}

compareEntries();
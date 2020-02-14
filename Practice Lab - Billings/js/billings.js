/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */
function billingFunction() {
    if (document.getElementById("same").checked) {
        shipname = document.getElementById("shippingName").value;
        shipzip = document.getElementById("shippingZip").value;
        document.getElementById("billingName").value = shipname;
        document.getElementById("billingZip").value = shipzip;
}
    else {
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
} 

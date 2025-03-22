function placeOrder() {
    let name = prompt("Enter your name:");
    let address = prompt("Enter your address:");
    let phone = prompt("Enter your phone number:");
    if (name && address && phone) {
        alert("Your Order has been placed on COD.\n\nName: " + name + "\nAddress: " + address + "\nPhone: " + phone);
    } else {
        alert("Order not placed. Please fill in all details.");
    }
}
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
function submitComplaint() {
    const issueDetails = prompt("Please enter the details of your complaint:");
    const name = prompt("Please enter your name:");
    const contactNumber = prompt("Please enter your contact number:");
    const hasOrdered = prompt("Have you ordered from here? (yes/no)").toLowerCase();
  
    if (hasOrdered === "yes") {
      alert("Complaint Submitted Successfully");
    } else {
      alert("Can't accept your Complaint");
    }
  }
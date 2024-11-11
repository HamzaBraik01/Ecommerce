document.querySelector("#submitbutton").addEventListener("click", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("FirstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("Emailreq").value;
    const phone = document.getElementById("Number").value;
    const textarea = document.getElementById("textarea").value;
    if (firstName.length < 3 || lastName.length < 3) {
        alert("First name and Last name must be at least 3 characters for each!");
        return;
    }
    if (email.length<14 || email.indexOf("@") < 0 || email.indexOf("gmail.com") < 0) {
        alert("Invalid email!");
        return;
    }
    if (isNaN(phone) || phone.length < 10 || phone.length > 15) {
        alert("Phone number must contain 10 numbers!");
        return;
    }
    if (textarea.length < 18) {
        alert("your massege too short!");
    }
    alert("Form submitted successfully!");
});
document.getElementById("canelbutton").addEventListener("click", function(event) {
    const confirmCancel = confirm("Are you sure you want to cancel?");
    if (confirmCancel) {
        document.querySelector("form").reset();
    }
});

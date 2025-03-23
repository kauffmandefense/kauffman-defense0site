function showConfirmation() {
    document.getElementById("confirm-name").innerText = document.getElementById("name").value;
    document.getElementById("confirm-email").innerText = document.getElementById("email").value;
    document.getElementById("confirm-phone").innerText = document.getElementById("phone").value;
    document.getElementById("confirm-address").innerText = document.getElementById("address").value;
    document.getElementById("confirm-class").innerText = document.getElementById("classSelection").value;
    document.getElementById("confirm-rental").innerText = document.getElementById("rental").value;

    document.getElementById("booking-form").style.display = "none";
    document.getElementById("confirmation-page").style.display = "block";
}

function editForm() {
    document.getElementById("confirmation-page").style.display = "none";
    document.getElementById("booking-form").style.display = "block";
}

function submitForm() {
    alert("Your booking has been submitted!");
    // Here, integrate Google Sheets API to send the data
}

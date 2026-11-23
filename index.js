document.getElementById("admissionForm").addEventListener("submit", function(event) {

    let inputs = this.querySelectorAll("input, textarea");
    let empty = false;

    inputs.forEach(function(input) {

        if (input.value.trim() === "") {
            empty = true;
        }

        else {
            input.style.border = "2px solid green";
        }

    });

    if (empty) {
        event.preventDefault();
        alert("Please fill in all the details before submitting!");
    }

});
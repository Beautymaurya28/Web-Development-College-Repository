
        function validateForm() {
            var errorMessages = document.getElementById("errorMessages");
            errorMessages.innerHTML = ""; // Reset previous error messages

            var name = document.getElementById("name").value.trim();
            var email = document.getElementById("email").value.trim();
            var phone = document.getElementById("phone").value.trim();
            var position = document.getElementById("position").value.trim();
            var qualifications = document.getElementById("qualifications").value.trim();
            var resume = document.getElementById("resume").files.length;

            var errors = [];

    
            if (name === "") {
                errors.push("Name is required.");
            }

            var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(email)) {
                errors.push("Please enter a valid email address.");
            }

            var phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(phone)) {
                errors.push("Phone number should be 10 digits.");
            }

            if (position === "") {
                errors.push("Position is required.");
            }
            if (qualifications === "") {
                errors.push("Please enter your qualifications.");
            }


            if (resume === 0) {
                errors.push("Resume is required.");
            }

            if (errors.length > 0) {
                errorMessages.innerHTML = errors.join("<br>");
                return false;
            }
            return true;
        }
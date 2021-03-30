const inputs = document.querySelectorAll("input");
const smalls = document.querySelectorAll("small");
const form = document.querySelector("form");
const name = document.getElementById("name");
const zipCode = document.getElementById("zipCode");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");

console.log(name, zipCode, email, phoneNumber);

// console.log(smalls);
form.addEventListener("submit", function (a) {
    a.preventDefault();
    // if (name.value !== "") {
    //     name.className = "success";
    // }
    // if (zipCode.value !== "") {
    //     zipCode.className = "success";
    // }
    // if (email.value !== "") {
    //     email.className = "success";
    // } else if (!isEmail(email.value)) {
    //     email.parentElement.querySelector("small").className = "errorSmall";
    // }

    // if (phoneNumber !== "") {
    //     phoneNumber.className = "success";
    // }

    // Does the same things as above

    inputs.forEach((e) => {
        if (e.value.trim() === "") {
            e.parentElement.querySelector("small").className = "errorSmall";
        } else {
            e.className = "success";
        }
    });

    // Go back to the default after 1,5 sek
    setTimeout(function () {
        inputs.forEach((e) => {
            e.className = "";
            smalls.forEach((s) => {
                s.className = "";
            });
        });
    }, 2500);
});

// name.className = "success";

const inputs = document.querySelectorAll("input");
const smalls = document.querySelectorAll("small");
const form = document.querySelector("form");

console.log(smalls);
form.addEventListener("submit", function (a) {
    a.preventDefault();

    function checker(bor) {
        if (bor.value === "") {
            bor.className = "error";
            small.forEach((e) => {
                e.className = "smallError";
            });
        }
    }
    // Go back to the default after 1,5 sek
    setTimeout(function () {
        inputs.forEach((e) => {
            e.className = "";
            smalls.forEach((s) => {
                s.className = "";
            });
        });
    }, 1500);
});

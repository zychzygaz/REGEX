const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");

form.addEventListener("submit", function (a) {
    a.preventDefault();
    function checker(bor) {
        if (bor.value === "") {
            bor.className = "error";
            document.querySelectorAll("small").forEach((s) => {
                s.className = "errorSmall";
            });
        }
    }

    inputs.forEach((e) => {
        e.addEventListener("click", checker(e));
    });

    setTimeout(function () {
        inputs.forEach((e) => {
            e.className = "";
            document.querySelectorAll("small").forEach((s) => {
                s.className = "";
            });
        });
    }, 1500);
});

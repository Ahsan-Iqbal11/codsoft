document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".digit, .operator");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.textContent;

            if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Error";
                }
            } else if (value === "C") {
                display.value = "";
            } else {
                if (display.value === "Error") {
                    display.value = ""; // Clear the display if there was an error
                }
                display.value += value;
            }
        });
    });
});

let age = prompt("whats ypur age");
let hasLicence = prompt("do you have licence");

age = Number(age);


if (age>=18 && hasLicence === "yes") {
    alert("you are eligible for driving")
} else {
    alert('you are not eligible for driving')
}
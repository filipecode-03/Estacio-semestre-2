const cars = ["BMW", "Volvo", "Saab", "Ford"]
let text = ""
for (let x of cars) {
    text += x + ""
}
document.getElementById("d1").innerHTML = text
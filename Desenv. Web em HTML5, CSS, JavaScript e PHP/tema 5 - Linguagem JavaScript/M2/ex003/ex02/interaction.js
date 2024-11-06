const cars = ["BMW", "Volvo", "Saab", "Ford"]
let text = ""
for (let x in cars) {
    text += cars[x] + ""
}
document.getElementById("d1").innerHTML = text
const person = {
    fname:"John",
    Iname:"Doe",
    age:25
}
let text = ""
for (let x in person) {
    text += person[x] + ""; // x é o nome do campo
}
document.getElementById("d1").innerHTML = text
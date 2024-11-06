const executar = () => {
    const x = eval(document.getElementById("v1").value)
    let serie = "", i=0
    while (i <= x) {
        serie += fibonacci(i) + ""; i++;
    }
    document.getElementById("resp").innerHTML = `Resultado: ${serie}`
}
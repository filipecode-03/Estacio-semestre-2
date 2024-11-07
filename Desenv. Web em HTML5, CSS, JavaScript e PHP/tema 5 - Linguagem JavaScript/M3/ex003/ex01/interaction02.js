const executar = () => {
    const x = eval(document.getElementById('v1').value)
    addValor(x)
    google.charts.load('current', {package: ['corechart', 'line']})
    google.charts.setOnLoadCallback(drawBasic)
    document.getElementById('media').innerHTML = `Media: ${media()}`
}
const executar = () => {
    const peso = eval(document.getElementById('v1').value)
    const altura = eval(document.getElementById('v2').value)
    const v_imc = imc(peso,altura)
    const v_sit = situacao(v_imc)
    alert(`IMC: ${v_imc.toFixed(2)} :: Situação: ${v_sit}`)
}
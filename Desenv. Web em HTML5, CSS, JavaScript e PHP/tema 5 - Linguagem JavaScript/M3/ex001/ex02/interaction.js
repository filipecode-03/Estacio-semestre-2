executar = () => {
    const valores = [1,6,5,9,2]
    valores.sort()
    console.log(valores)
    console.log(`Valor na posição 3: ${valores[3]}`)
    valores.forEach((Element,index) => console.log(`Valor[${index}]:${Element}`))
    const somaDobro = valores.map((e) => e*2).reduce((a,b) => a + b)
    console.log("Soma 2x = " + somaDobro)
}
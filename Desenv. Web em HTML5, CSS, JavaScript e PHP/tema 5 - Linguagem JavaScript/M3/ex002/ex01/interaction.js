const bubble = (v) => {
    let ordenado = false
    while (!ordenado) {
        ordenado = true
        for (let i= 1; i < v.length; i++)
            if (v[i-1] > v[i]) {
                const aux = v[i]; v[i] = v[i-1]; v[i-1] = aux; ordenado = false
            }
    }
}
const valores = [3,1,7,8,4]
console.log(valores)
bubble(valores)
console.log(valores)
let painel = document.getElementById('demo');
let hora = new Date().getHours();
if (hora < 12) {
    painel.innerHTML = "Bom dia!";
}
else if (hora < 18) {
    painel.innerHTML = "Boa tarde!";
}
else {
    painel.innerHTML = "Boa noite!";
}
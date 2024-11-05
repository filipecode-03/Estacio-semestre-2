let painel = document.getElementById('demo');
let hora = new Date().getHours();
painel.innerHTML = 
        (hora < 12) ? "Bom dia!" :
        (hora < 18) ? "Boa noite!" :
        'Boa noite!';
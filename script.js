const btnEnviar = document.querySelector('.btn');
const gerenciador = document.querySelector('.gerenciador');
const resultado = document.getElementById('resultado');
btnEnviar.addEventListener("click",password);

function password()
{
    let serial = '';
    
    var passwordChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(i = 0; i < 25; i ++)
    {
        serial += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));
    }

    resultado.innerHTML = `<strong>Seu serial</strong>: <br> ${serial}`;
}

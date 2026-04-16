let form = document.getElementById("id_formulario");

form.addEventListener("submit", evento => {
    evento.preventDefault();

    let nome = document.getElementById("id_nome").value;
    let telefone = document.getElementById("id_telefone").value;
    let endereco = document.getElementById("id_endereco").value;

    let radio = document.querySelector('input[name="radio_s"]:checked');
    let tamanho = radio ? radio.value : "Não informado";

    let massa = document.getElementById("id_massa").value;

    let checkbox = document.querySelectorAll('input[name="checkbox_tech"]:checked');
    let ingredientes = [];

    for(let i = 0; i < checkbox.length; i++){
            ingredientes.push(checkbox[i].value);
        }

    let ingredientesTexto = ingredientes.join(", ");

    alert(`Pedido realizado!

    Nome: ${nome}
    Telefone: ${telefone}
    Endereço: ${endereco}
    Tamanho: ${tamanho}
    Massa: ${massa}
    Ingredientes: ${ingredientes}`);

    let resultado = document.getElementById("id_resultado");

    resultado.style.transform = "scale(1)";

    resultado.innerHTML = `
        <legend>Pedido</legend>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Tamanho:</strong> ${tamanho}</p>
        <p><strong>Massa:</strong> ${massa}</p>
        <p><strong>Ingredientes:</strong> ${ingredientes}</p>
    `;
});

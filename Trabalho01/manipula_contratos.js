const clientes = []
function ManipulaEnviarFormulario(event) {
    if(!confirm('Confirma o envio?')){
        return
       }
    event.preventDefault()
    const iptIndice = document.getElementById('indice')
    const iptCliente = document.getElementById('cliente')
    const iptCNPJ = document.getElementById('cnpj')
    const iptModelo = document.getElementById('modelo')
    const iptValor = document.getElementById('valor')
    const cliente = {
        "cliente": iptCliente.value,
        "cnpj": iptCNPJ.value,
        "modelo": iptModelo.value,
        "valor": iptValor.value

    }
    if(iptIndice.value){
        clientes.splice(iptIndice.value, 1, cliente)
    }else{
        clientes.push(cliente)
    }
    event.target.reset()
    iptIndice.value = ''
    desenhaTabela()
}

function manipulaBotaoExcluir(event) {
   if(!confirm('Confirma a exclusão?')){
    return
   }
    const indice =  event.target.getAttribute('data-indice')
    clientes.splice(indice, 1)
    desenhaTabela()
}

function manipulaBotaoEditar(event) {
    
    const indice =  event.target.getAttribute('data-indice')
    const iptCliente =  document.getElementById("cliente")
    const iptCNPJ = document.getElementById("cnpj")
    const iptModelo = document.getElementById("modelo")
    const iptValor = document.getElementById("valor")
    const iptIndice = document.getElementById("indice")
    iptCliente.value = clientes[indice].cliente
    iptCNPJ.value = clientes[indice].cnpj
    iptModelo.value = clientes[indice].modelo
    iptValor.value = clientes[indice].valor
    iptIndice.value = indice

}

function desenhaTabela() {
    const corpo = document.getElementById("corpo_tabela")
    corpo.innerHTML = " "
    for (let i = 0; i < clientes.length; i++) {
        const tr = document.createElement("tr")
        const tdCliente = document.createElement("td")
        const tdCNPJ = document.createElement("td")
        const tdModelo = document.createElement("td")
        const tdValor = document.createElement("td")
        const tdAcoes = document.createElement("td")
        const btEdit = document.createElement ("button")
        const btExc = document.createElement ("button")

        tdCliente.textContent = clientes[i].cliente
        tdCNPJ.textContent = clientes[i].cnpj
        tdModelo.textContent = clientes[i].modelo
        tdValor.textContent = clientes[i].valor

        btEdit.textContent = 'Editar'
        btEdit.setAttribute('data-indice', i)
        btEdit.addEventListener('click', manipulaBotaoEditar)
        btExc.textContent = 'Excluir'
        btExc.setAttribute('data-indice',i)
        btExc.addEventListener('click', manipulaBotaoExcluir)

        tdAcoes.append(btEdit, btExc)
        tr.append(tdCliente, tdCNPJ, tdModelo, tdValor, tdAcoes)
        corpo.append(tr)
    }

}
const form = document.getElementById("form_contratos")
form.addEventListener("submit", ManipulaEnviarFormulario)
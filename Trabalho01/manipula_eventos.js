const clientes = []
function ManipulaEnviarFormulario(event) {
    if(!confirm('Confirma o envio?')){
        return
       }
    event.preventDefault()
    const iptIndice = document.getElementById('indice')
    const iptCliente = document.getElementById('cliente')
    const iptLugar = document.getElementById('lugar')
    const iptModelo = document.getElementById('modelo')
    const iptHorario = document.getElementById('horario')
    const cliente = {
        "cliente": iptCliente.value,
        "lugar": iptLugar.value,
        "modelo": iptModelo.value,
        "horario": iptHorario.value

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
    const iptLugar = document.getElementById("lugar")
    const iptModelo = document.getElementById("modelo")
    const iptHorario = document.getElementById("horario")
    const iptIndice = document.getElementById("indice")
    iptCliente.value = clientes[indice].cliente
    iptLugar.value = clientes[indice].lugar
    iptModelo.value = clientes[indice].modelo
    iptHorario.value = clientes[indice].horario
    iptIndice.value = indice

}

function desenhaTabela() {
    const corpo = document.getElementById("corpo_tabela")
    corpo.innerHTML = " "
    for (let i = 0; i < clientes.length; i++) {
        const tr = document.createElement("tr")
        const tdCliente = document.createElement("td")
        const tdLugar = document.createElement("td")
        const tdModelo = document.createElement("td")
        const tdHorario = document.createElement("td")
        const tdAcoes = document.createElement("td")
        const btEdit = document.createElement ("button")
        const btExc = document.createElement ("button")

        tdCliente.textContent = clientes[i].cliente
        tdLugar.textContent = clientes[i].lugar
        tdModelo.textContent = clientes[i].modelo
        tdHorario.textContent = clientes[i].horario

        btEdit.textContent = 'Editar'
        btEdit.setAttribute('data-indice', i)
        btEdit.addEventListener('click', manipulaBotaoEditar)
        btExc.textContent = 'Excluir'
        btExc.setAttribute('data-indice',i)
        btExc.addEventListener('click', manipulaBotaoExcluir)

        tdAcoes.append(btEdit, btExc)
        tr.append(tdCliente, tdLugar, tdModelo, tdHorario, tdAcoes)
        corpo.append(tr)
    }

}
const form = document.getElementById("form_eventos")
form.addEventListener("submit", ManipulaEnviarFormulario)
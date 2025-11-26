const clientes = []
function ManipulaEnviarFormulario(event) {
    if(!confirm('Confirma o envio?')){
        return
       }
    event.preventDefault()
    const iptIndice = document.getElementById('indice')
    const iptNome = document.getElementById('nome')
    const iptIdade = document.getElementById('idade')
    const iptAltura = document.getElementById('altura')
    const iptOlhos = document.getElementById('olhos')
    const cliente = {
        "nome": iptNome.value,
        "idade": iptIdade.value,
        "altura": iptAltura.value,
        "olhos": iptOlhos.value

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
    const iptNome =  document.getElementById("nome")
    const iptIdade = document.getElementById("idade")
    const iptAltura = document.getElementById("altura")
    const iptOlhos = document.getElementById("olhos")
    const iptIndice = document.getElementById("indice")
    iptNome.value = clientes[indice].nome
    iptIdade.value = clientes[indice].idade
    iptAltura.value = clientes[indice].altura
    iptOlhos.value = clientes[indice].olhos
    iptIndice.value = indice

}

function desenhaTabela() {
    const corpo = document.getElementById("corpo_tabela")
    corpo.innerHTML = " "
    for (let i = 0; i < clientes.length; i++) {
        const tr = document.createElement("tr")
        const tdNome = document.createElement("td")
        const tdIdade = document.createElement("td")
        const tdAltura = document.createElement("td")
        const tdOlhos = document.createElement("td")
        const tdAcoes = document.createElement("td")
        const btEdit = document.createElement ("button")
        const btExc = document.createElement ("button")

        tdNome.textContent = clientes[i].nome
        tdIdade.textContent = clientes[i].idade
        tdAltura.textContent = clientes[i].altura
        tdOlhos.textContent = clientes[i].olhos

        btEdit.textContent = 'Editar'
        btEdit.setAttribute('data-indice', i)
        btEdit.addEventListener('click', manipulaBotaoEditar)
        btExc.textContent = 'Excluir'
        btExc.setAttribute('data-indice',i)
        btExc.addEventListener('click', manipulaBotaoExcluir)

        tdAcoes.append(btEdit, btExc)
        tr.append(tdNome, tdIdade, tdAltura, tdOlhos, tdAcoes)
        corpo.append(tr)
    }

}
const form = document.getElementById("form_cliente")
form.addEventListener("submit", ManipulaEnviarFormulario)
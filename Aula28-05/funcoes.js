function acessaEModifica() {
    //Acessado e modificado o título
    const tit=document.getElementById('titulo')// cria a constate tit que irá modificar o título
    tit.textContent= "Título modificado" // modifica as palavras do titulo
    tit.style.color="green" // muda a cor
    tit.style.textAlign ='center' // centraliza

    //Acessando e modificando a imagem
    const im = document.getElementById("img")
    im.src = "t-rex.webp"

    //Acessando e adicionado elementos na lista
    const lis = document.getElementById('lista') // procura o elemento com id 'lista'
    const it = document.createElement('li') // cria um novo elemento li
        it.textContent = 'Nova linhNovo item' // coloca o conteudo dentro do elemento criado
        lis.append(it) // coloca o elemento na linha
    
}
const v1 = []
function botaoNovo(){
    let nome= prompt ("Informe o nome:")
    let idade= prompt ("Informe a idade:")
     const obj = {"Nome":nome, "Idade": idade}
     v1.push(obj)
}

function botaoListar() {
    for (let i = 0; i < v1.length; i++) {
        console.log(v1[i])
         
     }
}

function botaoRemover() {
let nome = prompt ("Nome: ")
let indice = -19
for (let i = 0; i < v1.length; i++) {
   if (v1[i].Nome == nome) {
    indice = i
    break
   }
    
}
if (indice == -19) {
    console.log("Nome não encontrado no vetor")
}else{
    v1.splice(indice, 1)
    console.log("Removido")
}
}
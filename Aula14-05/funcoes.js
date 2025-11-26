function criarVetotPreenchido(){
    // criação do vetor com new Array
const v1= new Array (12,'Maria', 12.5, 25)
console.log(v1)

//criação do vetor apenas com colchetes
const v2= [78,36, 'Kiko', true, 'Hilda', 'Jambo']
    console.log(v2)
    }
function adicionarValoresAoVetor(){
    const v1= []
    // push => acrescenta um ou mais elementos ao vetor
    v1.push('12', 23,'Antunes')
    v1.push(0)
    v1.push(500.69)
    // lenght=> retorna o tamanho atual do vetor
    for(let i=0; i<v1.length; i++){
        console.log(v1[i])
    }
}

function removerElementosFinalDoVetor(){
    const v1=[52,36,98,'Pietro', 'Thalita']
    // pop => remove o últiomo elemento do vetor
    console.log(v1.pop())
    console.log(v1.pop())
    console.log(v1.pop())
    

    console.log(v1)
}

function verificaIndiceDeValor(){
    const v1 = ['23','Bia', 'Lopes', 'Paty']
    const nome = prompt ('Nome:')
    // indexOf=> verifica se um valor stá no array
    const indice = v1.indexOf(nome)
    alert(indice)
}
function removeESubstituiDoMeioVetor(){
    const v1=['Leo', 'Lia', 'Leandro', 'Lucas','Loureço', 'Lets']
    console.log(v1)
    //splice com dois parâmetros, sendo que o primeiro indica a partir de qual posição será a remoção e o segundo representa a quantidade a ser removida.
    // neste caso, o Leandro foi removido
    v1.splice(2, 1)
    console.log(v1)

    /* splice (i, n, v) => remove n valores a partir de de i e os sustitui por V, I é a aposição de N são quantosdesejo remover e sustituir pelo V declarado
       */
    v1.splice(3, 1, 'Lara')
    console.log(v1)

    //splice(i) => remove todos os elementos a 
    // partir de i
    v1.splice()
    console.log (v1)
}
function testeObjetoJson(){
    const obj = {"nome": "João da silva", "idade": 27}
    console.log(obj.nome)
    console.log(obj.idade)
    console.log(obj)
}
function testeVetorDeObjetos(){
    const p = [
        {"nome": "João da silva", "idade": 39},
        {"nome": "Jonas Catué", "idade": 17},
        {"nome": "Talema Moore", "idade": 16}
    ]
    p.push({"nome": "Denis Carvalho", "idade": 87})
    console.log(p)

    for (let i = 0; i < p.length; i++) {
       console.log('Nome:'+p[i].nome+" - Idade:"+p[i].idade)
        
    }
}
function testeObjetoComVetor(){
    const f = {
        "nome": "Silva Sauro",
        "idade": 54,
        "dependentes":["Ana", "Arthur", "Messias"]
    }
    console.log("Nome: " +f.nome)
    console.log("Idade: "+f.idade)
    console.log('Dependente:')
    for (let i = 0; i < f.dependentes.length; i++) {
        console.log(f.dependentes[i])
        
    }
}
//let é uma palavra reservada para indicar a criação da variável
// o console é para aulixiar o programador, é nele que o programador vê o que de fato está acontecendo
function testesSaidasBasicas() {
    alert('Saída com alert');
    console.log('Saída com console');
    }
    function testesEntradasBasicas() {
        confirm('Deseja confirmar a operação?');
        prompt('Digite o número de cartão');
    }
    function testesComConstantes() {
        const fator=5.698
        console.log(fator)
        fator=6.6987
        console.log(fator)// nesse caso dá erro porque a constante está recebendo 2 valores distintos 
    }
    // esta parte é sobre várias variáveis, sendo que no console aparece todas elas
    function testesComVariáveis() {
        let a = 10
        let b = 67.33
        let c = 'Jonas'
        let d ='Kiko'
        let e = `${c} é amigo de ${d}`//isso aqui chama o nome das variáveis 'c' e 'd'
        let f = false;
        console.log(typeof a);
        console.log(a)

        console.log(typeof b);// esse typeof é para mostar no console o tipo da variável b
        console.log(b)

        console.log(typeof c);
        console.log(c)
        
        console.log(typeof d);
        console.log(d)
        
        console.log(typeof e);
        console.log(e)

        console.log(typeof f)
        console.log(f)
    }
    function testesEstruturasControle() { // aqui mostra as estruturas de decisão, onde aparece um recadinho na tela do 
        //navegador onde o usuário escolherá uma opção para continuar
        const resposta = confirm('Fugir de casa?')
        if(resposta == true){
            alert('Vá com Deus')
        }else{
            alert('Fica filho amado!')
        }
    }
    function TesteComRepeticao() {
        console.log('Com for')
        for (let i = 0; i < 10; i++) {
            console.log(i+':'+i*i) //aqui é igual java, tem como usar as repetições que tem no java como 
            //'for' e 'while'. Também tem outros tipos de repetição
        }
        console.log('Com while')
        let i = 0
        while(i<10){
            console.log(i+':'+i*i)
            i++
        }
    }
    function testeComVetores() {
        let vetor = [23,25,36,25,27];
        console.log('For normal.')// esse 'for' é como no java
        for (let i= 0; i < vetor.length; i++) {
           console.log(vetor[i])            
        }
        console.log('For in ')//esse 'for' é diferente, ele mostra a posição que o elemento ocupa no vetor e o valor do vetor
        for (const indice in vetor) {
                 console.log(indice+':'+vetor[indice])      
        }
        console.log('Com for of')//esse 'for' mostra apenas o valor do vetor, como o 'for' normal, só que bem mais resumido
        for (const el of vetor) {
            console.log(el)
        }
        }
import {Clientes} from '../../../database/tables';
import {redirect} from 'next/navigation';
import "../../css/cadastro.css";
import {revalidatePath } from 'next/cache';
async function InsereCliente(formData){
    'use server';
    const dados ={
        nome: formData.get('nome'),
        cnpj: formData.get('cnpj'),
        email: formData.get('email'),
        telefone: formData.get('telefone')
    }

    await Clientes.create(dados);
    revalidatePath('/clientes');
    redirect ('/clientes')
}
function TelaNovoClientes(){
return (
    <>

    <form action={InsereCliente}>
        <label htmlFor="nome" >Nome</label> < br/>
        <input type="text" name="nome" />< br/>

        <label htmlFor="cnpj" >CNPJ</label> < br/>
        <input type="text" name="cnpj" /> < br/>

        <label htmlFor="email" >Email</label> < br/>
        <input type="text" name="email" />< br/>

        <label htmlFor="telefone" >Telefone</label> < br/>
        <input type="text" name="telefone" />< br/>


        <button>Cadastrar</ button>

       
    </form>  </>  
)
}

export default TelaNovoClientes;
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { Clientes } from "../../../database/tables";
import { redirect } from 'next/navigation';
import {revalidatePath } from 'next/cache';
import "../../css/cadastro.css";
async function editaClientes(formData){
    'use server'
    const id = formData.get('id');
    const nome = formData.get('nome');
    const cnpj = formData.get('cnpj');
    const email = formData.get('email');
    const telefone = formData.get('telefone');

    const cliente = await Clientes.findByPk(id);

    cliente.nome = nome;
    cliente.cnpj = cnpj;
    cliente.email = email;
    cliente.telefone = telefone;

    await cliente.save();
    revalidatePath('/clientes');

    redirect('/clientes')
}

async function TelaEditaClientes({searchParams}){
    const id = searchParams.id; 
    const cliente =  await Clientes.findByPk(id)
    return (
        <>
    
        <form action={editaClientes}>

            <input type ="hidden" name = "id" defaultValue={cliente.id}/>

        <label htmlFor="nome" >Nome</label> < br/>
        <input type="text" name="nome" defaultValue={cliente.nome}/>< br/>

        <label htmlFor="cnpj" >CNPJ</label> < br/>
        <input type="text" name="cnpj" defaultValue={cliente.cnpj}/> < br/>

        <label htmlFor="email" >Email</label> < br/>
        <input type="text" name="email" defaultValue={cliente.email}/> < br/>

        <label htmlFor="telefone">Telefone</label> < br/>
        <input type="text" name="telefone" defaultValue={cliente.telefone} /> < br/>

    
            <button>Cadastrar</ button>
    
           
        </form>  </>  
    )
    }
    export default TelaEditaClientes;
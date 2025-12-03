import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { Funcionarios } from "../../../database/tables";
import { redirect } from 'next/navigation';
import {revalidatePath } from 'next/cache';
async function editaFuncionarios(formData){
    'use server'
    const id = formData.get('id');
    const nome = formData.get('nome');
    const descricao = formData.get('descricao');
    const idade = formData.get('idade');
    const salario = formData.get('salario');
   

    const funcionario = await Funcionarios.findByPk(id);

    funcionario.nome = nome;
    funcionario.descricao = descricao;
    funcionario.idade = idade;
    funcionario.salario = salario;
   

    await funcionario.save();

    revalidatePath('/funcionarios');

    redirect('/funcionarios')
}

async function TelaEditaFuncionarios({searchParams}){
    const id = searchParams.id; 
    const funcionario =  await Funcionarios.findByPk(id)
    return (
        <>
    
        <form action={editaFuncionarios}>

            <input type ="hidden" name = "id" defaultValue={funcionario.id}/>

            <label htmlFor="nome" >Nome</label> < br/>
            <input type="text" name="nome" defaultValue={funcionario.nome} />< br/>
    
            <label htmlFor="descricao" >Descrição</label> < br/>
            <input type="text" name="descricao" defaultValue={funcionario.descricao} /> < br/>

            <label htmlFor="idade" >Idade</label> < br/>
            <input type="text" name="idade" defaultValue={funcionario.idade} /> < br/>

            <label htmlFor="salario" >salario</label> < br/>
            <input type="text" name="salario" defaultValue={funcionario.salario} /> < br/>
    
    
            <button>Cadastrar</ button>
    
           
        </form>  </>  
    )
    }
    export default TelaEditaFuncionarios;
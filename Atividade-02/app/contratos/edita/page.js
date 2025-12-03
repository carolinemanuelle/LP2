import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { Contratos } from "../../../database/tables";
import { redirect } from 'next/navigation';
import {revalidatePath } from 'next/cache';
import "../../css/cadastro.css";
async function editaContrato(formData){
    'use server'
    const id = formData.get('id');
    const datini = formData.get('datini');
    const datfim = formData.get('datfim');
    const valor = formData.get('valor');
    const numcon = formData.get('numcon');

    const contrato = await Contratos.findByPk(id);

    contrato.datini = datini;
    contrato.datfim = datfim;
    contrato.valor = valor;
    contrato.numcon = numcon;

    await contrato.save();
    revalidatePath('/contratos');

    redirect('/contratos')
}

async function TelaEditaContratos({searchParams}){
    const id = searchParams.id; 
    const contrato =  await Contratos.findByPk(id)
    return (
        <>
    
        <form action={editaContrato}>

            <input type ="hidden" name = "id" defaultValue={contrato.id}/>

        <label htmlFor="datini" >Data de Início</label> < br/>
        <input type="text" name="datini" defaultValue={contrato.datini}/>< br/>

        <label htmlFor="datfim" >Data de Fim</label> < br/>
        <input type="text" name="datfim" defaultValue={contrato.datfim}/> < br/>

        <label htmlFor="valor" >Valor</label> < br/>
        <input type="text" name="valor" defaultValue={contrato.valor}/> < br/>

        <label htmlFor="numcon" >Número do Contrato</label> < br/>
        <input type="text" name="numcon" defaultValue={contrato.numcon} /> < br/>

    
            <button>Cadastrar</ button>
    
           
        </form>  </>  
    )
    }
    export default TelaEditaContratos;
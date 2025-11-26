import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { Modelos } from "../../../database/tables";
import { redirect } from 'next/navigation'
async function editaModelo(formData){
    'use server'
    const id = formData.get('id');
    const nome = formData.get('nome');
    const pais = formData.get('pais');
    const altura = formData.get('altura');
    const massa = formData.get('massa');

    const modelo = await Modelos.findByPk(id);

    modelo.nome = nome;
    modelo.pais = pais;
    modelo.altura = altura;
    modelo.massa = massa;

    await modelo.save();

    redirect('/modelos')
}

async function TelaEditaModelos({searchParams}){
    const id = searchParams.id; 
    const modelo =  await Modelos.findByPk(id)
    return (
        <>
    
        <form action={editaModelo}>

            <input type ="hidden" name = "id" defaultValue={modelo.id}/>

            <label htmlFor="nome" >Nome</label> < br/>
            <input type="text" name="nome" defaultValue={modelo.nome} />< br/>
    
            <label htmlFor="pais" >País</label> < br/>
            <input type="text" name="pais" defaultValue={modelo.pais} /> < br/>
    
            <label htmlFor="altura" >Altura</label> < br/>
            <input type="text" name="altura" defaultValue={modelo.altura} /> < br/>
    
            <label htmlFor="massa" >Massa em KG</label> < br/>
            <input type="text" name="massa" defaultValue={modelo.massa} /> < br/>
    
            <button>Cadastrar</ button>
    
           
        </form>  </>  
    )
    }
    export default TelaEditaModelos;
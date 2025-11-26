import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { Eventos } from "../../../database/tables";
import { redirect } from 'next/navigation'
async function editaEvento(formData){
    'use server'
    const id = formData.get('id');
    const lugar = formData.get('lugar');
    const data = formData.get('data');
    const status = formData.get('status');
    const nome_eve = formData.get('nome_eve');

    const evento = await Eventos.findByPk(id);

    evento.lugar = lugar;
    evento.data = data;
    evento.status = status;
    evento.nome_eve = nome_eve;

    await evento.save();

    redirect('/eventos')
}

async function TelaEditaEventos({searchParams}){
    const id = searchParams.id; 
    const evento =  await Eventos.findByPk(id)
    return (
        <>
    
        <form action={editaEvento}>

            <input type ="hidden" name = "id" defaultValue={evento.id}/>

        <label htmlFor="lugar" >Local do evento</label> < br/>
        <input type="text" name="lugar" defaultValue={evento.lugar}/>< br/>

        <label htmlFor="data" >Data</label> < br/>
        <input type="text" name="data" defaultValue={evento.data}/> < br/>

        <label htmlFor="status" >Status</label> < br/>
        <input type="text" name="status" defaultValue={evento.status}/> < br/>

        <label htmlFor="nome_eve" >Nome do Evento</label> < br/>
        <input type="text" name="nome_eve" defaultValue={evento.nome_eve} /> < br/>

    
            <button>Cadastrar</ button>
    
           
        </form>  </>  
    )
    }
    export default TelaEditaEventos;
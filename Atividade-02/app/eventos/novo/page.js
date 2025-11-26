import {Eventos} from '../../../database/tables';
import {redirect} from 'next/navigation'
async function InsereEventos(formData){
    'use server';
    const dados ={
        lugar: formData.get('lugar'),
        data: formData.get('data'),
        status: formData.get('status'),
        nome_eve: formData.get('nome_eve'),
    }

    await Eventos.create(dados);
    redirect ('/eventos')
}
function TelaNovoEventos(){
return (
    <>

    <form action={InsereEventos}>
        <label htmlFor="lugar" >Local do evento</label> < br/>
        <input type="text" name="lugar" />< br/>

        <label htmlFor="data" >Data</label> < br/>
        <input type="text" name="data" /> < br/>

        <label htmlFor="status" >Status</label> < br/>
        <input type="text" name="status" /> < br/>

        <label htmlFor="nome_eve" >Nome do Evento</label> < br/>
        <input type="text" name="nome_eve" /> < br/>

        
        <button>Cadastrar</ button>

       
    </form>  </>  
)
}

export default TelaNovoEventos;
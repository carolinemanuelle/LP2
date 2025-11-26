import {Modelos} from '../../../database/tables';
import {redirect} from 'next/navigation'
async function InsereModelo(formData){
    'use server';
    const dados ={
        nome: formData.get('nome'),
        pais: formData.get('pais'),
        altura: formData.get('altura'),
        massa: formData.get('massa')
    }

    await Modelos.create(dados);
    redirect ('/modelos')
}
function TelaNovoModelos(){
return (
    <>

    <form action={InsereModelo}>
        <label htmlFor="nome" >Nome</label> < br/>
        <input type="text" name="nome" />< br/>

        <label htmlFor="pais" >País</label> < br/>
        <input type="text" name="pais" /> < br/>

        <label htmlFor="altura" >Altura</label> < br/>
        <input type="text" name="altura" /> < br/>

        <label htmlFor="massa" >Massa em KG</label> < br/>
        <input type="text" name="massa" /> < br/>

        <button>Cadastrar</ button>

       
    </form>  </>  
)
}

export default TelaNovoModelos;
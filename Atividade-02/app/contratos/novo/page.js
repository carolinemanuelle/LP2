import {Contratos} from '../../../database/tables';
import {redirect} from 'next/navigation';
import "../../css/cadastro.css";
import {revalidatePath } from 'next/cache';
async function InsereContratos(formData){
    'use server';
    const dados ={
        datini: formData.get('datini'),
        datfim: formData.get('datfim'),
        valor: formData.get('valor'),
        numcon: formData.get('numcon')
    }

    await Contratos.create(dados);
    revalidatePath('/contratos');
    redirect ('/contratos')
}
function TelaNovoContratos(){
return (
    <>

    <form action={InsereContratos}>
        <label htmlFor="datini" >Data de início</label> < br/>
        <input type="text" name="datini" />< br/>

        <label htmlFor="datfim" >Data de Fim</label> < br/>
        <input type="text" name="datfim" /> < br/>

        <label htmlFor="valor" >Valor</label> < br/>
        <input type="text" name="valor" /> < br/>

        <label htmlFor="numcon" >Numero do Contrato</label> < br/>
        <input type="text" name="numcon" /> < br/>

        <button>Cadastrar</ button>

       
    </form>  </>  
)
}

export default TelaNovoContratos;
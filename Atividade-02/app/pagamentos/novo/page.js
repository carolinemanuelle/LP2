import {Pagamentos} from '../../../database/tables';
import {redirect} from 'next/navigation';
import "../../css/cadastro.css";
async function InserePagamento(formData){
    'use server';
    const dados ={
        valor: formData.get('valor'),
        status: formData.get('status')       
    }

    await Pagamentos.create(dados);
    redirect ('/pagamentos')
}
function TelaNovoPagamentos(){
return (
    <>

    <form action={InserePagamento}>
        <label htmlFor="valor" >Valor</label> < br/>
        <input type="text" name="valor" />< br/>

        <label htmlFor="status" >Status</label> < br/>
        <input type="text" name="status" /> < br/>

        <button>Cadastrar</ button>

       
    </form>  </>  
)
}

export default TelaNovoPagamentos;
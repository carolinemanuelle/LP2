import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { Pagamentos } from "../../../database/tables";
import { redirect } from 'next/navigation'
async function editaPagamentos(formData){
    'use server'
    const id = formData.get('id');
    const valor = formData.get('valor');
    const status = formData.get('status');
   

    const pagamento = await Pagamentos.findByPk(id);

    pagamento.valor = valor;
    pagamento.status = status;
   

    await pagamento.save();

    redirect('/pagamentos')
}

async function TelaEditaPagamentos({searchParams}){
    const id = searchParams.id; 
    const pagamento =  await Pagamentos.findByPk(id)
    return (
        <>
    
        <form action={editaPagamentos}>

            <input type ="hidden" name = "id" defaultValue={pagamento.id}/>

            <label htmlFor="valor" >Valor</label> < br/>
            <input type="text" name="valor" defaultValue={pagamento.valor} />< br/>
    
            <label htmlFor="status" >Status</label> < br/>
            <input type="text" name="staus" defaultValue={pagamento.status} /> < br/>
    
    
            <button>Cadastrar</ button>
    
           
        </form>  </>  
    )
    }
    export default TelaEditaPagamentos;
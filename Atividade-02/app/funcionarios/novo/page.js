import {Funcionarios} from '../../../database/tables';
import {redirect} from 'next/navigation';
import {revalidatePath } from 'next/cache';
async function InsereFuncionario(formData){
    'use server';
    const dados ={
        nome: formData.get('nome'),
        descricao: formData.get('descricao'),
        idade: formData.get('idade'),
        salario: formData.get('salario')

    }

    await Funcionarios.create(dados);
    revalidatePath('/funcionarios');
    redirect ('/funcionarios')
}
function TelaNovoFuncionarios(){
return (
    <>

    <form action={InsereFuncionario}>
        <label htmlFor="nome" >Nome</label> < br/>
        <input type="text" name="nome" />< br/>

        <label htmlFor="descricao" >Descrição</label> < br/>
        <input type="text" name="descricao" /> < br/>

        <label htmlFor="idade" >Idade</label> < br/>
        <input type="text" name="idade" /> < br/>

        <label htmlFor="salario" >Salário</label> < br/>
        <input type="text" name="salario" /> < br/>

        <button>Cadastrar</ button>

       
    </form>  </>  
)
}

export default TelaNovoFuncionarios;
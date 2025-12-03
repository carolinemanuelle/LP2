import { Funcionarios } from "../../database/tables";
import "../css/listagem.css";
import {revalidatePath } from 'next/cache';
async function removeFuncionario(formData) {
    "use server";
    const id = formData.get("id");
    const funcionario = await Funcionarios.findByPk(id);
    await funcionario.destroy();
    revalidatePath('/funcionarios');
    redirect('/funcionarios');
}

async function TelaFuncionarios() {

    const funcionarios = await Funcionarios.findAll();

    return (

        <div>

            <h1>Funcionarios</h1>
            <a href="/funcionarios/novo"> + um funcionário </a> <br />
            <table>



                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Idade</th>
                        <th>Salário</th>
                        <th>Ações</th>



                    </tr>

                </thead>



                <tbody>

                    {

                        funcionarios.map(function (fun) {

                            return (

                                <tr key={fun.id}>

                                    <td>{fun.id}</td>

                                    <td>{fun.nome}</td>

                                    <td>{fun.descricao}</td>

                                    <td>{fun.idade}</td>

                                    <td>{fun.salario}</td>
                                    <td>

                                        <form action={'/funcionarios/edita'}>
                                            <input type="hidden" name="id" defaultValue={fun.id} />
                                            <button>Editar</button>
                                        </form>

                                        <form action={removeFuncionario}>
                                            <input type="hidden" name="id" defaultValue={fun.id} />
                                            <button>Excluir</button>
                                        </form>
                                    </td>


                                </tr>

                            )

                        })

                    }

                </tbody>



            </table>



        </div>

    );

}



export default TelaFuncionarios;
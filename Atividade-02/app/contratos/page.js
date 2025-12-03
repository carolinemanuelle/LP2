import { Contratos } from "../../database/tables";
import "../css/listagem.css";
async function removeContrato(formData) {
    "use server";
    const id = formData.get("id");
    const contrato = await Contrato.findByPk(id);
    await contrato.destroy();
    redirect('/eventos');
}

async function TelaContratos() {

    const contratos = await Contratos.findAll();

    return (

        <div>

            <h1>Contratos</h1>
            <a href="/contratos/novo"> + um contrato </a> <br />
            <table>



                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Data de Início</th>
                        <th>Data de Fim</th>
                        <th>Valor</th>
                        <th>Numero do Contrato</th>
                        <th>Ações</th>



                    </tr>

                </thead>



                <tbody>

                    {

                        contratos.map(function (con) {

                            return (

                                <tr key={con.id}>

                                    <td>{con.id}</td>

                                    <td>{con.datini}</td>

                                    <td>{con.datfim}</td>

                                    <td>{con.valor}</td>

                                    <td>{con.numcon}</td>
                                    <td>

                                        <form action={'/contratos/edita'}>
                                            <input type="hidden" name="id" defaultValue={con.id} />
                                            <button>Editar</button>
                                        </form>

                                        <form action={removeContrato}>
                                            <input type="hidden" name="id" defaultValue={con.id} />
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



export default TelaContratos;
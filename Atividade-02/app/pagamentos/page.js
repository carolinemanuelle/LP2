import { Pagamentos } from "../../database/tables";
import { redirect } from 'next/navigation';
import "../css/listagem.css";

async function removePagamento(formData) {
    "use server";
    const id = formData.get("id");
    const pagamento = await Pagamentos.findByPk(id);
    await pagamento.destroy();
    redirect('/pagamentos');
}

async function TelaPagamentos() {

    const pagamentos = await Pagamentos.findAll();

    return (

        <div>

            <h1>Pagamentos</h1>
            <a href="/pagamentos/novo"> + uma pagamento </a> <br />
            <table border="1">



                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Valor</th>
                        <th>Status</th>
                        <th>Ações</th>

                    </tr>

                </thead>



                <tbody>

                    {

                        pagamentos.map(function (pag) {

                            return (

                                <tr key={pag.id}>

                                    <td>{pag.id}</td>

                                    <td>{pag.valor}</td>

                                    <td>{pag.status}</td>


                                    <td>
                                        <form action={'/pagamentos/edita'}>
                                            <input type="hidden" name="id" defaultValue={pag.id} />
                                            <button>Editar</button>
                                        </form>


                                        <form action={removePagamento}>
                                            <input type="hidden" name="id" defaultValue={pag.id} />
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



export default TelaPagamentos;
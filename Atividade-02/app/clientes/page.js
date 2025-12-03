import { Clientes } from "../../database/tables";
import "../css/listagem.css";
async function removeCliente(formData){
    "use server";
    const id = formData.get("id");
    const cliente =  await Cliente.findByPk(id);
    await cliente.destroy();
    redirect('/cliente');
}

async function TelaClientes() {

    const clientes = await Clientes.findAll();

    return (

        <div>

            <h1>Clientes</h1>
            <a href="/clientes/novo"> + uma cliente </a> <br/>
            <table border="1">



                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Nome</th>
                        <th>cnpj</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Ações</th>



                    </tr>

                </thead>



                <tbody>

                    {

                        clientes.map(function (cli) {

                            return (

                                <tr key={cli.id}>

                                    <td>{cli.id}</td>

                                    <td>{cli.nome}</td>

                                    <td>{cli.cnpj}</td>

                                    <td>{cli.email}</td>

                                    <td>{cli.telefone}</td>
                                    <td>
                                    <form action={'/clientes/edita'}>
                                            <input type= "hidden" name="id" defaultValue={cli.id}/>
                                            <button>Editar</button>
                                        </form>
                                        <form action={removeCliente}>
                                            <input type= "hidden" name="id" defaultValue={cli.id}/>
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



export default TelaClientes;
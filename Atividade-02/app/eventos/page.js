import { Eventos } from "../../database/tables";
import {redirect} from 'next/navigation';
import "../css/listagem.css";
import {revalidatePath } from 'next/cache';
async function removeEvento(formData){
    "use server";
    const id = formData.get("id");
    const evento =  await Eventos.findByPk(id);
    await evento.destroy();
    revalidatePath('/eventos');
    redirect('/eventos');
}

async function TelaEventos() {

    const eventos = await Eventos.findAll();

    return (

        <div>

            <h1>Eventos</h1>
            <a href="/eventos/novo"> + um evento </a> <br/>
            <table border="1">



                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Local</th>
                        <th>Data</th>
                         <th>Status</th>
                        <th>Nome do Evento</th>
                        <th>Ações</th>



                    </tr>

                </thead>



                <tbody>

                    {

                        eventos.map(function (eve) {

                            return (

                                <tr key={eve.id}>

                                    <td>{eve.id}</td>

                                    <td>{eve.lugar}</td>

                                    <td>{eve.data}</td>

                                     <td>{eve.status}</td>

                                    <td>{eve.nome_eve}</td>
                                    <td>
                                    <form action={'/eventos/edita'}>
                                            <input type= "hidden" name="id" defaultValue={eve.id}/>
                                            <button>Editar</button>
                                        </form>
                                    

                                        <form action={removeEvento}>
                                            <input type= "hidden" name="id" defaultValue={eve.id}/>
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



export default TelaEventos;
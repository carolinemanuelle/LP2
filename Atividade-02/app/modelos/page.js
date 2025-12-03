import { Modelos } from "../../database/tables";
import {redirect} from 'next/navigation';
import "../css/listagem.css";

async function removeModelo(formData){
    "use server";
    const id = formData.get("id");
    const modelo =  await Modelos.findByPk(id);
    await modelo.destroy();
    redirect('/modelos');
}

async function TelaModelos() {

    const modelos = await Modelos.findAll();

    return (

        <div>

            <h1>Modelos</h1>
            <a href="/modelos/novo"> + uma modelo </a> <br/>
            <table border="1">



                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Nome</th>
                        <th>País</th>
                        <th>Altura</th>
                        <th>Massa</th>
                        <th>Ações</th>



                    </tr>

                </thead>



                <tbody>

                    {

                        modelos.map(function (mod) {

                            return (

                                <tr key={mod.id}>

                                    <td>{mod.id}</td>

                                    <td>{mod.nome}</td>

                                    <td>{mod.pais}</td>

                                    <td>{mod.altura}</td>

                                    <td>{mod.massa}</td>

                                    <td>
                                        <form action={'/modelos/edita'}>
                                            <input type= "hidden" name="id" defaultValue={mod.id}/>
                                            <button>Editar</button>
                                        </form>
                                    
                                   
                                        <form action={removeModelo}>
                                            <input type= "hidden" name="id" defaultValue={mod.id}/>
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



export default TelaModelos;
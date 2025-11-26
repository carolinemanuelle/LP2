import {Filme} from '../../database/tables';
async function Filmes() {
    const filmes = await Filme.findAll()
    console.log(filmes)
    return (<>        
        <h1>Filmes</h1>
        <table border="1">
            <thead >
                <tr>
                <th>ID</th>
                <th>TÍTULO</th>
                <th>DESCRIÇÃO</th>
                <th>ANO</th>
                </tr>
            </thead>
            <tbody>
                {
                    filmes.map(function(fil){
                        return(
                            <tr key = {fil.id}>
                                <td>{fil.id}</td>
                                <td>{fil.titulo}</td>
                                <td>{fil.descricao}</td>
                                <td>{fil.ano}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>      
        </>
        )
  
}
export default Filmes  
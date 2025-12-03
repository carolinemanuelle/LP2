import "../app/css/menu.css";

function Menu() {

    return (

        <nav>

            <div className="div-img-menu">
                <img src="/RostoFlorentina.png" alt="Florentina" />
                <h1 style={{ textAling: 'center', color: 'white' }}>FLORENTINA</h1>

            </div>
            <div>
                <ul>

                    <a href="/">Home</a>&nbsp;

                    <a href="/modelos">Modelos</a>&nbsp;

                    <a href="/clientes">Clientes</a>&nbsp;

                    <a href="/contratos">Contratos</a>&nbsp;

                    <a href="/eventos">Eventos</a>&nbsp;

                    <a href="/pagamentos">Pagamentos</a>&nbsp;

                    <a href="/funcionarios">Funcionários</a>&nbsp;

                </ul>
            </div>


        </nav>

    );

}



export default Menu;
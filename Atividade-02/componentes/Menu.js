import "../app/css/menu.css";

function Menu() {

    return (

        <nav>

            <div>
                <h1>Venha conhecer nossa Florentina!</h1>
                <img src="/Rosa.webp" alt ="LaçoRosa"/>
            </div>
            <div>
                <ul>

                    <a href="/">Home</a>&nbsp;

                    <a href="/modelos">Modelos</a>&nbsp;

                    <a href="/clientes">Clientes</a>&nbsp;

                    <a href="/contratos">Contratos</a>&nbsp;

                    <a href="/eventos">Eventos</a>&nbsp;

                    <a href="/pagamentos">Pagamentos</a>&nbsp;

                </ul>
            </div>


        </nav>

    );

}



export default Menu;
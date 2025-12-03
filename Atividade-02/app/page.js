import "./css/home.css"
function Home() {

  return (

    <div className="div-main">

      <h1 style={{ color: 'black', textAlign: 'center' }}>FLORENTINA</h1>

      <p style={style}>Bem-vindo à FLORENTINA — onde sua história no mundo da moda começa.</p>


      <p style={style}>
        A FLORENTINA é uma agência de modelos criada para descobrir, valorizar e impulsionar novos talentos. Nosso site foi desenvolvido para ser o seu primeiro passo em direção às passarelas, editoriais e campanhas que você sempre sonhou em conquistar. Se você sempre imaginou se ver em grandes produções, construir uma carreira autêntica e encontrar uma agência que acredita no seu potencial, este é o seu momento.
        A FLORENTINA está em busca de novos rostos — e o próximo pode ser você. </p>

      <p style={style}>FLORENTINA — seu brilho merece ser descoberto.</p>

    </div>

  );

}

const style = {

  padding: '10px',
  color: 'black'
};

export default Home;
import "./css/home.css"
function Home() {

    return (
  
      <div className="div-main">
  
        <h1 style={{color: 'pink', textAlign: 'center'}}>FLORENTINA</h1>
  
        <p style={style}> Este é um exemplo de página inicial.</p>
  
      </div>
  
    );
  
  }
  
  const style ={
    border: '0.5px solid  pink',
    padding: '10px',
    color: 'pink'
  };
  
  export default Home;
import image from './image.png';
import './App.css';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <h1>Bootstrap</h1><img src={image} width="300px" alt="logo" /><br></br>
        <form onSubmit={contarVocales}>
          <h6>Ingrese una frase: <span class="badge bg-secondary">New</span></h6><input class="valores" type="text" name="valor1" />
          <br></br><br></br>
          <button type="submit" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Clic aqui!">Contar vocales</button>
        </form>
      </header>
    </div>
  );
}

function contarVocales(frase) {
  let vocales = 'aeiouAEIOU';
  let contadorVocales = 0;

  for(let i = 0; i < frase.length; ++i) {
    if (vocales.indexOf(frase[i]) !== -1) {
      ++contadorVocales
    }
  }
  alert(`Tiene ${contadorVocales} vocales`)
  return contadorVocales;
}

export default App;

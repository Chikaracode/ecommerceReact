import './App.css';
import ItemList from './components/IntemList/ItemList';
import Navbar from './components/Navbar/Navbar';



function App() {

  let saludo = 'Hola!'
  let bienve = 'Bienvenidos a Chikuma Import!'

  return (
    <div className="App">
      <Navbar />
      <ItemList saludo={saludo} bienve={bienve}/> 
      

    </div>
  );
}

export default App;

import React, {FC, useState} from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './data/Pizza';
import DisplayPizzas from './components/DisplayPizzas';


const App: FC = () =>{

const [pizzasList, setPizzasList] = useState<Pizza[]>([])

const addPizza = (newPizza: Pizza) => {
  setPizzasList([...pizzasList, newPizza])
}

  return (
    <div className="App">
      <div className="wrap">
         <span className='heading'>Pizza house</span>
         <AddPizzaForm addPizza={addPizza}/>
         <DisplayPizzas
         pizzasList={pizzasList}/>
      </div>
    </div>
  );
}

export default App;


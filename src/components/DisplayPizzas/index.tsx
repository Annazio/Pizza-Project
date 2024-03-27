import React, {FC} from "react"
import Pizza from "../../data/Pizza"
import SinglePizza from "../SinglePizza";


interface DisplayPizzasProps {
    pizzasList: Pizza[];
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList}) => {
    return(
        <div className="container">
            {pizzasList.map((pizza) => {
                return <SinglePizza key={pizza.id} pizza={pizza}/>
            })}
        </div>
    )
}

export default DisplayPizzas;

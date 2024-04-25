import { useState } from "react";

function FruitList(){

    const [fruits, setFruits] = useState(["Apple", "Banana", "Peach"]);

    function handleAddFruit(){
        const newFruit = document.getElementById("newFruit").value;
        document.getElementById("newFruit").value = "";

        setFruits(f => [...f, newFruit]);
    }

    function handleRemoveFruit(index){
        setFruits(fruits.filter((element, i) => i !== index));
    }

    return( <>
                <div>
                    {fruits.map((fruit, index) => <li key={index} onClick={() => handleRemoveFruit(index)}> {fruit}</li>)}
                    <input type="text" id="newFruit"/>
                    <button type="submit" onClick={handleAddFruit}>Add Fruit</button>
                </div>
            </>)
}

export default FruitList;
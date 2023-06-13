import { useEffect, useState } from "react";
import "./App.css";
import Card from "./card/Card";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
    {data.map((el, i) => {
      return <Card key={i} superH={el.superHost} photo={el.photo} title={el.title} type={el.type} beds={el.beds} rating={el.rating}/>
      })}
    {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
      {/* {data.map((el, i) => {
        return <h1 key={i}>{el.city}</h1>
      })} */}
    </>
  );
}

export default App;

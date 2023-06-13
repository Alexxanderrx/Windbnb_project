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
  // console.log(data);
  return (
    <body>
      <div id="fondo">
        <section className="menu_00">
          <div id="logo_img">
            <img src="./logo.png" alt="imagen_logo"></img>
          </div>
          <div id="search_box">
            <div className="search_guest_00">
              Helsinki,Finland
            </div>
            <div className="search_guest_01">
              Add guests
            </div>
            <div id="search_icon">
              <span class="material-symbols-outlined">
                search
              </span>
            </div>
          </div>

        </section>
        <section className="menu_01">
          <h2>Stays in Finland</h2>
          <p>12+ stays</p>
        </section>
        <section id="cards">
          {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
          {data.map((el, i) => {
            return <Card key={i} superH={el.superHost} photo={el.photo} title={el.title} type={el.type} beds={el.beds} rating={el.rating} />
          })}
        </section>
      </div>

    </body>
  );
}

export default App;

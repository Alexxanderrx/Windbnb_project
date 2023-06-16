import { useEffect, useState } from "react";
import "./App.css";
import Card from "./card/Card";
import Locals from "./locals/Locals";
import Addlocal from "./AddLocal";

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
  const [openMenu, setOpenMenu] = useState(true);
  const handleClick = () => {
    setOpenMenu(!openMenu)
  }
  const CLASSNAME = `menu_fondo_b ${openMenu ? 'open' : ''}`


  // const [lista, setLista] = useState(data);

  // function buscarLocation(e) {

  //   let inputValue = e.target.value.toLowerCase();
  //   //fitered fue cambiada de const a let
  //   let fitered = data.filter((el) => {
  //     return el.city.toLowerCase().includes(inputValue);
  //   })

  //   inputValue === "" ? fitered = [] : fitered;

  //   console.log(fitered);
  //   setLista(fitered);
  // }

  const [inputLoc, setInputLoc] = useState("")

  const inputLocCambio = event =>
    setInputLoc(event.target.value)

  const btnWrite = (write) => {
    // event.preventDefault();
    setInputLoc(write)
  }

  const [countAdult, setCountAdult] = useState(0)
  const sumaA = (event) => {
    event.preventDefault();
    setCountAdult((countAdult) => countAdult + 1);
  }
  const restaA = (event) => {
    event.preventDefault();
    countAdult > 0 ? setCountAdult((countAdult) => countAdult - 1) : setCountAdult;
  }

  const [countChild, setCountChild] = useState(0)
  const sumaC = (event) => {
    event.preventDefault();
    setCountChild((countChild) => countChild + 1);
  }
  const restaC = (event) => {
    event.preventDefault();
    countChild > 0 ? setCountChild((countChild) => countChild - 1) : setCountChild;
  }

  const [inputGue, setinputGue] = useState("")

  const inputGueCambio = event =>
    setinputGue(event.target.value)

  // const btnWriteg = (write) => {
  //   // event.preventDefault();
  //   setinputGue(write)
  // }

  useEffect(() => {
    setinputGue(countAdult + countChild)
    // console.log("ppepe")
  }, [countAdult, countChild])

  return (
    <form id="form_fondo">
      <section className={CLASSNAME}>
        <div id="menu_fondo_w">

          <div id="span_bar">
            <span className="span_title">LOCATION</span>
            <span className="span_title">GUEST</span>
          </div>

          <div id="menu_bar">
            <div className="menu_input">
              {/* input location */}

              {/* <quitado el onKeyup={buscarLocation}/> */}
              <input type="text" id="location" className="input_m" name="location" placeholder="Add Location" onChange={inputLocCambio} value={inputLoc}></input>

              {/* <Addlocal onKey={buscarLocation}/> */}

            </div>
            <div className="menu_input">
              {/* input guest */}
              <input type="text" id="guest" className="input_m" name="location" placeholder="Add guest" onChange={inputGueCambio} value={inputGue}></input>
            </div>
            <div id="menu_search">

              <div id="btn_orange" type="button" onClick={handleClick}><span className="material-symbols-outlined" id="glass">
                search
              </span>Search</div>
            </div>
          </div>

          <div id="locInv">
            <div id="locales_00">

              <div type="button" className="locales_01" onClick={() => btnWrite("Helsinki" + ", " + "Finland")} >
                <span className="material-symbols-outlined">
                  location_on
                </span>
                <span className="loc">Helsinki</span>,
                <span className="loc">Finland</span>
              </div>
              <div type="button" className="locales_01" onClick={() => btnWrite("Turku" + ", " + "Finland")} >
                <span className="material-symbols-outlined">
                  location_on
                </span>
                <span className="loc">Turku</span>,
                <span className="loc">Finland</span>
              </div>
              <div type="button" className="locales_01" onClick={() => btnWrite("Oulu" + ", " + "Finland")} >
                <span className="material-symbols-outlined">
                  location_on
                </span>
                <span className="loc">Oulu</span>,
                <span className="loc">Finland</span>
              </div>
              <div type="button" className="locales_01" onClick={() => btnWrite("Vaasa" + ", " + "Finland")}>
                <span className="material-symbols-outlined">
                  location_on
                </span>
                <span className="loc">Vaasa</span>,
                <span className="loc">Finland</span>
                {/* <span className="loc">{locales.rating}</span>
                <span className="material-symbols-outlined align-middle" style={{ color: "rgb(235, 87, 87)", fontSize: "10px" }}>
                  star
                </span> */}
              </div>

              {/* {data.map((lo, j) => {
                  return <Locals key={j} ciudad={lo.city} pais={lo.country}/>
                })} */}

              {/* {
                lista.length === 0 ? <p>No locations found.</p> :

                  lista.map((lo, j) => {
                    return <Locals key={j} ciudad={lo.city} pais={lo.country} rating={lo.rating} />
                  })

              } */}

            </div>

            <div id="guest_box">

              <div className="guest_box_c">
                <span className="guest_ti">Adults</span>
                <span className="guest_subti">Ages 13 or above</span>
                <div className="menmas">
                  <button className="btn_menmas" onClick={restaA}>-</button>
                  <span>{countAdult}</span>
                  <button className="btn_menmas" onClick={sumaA}>+</button>
                </div>
              </div>

              <div className="guest_box_c">
                <span className="guest_ti">Children</span>
                <span className="guest_subti">Ages 2-12</span>
                <div className="menmas">
                  <button className="btn_menmas" onClick={restaC}>-</button>
                  <span>{countChild}</span>
                  <button className="btn_menmas" onClick={sumaC}>+</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <div id="fondo">

        <section className="menu_00">
          <div id="logo_img">
            <img src="./logo.png" alt="imagen_logo" style={{ width: "100%" }}></img>
          </div>

          <button id="search_box" type="button" onClick={handleClick}>
            <div className="search_guest_01">
              Add location
            </div>
            <div className="search_guest_01">
              Add guests
            </div>
            <div id="search_icon">
              <span className="material-symbols-outlined">
                search
              </span>
            </div>
          </button>

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

    </form>
  );
}

export default App;

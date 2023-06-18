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
    // buscarLocation();
  }, []);
  // Puedes ver la variable data en consola.
  // console.log(data);
  const [openMenu, setOpenMenu] = useState(true);
  const handleClick = () => {
    setOpenMenu(!openMenu)
  }
  const CLASSBLACK = `menu_fondo_b ${openMenu ? 'open' : ''}`
  const CLASSWHITE = `menu_fondo_w ${openMenu ? 'open_w' : ''}`

  const [inputLoc, setInputLoc] = useState("")
  // console.log(inputLoc);
  const inputLocCambio = event =>
    setInputLoc(event.target.value)

  const btnWrite = (write) => {
    // console.log(inputLoc);
    setInputLoc(write)
  }

  // ----------para abrir los mini menu de los menus ----------
  const [openMiniLoc, setOpenMiniLoc] = useState(true);
  const [openMiniGue, setOpenMiniGue] = useState(true);
  function openCloseLoc() {
    openMiniGue == false ? setOpenMiniLoc(!openMiniLoc) & setOpenMiniGue(!openMiniGue) : setOpenMiniLoc(!openMiniLoc);
    openMiniLoc == true ? setOpenMiniLoc(!openMiniLoc) : setOpenMiniLoc(openMiniLoc);
  }
  function openCloseGue() {
    openMiniLoc == false ? setOpenMiniGue(!openMiniGue) & setOpenMiniLoc(!openMiniLoc) : setOpenMiniGue(!openMiniGue);
    openMiniGue == true ? setOpenMiniGue(!openMiniGue) : setOpenMiniGue(openMiniGue);
  }
  function btnSearch() {
    handleClick();
    openMiniLoc == false ? setOpenMiniLoc(!openMiniLoc) : setOpenMiniLoc(openMiniLoc);
    openMiniGue == false ? setOpenMiniGue(!openMiniGue) : setOpenMiniGue(openMiniGue);

    buscarLocation();
    //verlas variables
    // console.log(inputLoc);
    // console.log(inputGue);
  }

  const [lista, setLista] = useState([]);
  // et inputValueL = inputLoc.toLowerCase();

  function buscarLocation() {
    // console.log("buscarLocation funcionando");
    let inputValueL = inputLoc.toLowerCase();
    let inputValueG = inputGue;

    //fitered fue cambiada de const a let
    let filtered = data.filter((el) => {
      return (el.city.toLowerCase() + ", " + el.country.toLowerCase()).includes(inputValueL);
    })

    let superFiltered = filtered.filter((el) => {
      return (el.maxGuests >= inputValueG);
      // el.maxGuests.includes(inputValueG)
    })

    // console.log(inputValueL);
    inputValueL == null ? superFiltered = data : superFiltered;
    // console.log(superFiltered.length == 0);
    (superFiltered.length == 0) == true ? superFiltered = [{
      "rating": 0,
      "type": "NO RESULTS FOUND",
      "photo": "https://www.pinwheel.us/assets/img/pages/no-results.png"
    },] : superFiltered;
    setLista(superFiltered);
  }
  // console.log(lista);

  const CLASSLOC = `locales_00 ${openMiniLoc ? '' : 'hola'}`
  const CLASSGUEST = `guest_box ${openMiniGue ? '' : 'hola'}`
  // --------------- ------------
  // botones + y -
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

  const inputGueCambio = event => {
    setinputGue(event.target.value)
  }

  useEffect(() => {
    setinputGue(countAdult + countChild)
    // console.log("funciona pe")
  }, [countAdult, countChild])

  // function showLista() {lista.map((el, i) => {
  //   return <Card key={i} superH={el.superHost} photo={el.photo} title={el.title} type={el.type} beds={el.beds} rating={el.rating} maxGuests={el.maxGuests} />
  // })}


  return (
    <form id="form_fondo">
      <div className={CLASSWHITE}>

        <div id="span_bar">
          <span className="span_title">LOCATION</span>
          <span className="span_title">GUEST</span>
        </div>

        <div id="menu_bar">
          <div className="menu_input">
            {/* input location */}
            <input type="text" id="location" className="input_m" name="location" placeholder="Add Location" onChange={inputLocCambio} value={inputLoc} onClick={openCloseLoc} autoComplete="off"></input>

          </div>
          <div className="menu_input">
            {/* input guest */}
            <input type="text" id="guest" className="input_m" name="location" placeholder="Add guest" onChange={inputGueCambio} value={inputGue} onClick={openCloseGue} autoComplete="off"></input>
          </div>
          <div id="menu_search">

            <div id="btn_orange" type="button" onClick={btnSearch}>
              <span className="material-symbols-outlined" id="glass">
                search
              </span>
              Search
            </div>
          </div>
        </div>

        <div id="locInv">

          <div className={CLASSLOC}>

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
            </div>
          </div>

          <div className={CLASSGUEST}>

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
      <section className={CLASSBLACK} onClick={handleClick}>
      </section>
      {/* </section> */}
      <div id="fondo">

        <section className="menu_00">
          <div id="logo_img">
            <img src="./logo.png" alt="imagen_logo" style={{ width: "100%" }}></img>
          </div>

          <button id="search_box" type="button" onClick={handleClick}>
            <div className="search_guest_01">
              {
                inputLoc == "" ? "Add location" : inputLoc
              }
            </div>
            <div className="search_guest_01">
              {
                inputGue == 0 ? "Add guests" : inputGue
              }
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

          {/* {console.log(lista)} */}

          {((lista.length == 0) ? data : lista).map((el, i) => {
            return <Card key={i} superH={el.superHost} photo={el.photo} title={el.title} type={el.type} beds={el.beds} rating={el.rating} maxGuests={el.maxGuests} />
          })}
        </section>
      </div>
    </form>
  );
}

export default App;

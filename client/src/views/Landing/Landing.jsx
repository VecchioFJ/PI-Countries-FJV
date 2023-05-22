import "./Landing.Module.css";
import { NavLink } from "react-router-dom";
import compass from "../../assets/compass.svg"

const Landing = () => {
    return(
        <div className="container">
            <div className="logoContainer">
                <h2> Explora los paises!</h2>
                <NavLink to={"/home"} >
                    <img src={compass} alt="img landing" className="logo" />
                </NavLink>
            </div>
        </div>
    )
}

export default Landing;

// import poke from "../../assets/PokemonLogo.png";

// function Landing() {
//   return (
//     <div className="container">
//       <NavLink to={"/home"} className="link">
//         <img src={poke} alt="POKÉMON" className="logo" />
//       </NavLink>
//     </div>
//   );
// }

// export default Landing;
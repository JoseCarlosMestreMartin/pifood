import style from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={style.container}>
      <h1>Bienvenido, es un gusto brindarte estas recetas, gracias por dar sabor a la vida</h1>
      
        <Link to="/home" className={style.button}>
          <h1>que rico...¿ Preparado para preparar?</h1>
        </Link>
      
    </div>
  );
};

export default LandingPage;

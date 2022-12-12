import "../../pages/intro/step.css";
import { Link } from "react-router-dom";

export default function Step0() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Startguide</h1>
        <p>
        Kirkegårds historier er et arkiv for livshistorier om dem, der ligger begravet på Åbyhøj Kirkegård.
        </p>
        <div className="buttons1">
          <Link to="/Frontpage">
            <button>Skip</button>
          </Link>
          <Link to="/step1">
            <button id="solid">Næste</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

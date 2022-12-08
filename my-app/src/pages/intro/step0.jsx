import "../../pages/intro/step.css";
import { Link } from "react-router-dom";

export default function Step0() {
  return (
    <div className="bg">
      <div className="box">
        <h1>Start guide</h1>
        <p>
          Kirkegårds historier er en app, hvor Du kan læse historier om dem, som
          ligger begravet på Åbyhøj Kirkegård. Den giver dig også mulighed for
          selv at dele historier, om dem som Du har mistet.
        </p>
        <div className="buttons1">
          <Link to="/Frontpage">
            <button>Skip</button>
          </Link>
          <Link to="/step2">
            <button id="solid">Næste</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

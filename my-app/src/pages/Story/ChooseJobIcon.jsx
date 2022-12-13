// job icons
import book from "../../pics/jobicons/book.svg";
import briefcase from "../../pics/jobicons/briefcase.svg";
import dollar from "../../pics/jobicons/dollar.svg";
import hammer from "../../pics/jobicons/hammer.svg";
import leaf from "../../pics/jobicons/leaf.svg";
import ruler from "../../pics/jobicons/ruler.svg";
import saw from "../../pics/jobicons/saw.svg";
import suit from "../../pics/jobicons/suit.svg";
import node from "../../pics/jobicons/node.svg";
import pencil from "../../pics/jobicons/pencil.svg";

export default function JobIcons() {
    return (
        <div className="jobIconContainer">
            <div className="jobIcons">
                <button><img src={book} alt="Bog" /></button>
                <button><img src={briefcase} alt="Taske" /></button>
                <button><img src={dollar} alt="Penge" /></button>
                <button><img src={hammer} alt="Hammer" /></button>
                <button><img src={leaf} alt="Blade" /></button>
                <button><img src={ruler} alt="lineal" /></button>
                <button><img src={saw} alt="Sav" /></button>
                <button><img src={suit} alt="Jakkesæt" /></button>
                <button><img src={node} alt="Node" /></button>
                <button><img src={pencil} alt="Blyant" /></button>
            </div>
            <button>Tilføj</button>
        </div>
    )
}
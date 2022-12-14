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
import noIcon from "../../pics/jobicons/NoIcon.svg";

import React, {useState} from 'react';

export default function JobIcons() {
    

    return (
        <div className="jobIconContainer">
            <h4>Vælg ikoner som passer til erhvervet</h4>
            <input type="text" name="" id="" />
            <div className="jobIcons">
                <li><input type="checkbox" name="jobIcon" id="jobIconbox1"/><label htmlFor="jobIconbox1"><img src={book} alt="Bog"/></label></li>
                <li><input type="checkbox" name="jobIcon" id="jobIconbox2"/><label htmlFor="jobIconbox2"><img src={briefcase} alt="Taske"/></label></li>
                <li><input type="checkbox" name="jobIcon" id="jobIconbox3"/><label htmlFor="jobIconbox3"><img src={dollar} alt="Penge"/></label></li>
                <li><input type="checkbox" name="jobIcon" id="jobIconbox4"/><label htmlFor="jobIconbox4"><img src={hammer} alt="Hammer"/></label></li>
                <li><input type="checkbox" name="jobIcon" id="jobIconbox5"/><label htmlFor="jobIconbox5"><img src={leaf} alt="Blade"/></label></li>
                <li><input type="checkbox" name="jobIcon" id="jobIconbox6"/><label htmlFor="jobIconbox6"><img src={ruler} alt="lineal"/></label></li>
                <li><input type="checkbox" name="jobIcon" id="jobIconbox7"/><label htmlFor="jobIconbox7"><img src={saw} alt="Sav"/></label></li>
                <li><input type="checkbox" name="jobIcon" id="jobIconbox8"/><label htmlFor="jobIconbox8"><img src={suit} alt="Jakkesæt"/></label></li>
                <li><input type="checkbox" name="jobIcon" id="jobIconbox9"/><label htmlFor="jobIconbox9"><img src={node} alt="Node"/></label></li>
                <li><input type="checkbox" name="jobIcon" id="jobIconbox10"/><label htmlFor="jobIconbox10"><img src={pencil} alt="Blyant"/></label></li>
                <li><input type="checkbox" name="jobIcon" id="jobIconbox11"/><label htmlFor="jobIconbox11"><img src={noIcon} alt="Intet valg"/></label></li>
            </div>
        </div>
    )
}
import { NavLink, useLocation } from "react-router-dom";

export default function HistoryPrivate() {

    const location = useLocation();
    const { state } = location;

    return (
        <section className="StoriesBox">
            <div className="StoryBox">
                <h2>{state.name}</h2> 
                <h3><img src={state.bornImg} alt="Stjerne"/> {state.born} <img src={state.deadImg} alt="Kors"/> {state.dead}</h3>
                <div id="StoryBoxImg"><img src={state.imageUrl} alt="title" /></div>
                
                <div className="showMoreContent">
                    <p id="work"> {state.work} </p>
                    <p id="graveId"> {state.graveId} </p>
                    {/* <p>Indsendt: {createdAt.toDate().toDateString()}</p> */}
                    <h4 id="story">{state.story}</h4>
                </div>
            </div>
        </section>
    )
}
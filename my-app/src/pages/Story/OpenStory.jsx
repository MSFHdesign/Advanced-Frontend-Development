import { useLocation } from "react-router-dom";

export default function HistoryPrivate() {

    const location = useLocation();
    const { state } = location;

    console.log(state.imageUrl)
    
    return (
        <section className="StoriesBox" id="StoriesBoxOpen">
          
            <div className="StoryBox">
                <h2>{state.name}</h2> 
                <h3><img src={state.bornImg} alt="Stjerne"/> {state.born} <img src={state.deadImg} alt="Kors"/> {state.dead}</h3>
           
                <div id="StoryBoxImg">
                {!state.img ? "" : <img src={state.img} alt="title" /> } 
                </div>

                <div className="showMoreContent" id="showMoreContent">
                    <p id="work"> {state.jobName} </p>
                    <div className={state.jobIcon} />
                    <p id="graveId">Gravnummer: {state.graveId} </p>
                    
                </div>
                <h4 id="story allStory">{state.story}</h4>
            </div>
        </section>
    )
    
}
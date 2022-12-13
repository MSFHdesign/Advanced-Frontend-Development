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
<<<<<<< HEAD
                <div id="StoryBoxImg"><img src={state.img} alt="title" /></div>
=======
                <div id="StoryBoxImg"><img src={state.imageUrl} alt={state.name} /></div>
>>>>>>> f846cb8dfc284922e526bf17160db21635d8db03
                
                <div id="StoryBoxImg">
                 
                </div>

                <div className="showMoreContent" id="showMoreContent">
                    <p id="work"> {state.work} </p>
                    <p id="graveId">Gravnummer: {state.graveId} </p>
                    {/* <p>Indsendt: {createdAt.toDate().toDateString()}</p> */}
                </div>
                <h4 id="story allStory">{state.story}</h4>
            </div>
        </section>
    )
    
}
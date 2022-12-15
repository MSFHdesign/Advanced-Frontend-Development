import { useLocation } from "react-router-dom";
import Backbtn from "../../components/backbtn/backbtn";
export default function HistoryPrivate() {
  const location = useLocation();
  const { state } = location;

  console.log(state.imageUrl);

  return (
    <div id="start">
      <section className="StoriesBox" id="StoriesBoxOpen">
        <Backbtn />
        <div className="StoryBox">
          <h2>
            {state.name} {state.lastname}{" "}
          </h2>
          <h3>
            <img src={state.bornImg} alt="Stjerne" /> {state.born}{" "}
            <img src={state.deadImg} alt="Kors" /> {state.dead}
          </h3>

          <div id="StoryBoxImg">
            {!state.img ? "" : <img src={state.img} alt="title" />}
          </div>

          <div className="showMoreContent" id="showMoreContent">
            <p id="work"> {state.jobName} </p>
            <div className={state.jobIcon} />
            <p id="graveId">
              <span id="bolded">Gravnummer:</span> {state.graveId}{" "}
            </p>
          </div>
          <h4 id="story allStory">{state.story}</h4>
        </div>
      </section>
    </div>
  );
}

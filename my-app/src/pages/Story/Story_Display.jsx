import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { NavLink, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { db } from "../../firebaseConfig";
import stjerne from '../../pics/shapes/stjerne.svg'
import kors from '../../pics/shapes/kors.svg'

export default function Articles() {
  const [Articles, SetArticles] = useState([]);
  const [search, setSearch]= useState("");

  // Søge funktion 
  const SearchStory=(e)=> {
    e.preventDefault()
    SetArticles(Articles.filter((Articles) =>
    //Filters 
    Articles.name.toLowerCase().includes(search.toLowerCase())
    ))
}
  const reset=(e) => {
    e.preventDefault()
    SetArticles(Articles.filter)
  }


  useEffect(() => {
    const articleRef = collection(db, "Historier");
    const q = query(articleRef, orderBy("graveId"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      SetArticles(articles);
      console.log(articles);
    });
  }, []);

  return (
    <div className="historie">
      <form onSubmit={(e)=>{SearchStory(e)}}>
       
       <input onChange={(e) =>{setSearch(e.target.value)}}/>
       <button type="submit"> Søg </button>
       <button type="reset" onClick={reset}> reset </button>
  
      </form>

  
      {Articles.length === 0 ? (
        <p>Henter historier...</p>
      ) : (
        Articles.map(({ id, name, born, dead, story, imageUrl, createdAt, job, graveId, }) => (
          <div className="StoriesBox" key={id}>
          
            <div className="StoryBox">
              <h2>{name}</h2> 
              <h3><img src={stjerne} alt="Stjerne"/> {born} <img src={kors} alt="Kors"/> {dead}</h3>
              <div id="StoryBoxImg"><img src={imageUrl} alt="title" /></div>
              
              <div className="showMoreContent">
                <p id="work"> {job} </p>
                <p id="graveId"> {graveId} </p>
                {/* <p>Indsendt: {createdAt.toDate().toDateString()}</p> */}
                <h4 id="story">{story}</h4>
              </div>
              <NavLink
                to={{pathname:'/HistoryPrivate'}}
                state={{
                  name: name,
                  bornImg: stjerne,
                  born: born,
                  deadImg: kors,
                  dead: dead,
                  img: imageUrl,
                  work: job,
                  graveId: graveId,
                  story: story
                }}
              >
                <button>
                  Vis historien
                </button>
              </NavLink>

              {/* what is dis?? */}
              {/* <div className={!imageUrl ? "noimg" : "img"}> </div> */}
              </div>
          </div>
        ))
      )}
    </div>
  );
}

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";


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
              <h3> <img src="./pics/shapes/stjerne.png" alt="" /> {born} Død: {dead}</h3>
              <img src={imageUrl} alt="title" />
              <p> {job} </p>
              <p> {graveId} </p>
              {/* <p>Indsendt: {createdAt.toDate().toDateString()}</p> */}
            
              <h4>{story}</h4>


              <div className={!imageUrl ? "noimg" : "img"}>

              </div>
              </div>
          </div>
        ))
      )}
    </div>
  );
}

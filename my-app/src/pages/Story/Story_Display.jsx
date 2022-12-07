import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";


export default function Articles() {
  const [Articles, SetArticles] = useState([]);
  useEffect(() => {
    const articleRef = collection(db, "Historier");
    const q = query(articleRef, orderBy("createdAt"));
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
      {Articles.length === 0 ? (
        <p>Henter historier</p>
      ) : (
        Articles.map(({ id, name, born, dead, story, imageUrl, createdAt, job }) => (
          <div className="StoriesBox" key={id}>
          
            <div className="StoryBox">

                <img src={imageUrl} alt="title" />
              <h2>{name}</h2>
              <h3> født: {born} død: {dead}</h3>
              <p>indsendt: {createdAt.toDate().toDateString()}</p>
              <p> {job} </p>
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

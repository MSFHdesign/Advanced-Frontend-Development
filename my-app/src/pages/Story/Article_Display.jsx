import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";

import { db } from "../../firebaseConfig";


export default function Artikler() {
  const [Artikler, SetArtikler] = useState([]);



  useEffect(() => {
    const articleRef = collection(db, "Artikler");
    const q = query(articleRef, orderBy("Navn"));
    onSnapshot(q, (snapshot) => {
      const Artikler = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      SetArtikler(Artikler);
      console.log(Artikler);
    });
  }, []);

  return (
    <div className="historie">

      {Artikler.length === 0 ? (
        <p> Nothing to see, yet....</p>
        ) : (
        Artikler.map(({ Navn, id }) => (
          <div className="StoriesBox" key={id}>
          
            <div className="StoryBox">


              <h2>{Navn}</h2> 
            
              </div>
          </div>
        ))
        )}

    </div>
  );
}

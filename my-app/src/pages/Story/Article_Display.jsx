import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../../firebaseConfig";
import stjerne from "../../pics/shapes/stjerne.svg";
import kors from "../../pics/shapes/kors.svg";


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
        Artikler.map(({ Navn, id, born, dead, story, GraveId }) => (
          <div className="StoriesBox" key={id}>
          
            <div className="StoryBox">


              <h2>{Navn}</h2> 
              <img src={stjerne} alt="Stjerne" /> {born}{" "}
                  <img src={kors} alt="Kors" /> {dead}
              </div>

              <NavLink
                  className="showArticleBtn"
                  to={{ pathname: `/qr/${Navn}` }}
                  state={{
                    name: Navn,
                    bornImg: stjerne,
                    born: born,
                    deadImg: kors,
                    dead: dead,
                    story: story,
                    GraveId: GraveId
               
                  }} >
                  <button>Vis historien</button>
                </NavLink>
          </div>
        ))
        )}

    </div>
  );
}

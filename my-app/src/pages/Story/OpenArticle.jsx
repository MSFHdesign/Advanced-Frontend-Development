import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import stjerne from "../../pics/shapes/stjerne.svg";
import kors from "../../pics/shapes/kors.svg";

export default function HistoryPrivate() {
 
  const [Artikler, SetArtikler] = useState([]);
  const filter = sessionStorage.QrNavn;


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
        Artikler.map(({ Navn, id, born, dead, story, graveId }) =>
          id === filter ? (
            <div className="StoriesBox" key={id}>
              <div className="StoryBox">
                <h2>{Navn}</h2>
                <img src={stjerne} alt="Stjerne" /> {born}{" "}
                <img src={kors} alt="Kors" /> {dead}
              </div>
            </div>
          ) : (
            <p> </p>
          )
        )
      )}
    </div>
  );
}

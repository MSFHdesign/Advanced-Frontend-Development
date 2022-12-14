import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import stjerne from "../../pics/shapes/stjerne.svg";
import kors from "../../pics/shapes/kors.svg";
import Ingenioer from "../../pics/jobicons/ruler.svg";

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
        Artikler.map(
          ({ Navn, id, born, dead, resume, lifestory, job, url, GraveId }) =>
            id === filter ? (
              <div className="StoriesBox" key={id}>
                <div className="StoryBox">
                  <h2>{Navn}</h2>
                  <img src={stjerne} alt="Stjerne" /> {born}{" "}
                  <img src={kors} alt="Kors" /> {dead}
                  <img src={url}/> <br/>
                  <div className={job}/>
                  <img src={{job}} alt={job} width='100px' height='100px'/>
                  <h1>Resume</h1>
                  <p>{resume}</p>
                  <h1>Livs historie</h1>
                  <p>{lifestory}</p>
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

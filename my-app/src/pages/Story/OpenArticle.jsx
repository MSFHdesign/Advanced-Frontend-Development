import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import stjerne from "../../pics/shapes/stjerne.svg";
import kors from "../../pics/shapes/kors.svg";
import "../../pages/Story/OpenArticle.css";

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
          ({
            Navn,
            id,
            born,
            dead,
            resume,
            lifestory,
            job,
            url,
            Icon,
            GraveId,
          }) =>
            id === filter ? (
              <div className="StoriesBox" id="StoriesBox" key={id}>
                <div className="StoryBox" id="StoryBox">
                  <h2>{Navn}</h2>
                  <h3>
                    <img src={stjerne} alt="Stjerne" /> {born}{" "}
                    <img src={kors} alt="Kors" /> {dead}
                  </h3>
                  <div id="StoryBoxImg">
                    <img src={url} />
                  </div>
                  <div className={Icon} />
                  <p id="job">{job}</p>
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

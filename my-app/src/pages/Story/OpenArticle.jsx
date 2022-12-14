import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import stjerne from "../../pics/shapes/stjerne.svg";
import kors from "../../pics/shapes/kors.svg";

export default function HistoryPrivate() {
  const [search, setSearch] = useState("");
  const [Artikler, SetArtikler] = useState([]);
  const filter = sessionStorage.QrNavn;

  const SearchStory = (e) => {
    e.preventDefault();
    SetArtikler(
      Artikler.filter((Articles) =>
        //Filters
        Artikler.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

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
      console.log(Artikler.id);
    });
  }, []);

  return (
    <div className="historie">
      {Artikler.length === 0 ? (
        <p> Nothing to see, yet....</p>
      ) : Artikler.id == filter ? (
        <p> This person does not exsist</p>
      ) : (
        Artikler.map(({ Navn, id, born, dead, story, graveId }) => (
          <div className="StoriesBox" key={id}>
            <div className="StoryBox">
              <h2>{Navn}</h2>
              <img src={stjerne} alt="Stjerne" /> {born}{" "}
              <img src={kors} alt="Kors" /> {dead}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

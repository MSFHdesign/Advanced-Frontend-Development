import {
  collection,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../../firebaseConfig";
import stjerne from "../../pics/shapes/stjerne.svg";
import kors from "../../pics/shapes/kors.svg";
import { NavHashLink } from "react-router-hash-link";

export default function Articles() {
  const [Articles, SetArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState("Historier hentes...");
  // Søge funktion

  const SearchStory = (e) => {
    e.preventDefault();
    setLoading("Intet at vise");
    SetArticles(
      Articles.filter(
        (Articles) =>
          //Filters
          Articles.name.toLowerCase().includes(search.toLowerCase()) ||
          Articles.dead.toString().includes(search.toString()) ||
          Articles.born.toString().includes(search.toString()) ||
          Articles.graveId.toString().includes(search.toString())
      )
    );
  };

  useEffect(() => {
    const articleRef = collection(db, "Historier");
    const q = query(articleRef, orderBy("createdAt", "desc"), limit(50));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      SetArticles(articles);
      console.log(articles);
    });
  }, [search]);

  return (
    <div className="historie">
      <h1>Livshistorier</h1>
      <form
        className="searchContainer"
        onSubmit={(e) => {
          SearchStory(e);
        }}
      >
        <div id="searchButtons">
          <input
            placeholder="Søg på navn"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />{" "}
          <button type="submit"> Søg </button>
        </div>
      </form>

      {Articles.length === 0 ? (
        <p>{loading}</p>
      ) : (
        Articles.map(
          ({
            id,
            name,
            born,
            dead,
            story,
            imageUrl,
            lastname,
            job,
            graveId,
            jobIcon,
            jobName,
          }) => (
            <div className="StoriesBox" key={id}>
              <div className="StoryBox">
                <h2>
                  {name} {lastname}
                </h2>
                <h3>
                  <img src={stjerne} alt="Stjerne" /> {born}{" "}
                  <img src={kors} alt="Kors" /> {dead}
                </h3>
                <div id="StoryBoxImg">
                  {!imageUrl ? "" : <img src={imageUrl} alt="title" />}
                </div>

                <div className="showMoreContentHidden">
                  <p id="work"> {job} </p>
                  <p id="graveId">Gravnummer: {graveId} </p>
                  {/* <p>Indsendt: {createdAt.toDate().toDateString()}</p> */}
                </div>
                <h4 id="story">{story}</h4>

                <NavHashLink
                  className="showHistoryBtn"
                  to={`/Livshistorie/${name}#start`}
                  state={{
                    jobIcon: jobIcon,
                    jobName: jobName,
                    name: name,
                    bornImg: stjerne,
                    born: born,
                    deadImg: kors,
                    dead: dead,
                    img: imageUrl,
                    graveId: graveId,
                    story: story,
                    lastname: lastname,
                  }}
                >
                  <button>Vis historien</button>
                </NavHashLink>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}

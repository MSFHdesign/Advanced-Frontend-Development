import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../../firebaseConfig";
import { toast } from "react-toastify";



export default function AddArticle() {
  // form clear after submit
    const [formData, setFormData] = useState({
    name: "",
    story: "",
    born: "",
    dead: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
    job: "",
    gravId: "",
    ErhvervLogo:"",
  });

  //progress state
  const [progress, setProgress] = useState(0);

  // Change aint no thiiing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  // Pictures can be rocking
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
// sending da' shizzle out
  const handlePublish = () => {
    if (!formData.name || !formData.story || !formData.job || !formData.graveId ) {
      alert("Alle felter skal udfyldes");
      return;
    }

    const storageRef = ref(storage, `/images/${formData.image.name}`);

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          name: "",
          story: "",
          image: "",
          born: "",
          dead: "",
          job: "",
          graveId: "",
          ErhvervLogo:"",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Historier");
          console.log(formData.image);
          if (formData.image === "") {
            addDoc(articleRef, {
                /*  Hvis der er ikke billede */
              name: formData.name,
              story: formData.story,
              createdAt: Timestamp.now().toDate(),
              born: formData.born,
              dead: formData.dead,
              job: formData.job,  
              graveId: formData.graveId,
              ErhvervLogo: formData.ErhvervLogo,


            })
              .then(() => {
                toast("Dit opslag er postet", { type: "success" });
                setProgress(0);
              })
              .catch((err) => {
                toast("Der er sket en fejl!", { type: "error" });
              });
          } else {
            addDoc(articleRef, {
                /*  Hvis der er billede */
                
                name: formData.name,
                story: formData.story,
                imageUrl: url,
                createdAt: Timestamp.now().toDate(),
                born: formData.born,
                dead: formData.dead,
                job: formData.job,  
                graveId: formData.graveId,
                ErhvervLogo: formData.ErhvervLogo,

            })
              .then(() => {
                toast("Historien er tilføjet med succes", { type: "success" });
                setProgress(0);
              })
              .catch((err) => {
                toast("Error: historien er ikke tilføjet", { type: "error" });
              });
          }
        });
      }
    );
  };
  return (
    <div className="addStoryBox">
      <h2>Tilføj historie</h2>
    {/*Name here */ }
      <label htmlFor="">name</label>
      <input
        type="text"
        name="name"
        className="inputfield"
        value={formData.name}
        onChange={(e) => handleChange(e)}
      />
<br/>
    {/* Born */}
      <label htmlFor="">Født</label>
      <input
        type="date"
        name="born"
        className="inputfield"
        value={formData.born}
        onChange={(e) => handleChange(e)}
      />
<br/>
    {/* Dead */}
      <label htmlFor="">Død</label>
      <input
        type="date"
        name="dead"
        className="inputfield"
        value={formData.dead}
        onChange={(e) => handleChange(e)}
      />


<br/>
      {/* area for telling your story */ }
      <label htmlFor="">story</label>
      <textarea
        name="story"
        className="inputfield"
        value={formData.story}
        onChange={(e) => handleChange(e)}
      />

<br/>
    {/* IMG UPLOAD */ }
      <label htmlFor="">Image</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        className="inputfield"
        onChange={(e) => handleImageChange(e)}
      />

      {progress === 0 ? null : (
        <div className="progess">
          <div
            className="progressBar"
          >
            {`uploader image ${progress}%`}
          </div>
        </div>
      )}

<br/>
    {/* Line of work */}
      <label htmlFor="">Erhverv</label>
      <input
        type="text"
        name="job"
        className="inputfield"
        value={formData.job}
        onChange={(e) => handleChange(e)}
      />
    {/* Grave ID */}
      <label htmlFor="">Grav nummer</label>
      <input
        type="number"
        min="1" max="400"
        name="graveId"
        className="inputfield"
        value={formData.graveId}
        onChange={(e) => handleChange(e)}
      />
      <select value="ErhvervLogo" onChange={(e) => handleChange(e)}>
        <option value=" 1 ">1</option>
        <option value=" 2 ">2</option>
        <option value=" 3 ">3</option>
      </select>


<br/>

      <button className="btn formsubmit" onClick={handlePublish}>
        Færdig
      </button>
    </div>
  );
}

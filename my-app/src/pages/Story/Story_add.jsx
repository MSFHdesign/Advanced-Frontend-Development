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
          born: "",
          dead: "",
          image: "",
          job: "",
          ErhvervLogo:"",
          story: "",
          graveId: "",
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

      <h2>Fortæl historien</h2>

      <div className="nameInput">
        {/*Name here */ }
        {/* <label htmlFor="">Navn</label> */}
        <input
          type="text"
          name="name"
          className="inputfield"
          value={formData.name}
          placeholder="Navn..."
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="bornAndDeadContainer">

        {/* Born */}
        <span className="bornInput">
          <span className="datepicker-toggle-button">Født:</span>
          <input
            type="date"
            name="born"
            id="bornDate"
            value={formData.born}
            placeholder="Født"
            onChange={(e) => handleChange(e)}
            className="datepicker-input"
          />
        </span>

        {/* Dead */}
        <span className="deadInput">
          <span className="datepicker-toggle-button">Død:</span>
          <input
            type="date"
            name="dead"
            id="deadDate"
            className="datepicker-input"
            value={formData.dead}
            onChange={(e) => handleChange(e)}
          />
        </span>
      </div>

      <div className="imgInput">
        {/* IMG UPLOAD */ }
        <input
          type="file"
          name="image"
          accept="image/*"
          id="imgUpload"
          onChange={(e) => handleImageChange(e)}
          hidden
        />
        <label id="addImgContainer" htmlFor="imgUpload">Tilføj billede 
          <svg width="30" height="30" viewBox="0 0 392 392" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M57.315 334.505C-19.105 258.085 -19.105 133.735 57.315 57.315C133.735 -19.105 258.085 -19.105 334.505 57.315C410.925 133.735 410.925 258.085 334.505 334.505C258.085 410.925 133.735 410.925 57.315 334.505V334.505ZM313.285 78.535C248.565 13.815 143.245 13.815 78.525 78.535C13.805 143.255 13.805 248.575 78.525 313.295C143.245 378.015 248.565 378.015 313.285 313.295C378.005 248.575 378.005 143.255 313.285 78.535V78.535Z" fill="#46512C"/>
            <path d="M305.405 180.915H210.905V86.415C210.905 78.135 204.185 71.415 195.905 71.415C187.625 71.415 180.905 78.135 180.905 86.415V180.915H86.405C78.125 180.915 71.405 187.635 71.405 195.915C71.405 204.195 78.125 210.915 86.405 210.915H180.905V305.415C180.905 313.695 187.625 320.415 195.905 320.415C204.185 320.415 210.905 313.695 210.905 305.415V210.915H305.405C313.685 210.915 320.405 204.195 320.405 195.915C320.405 187.635 313.685 180.915 305.405 180.915Z" fill="#46512C"/>
          </svg>
        </label>
        {progress === 0 ? null : (
          <div className="progess">
            <div
              className="progressBar"
            >
              {`uploader image ${progress}%`}
            </div>
          </div>
        )}
      </div>

      <div className="workInput">
        {/* Line of work */}
        {/* <label htmlFor="">Erhverv</label> */}
        <input
          type="text"
          name="job"
          id="workInput"
          value={formData.job}
          placeholder="Erhverv"
          onChange={(e) => handleChange(e)}
          
        />
        <label id="workInputField" htmlFor="workInput">Tilføj erhverv 
          <svg width="30" height="30" viewBox="0 0 392 392" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M57.315 334.505C-19.105 258.085 -19.105 133.735 57.315 57.315C133.735 -19.105 258.085 -19.105 334.505 57.315C410.925 133.735 410.925 258.085 334.505 334.505C258.085 410.925 133.735 410.925 57.315 334.505V334.505ZM313.285 78.535C248.565 13.815 143.245 13.815 78.525 78.535C13.805 143.255 13.805 248.575 78.525 313.295C143.245 378.015 248.565 378.015 313.285 313.295C378.005 248.575 378.005 143.255 313.285 78.535V78.535Z" fill="#46512C"/>
            <path d="M305.405 180.915H210.905V86.415C210.905 78.135 204.185 71.415 195.905 71.415C187.625 71.415 180.905 78.135 180.905 86.415V180.915H86.405C78.125 180.915 71.405 187.635 71.405 195.915C71.405 204.195 78.125 210.915 86.405 210.915H180.905V305.415C180.905 313.695 187.625 320.415 195.905 320.415C204.185 320.415 210.905 313.695 210.905 305.415V210.915H305.405C313.685 210.915 320.405 204.195 320.405 195.915C320.405 187.635 313.685 180.915 305.405 180.915Z" fill="#46512C"/>
          </svg>
        </label>
      </div>

      <div className="historyInput">
        {/* area for telling your story */ }
        {/* <label htmlFor="">story</label> */}
        <textarea
          name="story"
          className="inputfield"
          value={formData.story}
          placeholder="Skriv historien her..."
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="graveIdInput">
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
      </div>

      <div className="submitHistoryBtn">
        <button className="btn formsubmit" onClick={handlePublish}>
          <svg width="30" height="30" viewBox="0 0 392 392" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_233_1995)">
            <path d="M196 0C87.75 0 0 87.75 0 196C0 304.25 87.75 392 196 392C304.25 392 392 304.25 392 196C392 87.75 304.25 0 196 0ZM305.5 211H211V305.5C211 313.78 204.28 320.5 196 320.5C187.72 320.5 181 313.78 181 305.5V211H86.5C78.22 211 71.5 204.28 71.5 196C71.5 187.72 78.22 181 86.5 181H181V86.5C181 78.22 187.72 71.5 196 71.5C204.28 71.5 211 78.22 211 86.5V181H305.5C313.78 181 320.5 187.72 320.5 196C320.5 204.28 313.78 211 305.5 211Z" fill="#46512C"/>
            </g>
            <defs>
            <clipPath id="clip0_233_1995">
            <rect width="392" height="392" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          Tilføj historien
        </button>
      </div>
    </div>
  );
}

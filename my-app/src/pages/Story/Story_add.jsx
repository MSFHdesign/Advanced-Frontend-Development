import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../../firebaseConfig";
// import { toast } from "react-toastify";
import AddedModal from "../../components/introModal/Step1";
import {toast, ToastContainer } from "react-toastify";
import Topnav from "../../components/top-nav/topnav";
//TOAST

import 'react-toastify/dist/ReactToastify.css';



   
 
// job icons
import book from "../../pics/jobicons/book.svg";
import briefcase from "../../pics/jobicons/briefcase.svg";
import dollar from "../../pics/jobicons/dollar.svg";
import hammer from "../../pics/jobicons/hammer.svg";
import leaf from "../../pics/jobicons/leaf.svg";
import ruler from "../../pics/jobicons/ruler.svg";
import saw from "../../pics/jobicons/saw.svg";
import suit from "../../pics/jobicons/suit.svg";
import node from "../../pics/jobicons/node.svg";
import pencil from "../../pics/jobicons/pencil.svg";
import noIcon from "../../pics/jobicons/NoIcon.svg";
import { useNavigate } from "react-router-dom";


export default function AddArticle() {
  const navigatesubmit = useNavigate();

 


  // form clear after submit
  const [formData, setFormData] = useState({
    name: "",
    story: "",
    born: "Født:",
    dead: "Død:",
    image: "",
    createdAt: Timestamp.now().toDate(),
    gravId: "",
    lastname: "",
    jobName: "",
    jobIcon: "",
  });
  const today = new Date();
  let [month, day, year] = [
    today.getMonth() + 1,
    today.getDate(),
    today.getFullYear(),
  ];

  if (month <= 9) month = "0" + month;

  if (day < 10) day = "0" + day;

  let dag = year + "-" + month + "-" + day;


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

  // workstuff radioes
  const [isShown, setIsShown] = useState(false);
  const showWorkIcons = (event) => {
    setIsShown((current) => !current);
  };

  // Manage modal
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  // sending da' shizzle out
  const handlePublish = () => {
    if (
      !formData.name ||
      !formData.born ||
      !formData.dead ||
      !formData.graveId
    ) {
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
          born: "Født:",
          dead: "Død:",
          image: "",
          jobName: "",
          jobIcon: "",
          story: "",
          graveId: "",
          lastname: "",
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
              jobName: formData.jobName,
              jobIcon: formData.jobIcon,
              graveId: formData.graveId,
              lastname: formData.lastname,
            })
              .then(() => {
                toast("Dit opslag er postet", { type: "success" });
                setProgress(0);
                
                 navigatesubmit('/');
                // openModal();
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
              jobName: formData.jobName,
              jobIcon: formData.jobIcon,
              graveId: formData.graveId,
              lastname: formData.lastname,
            })
              .then(() => {
                toast("Historien er tilføjet med succes", { type: "success" });
                navigatesubmit('/');
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
    <section>
      <Topnav />
      <div className="addStoryBox">
        <h2 className="addHistoryHeader">Opret historie</h2>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />

        <div className="nameInput">
          {/*Name here */}
          <input
            type="text"
            name="name"
            className="inputfield"
            value={formData.name}
            placeholder="Navn..."
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="nameInput">
          {/*Lastname here */}
          <input
            type="text"
            name="lastname"
            className="inputfield"
            value={formData.lastname}
            placeholder="Efternavn..."
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="bornAndDeadContainer">
          {/* Born */}
          <span className="bornInput">
            <span className="datepicker-toggle-button">{formData.born}</span>
            <input
              type="date"
              name="born"
              id="bornDate"
              value={formData.born}
              placeholder="Født"
              onChange={(e) => handleChange(e)}
              className="datepicker-input"
              max={dag}
            />
          </span>

          {/* Dead */}
          <span className="deadInput">
            <span className="datepicker-toggle-button">{formData.dead}</span>
            <input
              type="date"
              name="dead"
              id="deadDate"
              className="datepicker-input"
              value={formData.dead}
              onChange={(e) => handleChange(e)}
              min={formData.born}
              max={dag}
            />
          </span>
        </div>

        <div id="imgWorkFlex">
          <button className="imgInput">
            {/* IMG UPLOAD */}
            <input
              type="file"
              name="image"
              accept="image/*"
              id="imgUpload"
              onChange={(e) => handleImageChange(e)}
              hidden
            />
            <label id="addImgContainer" htmlFor="imgUpload">
              Billede
              <svg
                width="30"
                height="30"
                viewBox="0 0 392 392"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M57.315 334.505C-19.105 258.085 -19.105 133.735 57.315 57.315C133.735 -19.105 258.085 -19.105 334.505 57.315C410.925 133.735 410.925 258.085 334.505 334.505C258.085 410.925 133.735 410.925 57.315 334.505V334.505ZM313.285 78.535C248.565 13.815 143.245 13.815 78.525 78.535C13.805 143.255 13.805 248.575 78.525 313.295C143.245 378.015 248.565 378.015 313.285 313.295C378.005 248.575 378.005 143.255 313.285 78.535V78.535Z"
                  fill="#46512C"
                />
                <path
                  d="M305.405 180.915H210.905V86.415C210.905 78.135 204.185 71.415 195.905 71.415C187.625 71.415 180.905 78.135 180.905 86.415V180.915H86.405C78.125 180.915 71.405 187.635 71.405 195.915C71.405 204.195 78.125 210.915 86.405 210.915H180.905V305.415C180.905 313.695 187.625 320.415 195.905 320.415C204.185 320.415 210.905 313.695 210.905 305.415V210.915H305.405C313.685 210.915 320.405 204.195 320.405 195.915C320.405 187.635 313.685 180.915 305.405 180.915Z"
                  fill="#46512C"
                />
              </svg>
            </label>
            {progress === 0 ? null : (
              <div className="progess">
                <div className="progressBar">
                  {`uploader image ${progress}%`}
                </div>
              </div>
            )}
          </button>

          <button onClick={showWorkIcons} className="workInput">
            <label id="workInputField" htmlFor="workInput">
              Erhverv
              <svg
                width="30"
                height="30"
                viewBox="0 0 392 392"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M57.315 334.505C-19.105 258.085 -19.105 133.735 57.315 57.315C133.735 -19.105 258.085 -19.105 334.505 57.315C410.925 133.735 410.925 258.085 334.505 334.505C258.085 410.925 133.735 410.925 57.315 334.505V334.505ZM313.285 78.535C248.565 13.815 143.245 13.815 78.525 78.535C13.805 143.255 13.805 248.575 78.525 313.295C143.245 378.015 248.565 378.015 313.285 313.295C378.005 248.575 378.005 143.255 313.285 78.535V78.535Z"
                  fill="#46512C"
                />
                <path
                  d="M305.405 180.915H210.905V86.415C210.905 78.135 204.185 71.415 195.905 71.415C187.625 71.415 180.905 78.135 180.905 86.415V180.915H86.405C78.125 180.915 71.405 187.635 71.405 195.915C71.405 204.195 78.125 210.915 86.405 210.915H180.905V305.415C180.905 313.695 187.625 320.415 195.905 320.415C204.185 320.415 210.905 313.695 210.905 305.415V210.915H305.405C313.685 210.915 320.405 204.195 320.405 195.915C320.405 187.635 313.685 180.915 305.405 180.915Z"
                  fill="#46512C"
                />
              </svg>
            </label>
          </button>
        </div>

        {isShown && (
          <div className="jobIconContainer">
            <h4>Vælg ikoner som passer til erhvervet</h4>
            <input
              name="jobName"
              type="text"
              placeholder="Indtast erhverv..."
              id="workName"
              value={formData.jobName}
              onChange={(e) => handleChange(e)}
            />
            <div className="jobIcons">
              <li>
                <input
                  type="radio"
                  name="jobIcon"
                  id="jobIconbox1"
                  value={"book"}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="jobIconbox1">
                  <img src={book} alt="Bog" />
                </label>
              </li>

              <li>
                <input 
                  type="radio" 
                  name="jobIcon" 
                  id="jobIconbox2" 
                  value={"briefcase"} 
                  onChange={(e) => handleChange(e)}/>
                <label htmlFor="jobIconbox2"><img src={briefcase} alt="Taske"/></label>
              </li>

              <li>
                <input 
                  type="radio" 
                  name="jobIcon" 
                  id="jobIconbox3" 
                  value={"dollar"} 
                  onChange={(e) => handleChange(e)}/>
                  <label htmlFor="jobIconbox3">
                    <img src={dollar} alt="Penge"/>
                </label>
              </li>

              <li>
                <input 
                  type="radio" 
                  name="jobIcon" 
                  id="jobIconbox4" 
                  value={"hammer"} 
                  onChange={(e) => handleChange(e)}/>
                <label htmlFor="jobIconbox4">
                  <img src={hammer} alt="Hammer"/>
                </label>
              </li>
              
              <li>
                <input 
                  type="radio" 
                  name="jobIcon" 
                  id="jobIconbox5" 
                  value={"leaf"} 
                  onChange={(e) => handleChange(e)}/>
                <label htmlFor="jobIconbox5">
                  <img src={leaf} alt="Blade"/>
                </label>
              </li>
              
              <li>
                <input 
                  type="radio" 
                  name="jobIcon" 
                  id="jobIconbox6" 
                  value={"ruler"} 
                  onChange={(e) => handleChange(e)}/>
                <label htmlFor="jobIconbox6">
                  <img src={ruler} alt="lineal"/>
                </label>
              </li>

              <li>
                <input 
                  type="radio" 
                  name="jobIcon" 
                  id="jobIconbox7" 
                  value={"saw"} 
                  onChange={(e) => handleChange(e)}/>
                <label htmlFor="jobIconbox7">
                  <img src={saw} alt="Sav"/>
                </label>
              </li>

              <li>
                <input 
                  type="radio" 
                  name="jobIcon" 
                  id="jobIconbox8" 
                  value={"suit"} 
                  onChange={(e) => handleChange(e)}/>
                <label htmlFor="jobIconbox8">
                  <img src={suit} alt="Jakkesæt"/>
                </label>
              </li>

              <li>
                <input 
                  type="radio" 
                  name="jobIcon" 
                  id="jobIconbox9" 
                  value={"note"}
                  onChange={(e) => handleChange(e)}/>
                <label htmlFor="jobIconbox9">
                  <img src={node} alt="Node"/>
                </label>
              </li>

              <li>
                <input 
                 type="radio" 
                 name="jobIcon" 
                 id="jobIconbox10" 
                 value={"pencil"}  
                 onChange={(e) => handleChange(e)}/>
                <label htmlFor="jobIconbox10">
                  <img src={pencil} alt="Blyant"/>
                </label>
              </li>
              
              <li>
                <input 
                  type="radio" 
                  name="jobIcon" 
                  id="jobIconbox11" 
                  value={"noIcon"}  
                  onChange={(e) => handleChange(e)}/>
                <label htmlFor="jobIconbox11">
                  <img src={noIcon} alt="Intet valg"/>
                </label>
              </li>
            </div>
          </div>
        )}

        <div className="historyInput">
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
          <input
            type="number"
            min="1"
            max="400"
            name="graveId"
            className="inputfield"
            placeholder="Gravnummer..."
            value={formData.graveId}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="submitHistoryBtn">
          <button className="btn formsubmit" onClick={openModal}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 392 392"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M196,0C87.75,0,0,87.75,0,196s87.75,196,196,196,196-87.75,196-196S304.25,0,196,0Zm119.25,83.23c-97.96,95.74-144.92,239.42-145.39,240.86-1.93,6-7.41,10.16-13.7,10.4-.19,0-.39,.01-.58,.01-6.07,0-11.57-3.67-13.88-9.32L73.35,158.04c-3.13-7.67,.54-16.43,8.21-19.56,7.67-3.13,16.43,.54,19.56,8.21l53.87,131.75c5.88-14.3,13.69-32.03,23.53-51.77,22.92-46.01,61.61-111.97,115.76-164.9,5.92-5.79,15.42-5.68,21.21,.24s5.68,15.42-.24,21.21Z"
                fill="#8b9769"
              />
            </svg>
            Færdig
          </button>
          <AddedModal
            title="Post livshistorie?"
            onClose={closeModal}
            show={show}
          >
            <button
              className="btn formsubmit"
              onClick={() => {
                handlePublish();
                closeModal();
                toast("fail");
                
               
              }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 392 392"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M196,0C87.75,0,0,87.75,0,196s87.75,196,196,196,196-87.75,196-196S304.25,0,196,0Zm119.25,83.23c-97.96,95.74-144.92,239.42-145.39,240.86-1.93,6-7.41,10.16-13.7,10.4-.19,0-.39,.01-.58,.01-6.07,0-11.57-3.67-13.88-9.32L73.35,158.04c-3.13-7.67,.54-16.43,8.21-19.56,7.67-3.13,16.43,.54,19.56,8.21l53.87,131.75c5.88-14.3,13.69-32.03,23.53-51.77,22.92-46.01,61.61-111.97,115.76-164.9,5.92-5.79,15.42-5.68,21.21,.24s5.68,15.42-.24,21.21Z"
                  fill="#8b9769"
                />
              </svg>
              Indsend
            </button>
            <button onClick={closeModal}>Tilbage</button>
          </AddedModal>
        </div>
      </div>
    </section>
  );
}

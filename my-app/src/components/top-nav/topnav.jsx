import "./topnavstyle.css";
import logo from "../../pics/logo.svg";
import { Link } from "react-router-dom";
import info from "../../pics/icons/Info1.svg";
import { useState } from "react";
import Intro1 from "../introModal/Step1";
import exitIcon from "../../pics/icons/cross.svg";

function Topnav() {

  const Images = [
    ``,
    `M327.84,118.71l-48.83-38.87c.62-2.05,.96-4.22,.96-6.46V35.7c0-12.43-10.17-22.6-22.6-22.6h-18.84c-10.53,0-19.41,7.31-21.89,17.1l-30.45-24.23c-9.99-7.95-24.15-7.95-34.14,0L10.39,118.71c-17.64,14.04-11.31,40.57,7.68,47.27v171.15c0,13.68,11.19,24.87,24.87,24.87h61.3c13.68,0,24.87-11.19,24.87-24.87v-87.32c0-12.77,10.36-23.13,23.13-23.13h31.03c12.88,0,23.32,10.44,23.32,23.32v87.13c0,13.68,11.19,24.87,24.87,24.87h61.3c13.68,0,24.87-11.19,24.87-24.87V166.75c20.94-5.13,28.63-33.39,10.22-48.04Z`,
    `M350.43,0H100.57C45.26,0,0,45.26,0,100.57v249.85c0,55.32,45.26,100.57,100.57,100.57h249.85c55.32,0,100.57-45.26,100.57-100.57V100.57C451,45.26,405.74,0,350.43,0ZM44.5,129.81c0-47.04,38.27-85.31,85.32-85.31h70.56c7.81,0,14.14,6.33,14.14,14.14s-6.33,14.14-14.14,14.14h-70.56c-31.45,0-57.03,25.59-57.03,57.03v70.56c0,7.81-6.33,14.14-14.14,14.14s-14.14-6.33-14.14-14.14v-70.56ZM200.38,406.5h-70.56c-47.04,0-85.32-38.27-85.32-85.31v-70.56c0-7.81,6.33-14.14,14.14-14.14s14.14,6.33,14.14,14.14v70.56c0,31.45,25.59,57.03,57.03,57.03h70.56c7.81,0,14.14,6.33,14.14,14.14s-6.33,14.14-14.14,14.14Zm25.36-119.49c-33.84,0-61.28-27.43-61.28-61.28s27.43-61.28,61.28-61.28,61.28,27.43,61.28,61.28-27.43,61.28-61.28,61.28Zm124.91,101.81c-23.17,0-41.95-18.78-41.95-41.95s18.78-41.95,41.95-41.95,41.95,18.78,41.95,41.95-18.78,41.95-41.95,41.95Zm55.86-188.44c0,7.81-6.33,14.14-14.14,14.14s-14.14-6.33-14.14-14.14v-70.56c0-31.45-25.59-57.03-57.03-57.03h-70.56c-7.81,0-14.14-6.33-14.14-14.14s6.33-14.14,14.14-14.14h70.56c47.04,0,85.32,38.27,85.32,85.31v70.56Z`,
    `M153.23,0C68.6,0,0,68.6,0,153.23s153.23,208.77,153.23,208.77c0,0,153.23-124.15,153.23-208.77S237.85,0,153.23,0Zm0,208.77c-30.68,0-55.54-24.87-55.54-55.55s24.87-55.54,55.54-55.54,55.54,24.87,55.54,55.54-24.87,55.55-55.54,55.55Z`,
    `M351.05,322.33l-60.37-60.37c-1.87-1.87-3.97-3.39-6.2-4.55,21.26-27.07,33.96-61.17,33.96-98.19C318.44,71.43,247.02,0,159.22,0S0,71.43,0,159.22s71.43,159.22,159.22,159.22c33.58,0,64.76-10.46,90.47-28.27,1.23,2.75,2.96,5.32,5.21,7.57l60.37,60.37c9.88,9.88,25.9,9.88,35.78,0h0c9.88-9.88,9.88-25.9,0-35.78ZM30,159.22C30,87.97,87.97,30,159.22,30s129.22,57.97,129.22,129.22-57.97,129.22-129.22,129.22S30,230.48,30,159.22Z`,
    `M196,0C87.75,0,0,87.75,0,196s87.75,196,196,196,196-87.75,196-196S304.25,0,196,0Zm109.5,211h-94.5v94.5c0,8.28-6.72,15-15,15s-15-6.72-15-15v-94.5H86.5c-8.28,0-15-6.72-15-15s6.72-15,15-15h94.5V86.5c0-8.28,6.72-15,15-15s15,6.72,15,15v94.5h94.5c8.28,0,15,6.72,15,15s-6.72,15-15,15Z`,
  ];

  const Texts = [
    `Kirkegårdshistorier er et arkiv for livshistorier om dem, der ligger begravet på Åbyhøj Kirkegård.`,
    `Forsiden.
    Her kan du se udvalgte livshistorier.`,
    `QR-scanner.
    Scan et gravsteds QR-kode for at læse den begravedes livshistorie.`,
    `Kort over kirkegården.
    Klik på gravene for at se information om de begravede.`,
    `Søgefelt.
    Find begravede ved at søge på deres navn eller gravstedets nummer.`,
    `Opret livshistorie.
    Skriv en historie om en af de begravede.`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [image, setImage] = useState(Images[0]);
  const [text, setText] = useState(Texts[0]);

  // 
  function toNext() {
    setCurrentIndex((state) => {
      const nextIndex = state < 5 ? state + 1 : 5;
      setImage(Images[nextIndex]);
      setText(Texts[nextIndex]);
      return nextIndex;
    });
    // setImage((props) => {
    //   return Images[currentIndex];
    // });
    // setText((props) => {
    //   return Texts[props.currentIndex];
    // });
    console.log(currentIndex);
  }

  function toPrevious() {
    setCurrentIndex((state) => {
      const previousIndex = state > 0 ? state - 1 : 0;
      setImage(Images[previousIndex]);
      setText(Texts[previousIndex]);
      return previousIndex;
    });
    console.log(currentIndex);
  }

  // Manage modal
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
    setCurrentIndex(0);
    setText(Texts[currentIndex]);
    console.log(currentIndex);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className="topNavbox">
      <Link to="/" id="logoName">
        <img src={logo} alt="Kirkegårds appen" className="srcLogo" />
        <h3>Kirkegårdshistorier</h3>
      </Link>
      <div onClick={openModal}>
        <img src={info} alt="Info-logo" height={30} />
        <Intro1 title="Startguide" onClose={closeModal} show={show}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 392 392"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={image} fill="#46512C" />
          </svg>
          <p>{text}</p>
          <div className="modal-btns">
            <button className="btn formsubmit" onClick={toPrevious}>
              Tilbage
            </button>
            <button id="solid" onClick={toNext}>
              Næste
            </button>
          </div>
          <img src={exitIcon} alt="Exit" className="Icon" id="exitIcon" height="40px" onClick={closeModal} />  
        </Intro1>
      </div>
    </div>
  );
}

export default Topnav;

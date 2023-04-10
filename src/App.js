import React from "react";
import CacheBuster from "react-cache-buster";
import packageInfo from "../package.json";
import ReactLoading from "react-loading";

import "./App.css";
import CountDownTimer from "./CountDown";

import cartonOfFame from "./assets/carton-of-fame.svg";
import shine from "./assets/shine.svg";
import egg1 from "./assets/egg-hints/Stage 4A.png";
import egg2 from "./assets/egg-hints/Stage 4B.png";
import egg3 from "./assets/egg-hints/Stage 4C.png";
import egg4 from "./assets/egg-hints/Stage 4J.png";
import egg5 from "./assets/egg-hints/Stage 4D.png";
import egg6 from "./assets/egg-hints/Stage 4L.png";
import egg7 from "./assets/egg-hints/Stage 4E.png";
import egg8 from "./assets/egg-hints/Stage 4H.png";
import egg9 from "./assets/egg-hints/Stage 4I.png";
import egg10 from "./assets/egg-hints/Stage 4G.png";
import egg11 from "./assets/egg-hints/Stage 4K.png";
import egg12 from "./assets/egg-hints/Stage 4F.png";

import egg1Found from "./assets/found-photos/egg-1-found-edit.jpg";
import egg2Found from "./assets/found-photos/egg-2-found-edit.jpg";
import egg3Found from "./assets/found-photos/egg-3-found-edit.jpg";
import egg4Found from "./assets/found-photos/egg-4-found-edit.jpg";
import egg5Found from "./assets/found-photos/egg-5-found-edit.jpg";
import egg6Found from "./assets/found-photos/egg-6-found-edit.jpg";
import egg7Found from "./assets/found-photos/egg-7-found-edit.jpg";
import egg8Found from "./assets/found-photos/egg-8-found-edit.jpg";
import egg9Found from "./assets/found-photos/egg-9-found-edit.jpg";
import egg10Found from "./assets/found-photos/egg-10-found-edit.jpg";
import egg11Found from "./assets/found-photos/egg-11-found-edit.jpg";
import egg12Found from "./assets/found-photos/egg-12-found-edit.jpg";

function App() {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <CacheBuster
      currentVersion={packageInfo.version}
      isEnabled={isProduction}
      isVerboseMode={false}
      loadingComponent={<h1>Loading...</h1>}
    >
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Nunito:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Nunito:wght@500&family=PT+Sans+Narrow&family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        ></link>
        <div className="previous-year-banner">
          <span>
            The Second Annual Brown Egg Hunt is hosted at{" "}
            <a
              style={{ textTransform: "none", color: "white" }}
              href="http://eggs.fyi"
            >
              {" "}
              eggs.fyi
            </a>
          </span>
        </div>
        <div className="background-blue">
          <div className="partial-width-container">
            <div className="header-section">
              <h1>First Annual Brown Egg Hunt (2022)</h1>
              <h3>hosted by no one in particular</h3>
            </div>
            <div className="carton-section">
              <div className="carton-container">
                <img src={shine} className="shine" />
                <img src={cartonOfFame} className="carton-of-fame"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="partial-width-container">
          <div className="hints-section">
            <h2>What Just Happened?</h2>
            <p>
              Congratulations to our golden-egg-finders and thank you to
              everyone for participating! I (no one in particular) won't be here
              next year, so I'm looking forward to seeing who picks up the torch
              to lead the second annual Brown Egg Hunt in 2023.
            </p>
            <p>
              A special thank-you to my right-hand person (someone in
              particular), as well as to the over 40 volunteer egg-hiders who
              made this event possible, placing over 1,000 eggs across
              approximately 40 academic buildings and common spaces on Brown
              campus.
            </p>
            <p>
              You can email any feedback or questions to no one in particular at
              brownegghunt@gmail.com, and feel free to send along any photos (no
              matter how terrible) from the event.
            </p>
            <br />
            <h2>Golden Eggs:</h2>
            <div className="egg-hints">
              <div className="egg-hint">
                <img
                  src={egg1Found}
                  className={"found"}
                  style={{ width: "45%" }}
                ></img>
                <p>
                  Golden Egg #1: <br />
                  Trevor Ing and Timmy Wang
                  <br /> Found at 5:10pm on Pembroke Field
                </p>
              </div>
              <div className="egg-hint">
                <img
                  src={egg2Found}
                  className={"found"}
                  style={{ width: "45%" }}
                ></img>
                <p>
                  Golden Egg #2: <br />
                  Phoebe Dragseth and Oscar Barbaza
                  <br /> Found at 11:51am outside APMA headquarters
                </p>
              </div>
              <div className="egg-hint">
                <img
                  src={egg3Found}
                  className={"found"}
                  style={{ width: "45%" }}
                ></img>
                <p>
                  Golden Egg #3: <br />
                  Drew Morehead, Futen Wang, and Mac Hays
                  <br /> Found at 2:25pm near Minden Hall
                </p>
              </div>
              <div className="egg-hint">
                <img
                  src={egg4Found}
                  className={"found"}
                  style={{ width: "45%" }}
                ></img>
                <p>
                  Golden Egg #4: <br />
                  Philip LaDuca
                  <br /> Found at 12:45pm behind Sears
                </p>
              </div>
              <div className="egg-hint">
                <img
                  src={egg5Found}
                  className={"found"}
                  style={{ width: "45%" }}
                ></img>
                <p>
                  Golden Egg #5: <br />
                  Aaron and Josh
                  <br /> Found at 2:42pm outside Campus Center
                </p>
              </div>
              <div className="egg-hint">
                <img
                  src={egg6Found}
                  className={"found"}
                  style={{ width: "75%" }}
                ></img>
                <p>
                  Golden Egg #6: <br />
                  The Inning Club
                  <br /> Found at 3:40pm in Keeney Quad
                </p>
              </div>
              <div className="egg-hint">
                <img
                  src={egg7Found}
                  className={"found"}
                  style={{ width: "45%" }}
                ></img>
                <p>
                  Golden Egg #7: <br />
                  Kristine and Eric
                  <br /> Found at 3:11pm in{" "}
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/41%C2%B049'30.4%22N+71%C2%B023'59.3%22W/@41.8251,-71.4003382,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0xbd0652c06c221600!7e2!8m2!3d41.8251005!4d-71.3997911"
                  >
                    this tree
                  </a>
                </p>
              </div>
              <div className="egg-hint">
                <img
                  src={egg8Found}
                  className={"found"}
                  style={{ width: "45%" }}
                ></img>
                <p>
                  Golden Egg #8: <br />
                  Biomed ACF Team (Rynn, Diana, Kiana, Mario)
                  <br /> Found at 1:09pm behind Smitty-B
                </p>
              </div>
              <div className="egg-hint">
                <img
                  src={egg9Found}
                  className={"found"}
                  style={{ width: "45%" }}
                ></img>
                <p>
                  Golden Egg #9: <br />
                  Mari and Theo Licata
                  <br /> Found at 4:21pm near the OMAC
                </p>
              </div>
              <div className="egg-hint">
                <img
                  src={egg10Found}
                  className={"found"}
                  style={{ width: "45%" }}
                ></img>
                <p>
                  Golden Egg #10: <br />
                  Elijah Lew-Smith, Robert Scheidegger, and Derik Kauffman
                  <br /> Found at 2:13pm outside Grad Center
                </p>
              </div>
              <div className="egg-hint">
                <img
                  src={egg11Found}
                  className={"found"}
                  style={{ width: "45%" }}
                ></img>
                <p>
                  Golden Egg #11: <br />
                  Matt Rauschenbach, Edan Larkin, Ian Rackow, and Eric Sorge
                  <br /> Found at 5:45pm near the Wellness Center
                </p>
              </div>
              <div className="egg-hint">
                <img
                  src={egg12Found}
                  className={"found"}
                  style={{ width: "75%" }}
                ></img>
                <p>
                  Golden Egg #12: <br />
                  Sebastian Criado and Catherina Niu
                  <br /> Found at 12:42pm near the SciLi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CacheBuster>
  );
}

export default App;

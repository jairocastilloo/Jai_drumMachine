import { useEffect, useState } from "react";
import "./App.css";
import { AudioClip } from "./types";
import Drum from "./Drum";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const audioClips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4",
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open HH",
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick n` Hat",
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed HH",
  },
];
function App() {
  const playAudio = (e: KeyboardEvent) => {
    const clip = audioClips.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase()
    );
    if (!clip) return;

    // Play the audio
    const audioElement = document.getElementById(
      clip.keyTrigger
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play().catch(console.error);
    }

    // Focus the drum element
    const drumElement = document.getElementById("drum-" + clip.keyTrigger);
    if (drumElement) {
      drumElement.focus();
    }

    // Update the display element
    const displayElement = document.getElementById("display");
    if (displayElement) {
      displayElement.innerText = clip.description;
    }
  };

  useEffect(() => {
    // Add the keydown event listener to the document when the component mounts
    document.addEventListener("keydown", playAudio);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", playAudio);
    };
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#6AB187" }}>
        <h1 className="mb-3 mt-5 text-center text-black fw-bold">
          Jai's Drum Machine
        </h1>
        <Container
          className="p-5 pt-3 border border-warning border-5"
          style={{ backgroundColor: "#97BC62" }}
          id="drum-machine">
          <h1
            id="display"
            className="mb-3 text-center text-dark fw-bold p-2 text-underline fst-italic"></h1>
          <Row>
            {audioClips.map((clip, index) => (
              <React.Fragment key={index}>
                <Col sm={4} className="mb-3">
                  <Drum audioClip={clip} key={clip.keyTrigger} />
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;

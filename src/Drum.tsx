import { Button } from "react-bootstrap";
import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
}
const Drum = ({ audioClip }: DrumProps) => {
  const playSound = (clip: AudioClip) => {
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);
    document.getElementById("display")!.innerText = clip.description;
  };
  return (
    <Button
      variant="success"
      className="full-width-btn py-4 rounded drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playSound(audioClip)}>
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
      {audioClip.keyTrigger}
    </Button>
  );
};
export default Drum;

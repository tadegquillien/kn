import Test from './Test';
import Instructions from './Instructions';
import Demographics from './Demographics';
import ConsentForm from './ConsentForm';
import Data from './Data';
import { useState } from 'react';
import { textStyle, buttonStyle } from './dimensions';
import { ballsList } from './gameParameters';

function App() {

  const [phase, setPhase] = useState("prolificId");
  const [currentTest, setCurrentTest] = useState(0);
  const test_ids = Array.from(Array(ballsList.length).keys());

  const ProlificId = ({ setPhase }) => {

    const [id, setId] = useState("");
    const handleId = (e) => {
      setId(e.target.value)
    };
    const handleClick = () => {
      Data.prolificId.push(id);
      setPhase('consentform');

    }
    return (
      <div style={textStyle}>Welcome to the study!<br></br>
        <br></br>
        Before we start, please enter your Prolific ID:<br></br>
        <br></br>
        <input style={{ width: "400px", height: "50px", fontSize: "25px" }}
          onChange={(e) => handleId(e)}
        ></input>
        <br></br>
        <button style={buttonStyle}
          onClick={() => handleClick()}>submit</button>
      </div>
    )

  };



  const tests = test_ids.map((i) => {
    let b = ballsList[i];
    return (<Test key={i} containsAlpha={b.containsAlpha} urnDimensions={[7, 7]} nalpha={b.containsAlpha === 0 ? 0 : 10}
      nbeta={5} nalphaActual={b.alpha} nbetaActual={b.beta} nwhiteActual={b.white} currentTest={currentTest}
      setCurrentTest={setCurrentTest} setPhase={setPhase} test_ids={test_ids} />)
  });

  //the end of the study
  const ending =
    <div style={textStyle}>Thank you for your participation!
      <br></br>
      Please click on this link to go back to Prolific: <a href="https://app.prolific.co/submissions/complete?cc=113C348D">https://app.prolific.co/submissions/complete?cc=113C348D</a>
      <br></br>
      After you have clicked the link, you can then close the present tab.</div>;


  return (phase === "prolificId" ? <ProlificId setPhase={setPhase} /> :
    phase === "consentform" ? <ConsentForm setPhase={setPhase} /> :
      phase === "instructions" ? <Instructions setPhase={setPhase} /> :
        phase === "test" ? tests[currentTest] :
          phase === "demographics" ? <Demographics setPhase={setPhase} /> :
            phase === "ending" ? ending : "")
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
    }
    // binding clicks and key presses
    this.padClick = this.padClick.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  
  // clicking the pad triggers this
  padClick(e) {
    this.setState({
      key: e.target.id
    });
    let sound = e.target.querySelector("audio");
    sound.play();

  }
  
  // pressing the matching key triggers this
  keyPress(e) {
    if (document.getElementById(e.key.toUpperCase())) {
      let letter = document.getElementById(e.key.toUpperCase());
      this.setState({
        key: letter.parentElement.id,
      });
      let sound = letter;
      sound.play();
    };
  };
  
  // mount key press event
  componentDidMount() {
    document.addEventListener("keydown", this.keyPress);
  };
  
  // unmount key press event
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress);
  };
  
  render() {
    let padList = Object.keys(pads).map((value, i)=>{
            return <div
                     id={pads[value].pad}
                     class={pads[value].class}
                     onClick={this.padClick}
                     onKeyDown={this.keyPress}>
                       <audio
                        class="clip"
                        id={pads[value].letter}
                        src={pads[value].url}>
                       </audio>{pads[value].letter}
            </div>
            });
    return(
      <div id="drum-machine" >
        <div class="mainContainer">
          {padList}
        </div>
        <div id="display">{this.state.key}</div>
      </div>
    )
  }
};

function App() {
  return (
    <DrumMachine />
  );
}

// pad data
const pads = [
  {letter:"Q",
  pad: "Heater 1",
  class: "drum-pad btn btn-primary shadow",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  {letter:"W",
  pad: "Heater 2",
  class: "drum-pad btn btn-primary shadow",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
  {letter:"E",
  pad: "Heater 3",
  class: "drum-pad btn btn-primary shadow",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
  {letter:"A",
  pad: "Heater 4",
  class: "drum-pad btn btn-primary shadow",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
  {letter:"S",
  pad: "Clap",
  class: "drum-pad btn btn-primary shadow",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
  {letter:"D",
  pad: "Open Hat",
  class: "drum-pad btn btn-primary shadow",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
  {letter:"Z",
  pad: "Kick + Hat",
  class: "drum-pad btn btn-primary shadow",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
  {letter:"X",
  pad: "Kick",
  class: "drum-pad btn btn-primary shadow",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
  {letter:"C",
  pad: "Hi-Hat",
  class: "drum-pad btn btn-primary shadow",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},
];

export default App;

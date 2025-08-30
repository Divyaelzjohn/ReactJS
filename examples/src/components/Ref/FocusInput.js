// import React, { useRef } from "react";

// function FocusInput() {
  // const inputRef = useRef(null);      //step 1:create a ref
  // const handleFocus = () => {
  //   inputRef.current.focus();         // step 3: Use ref to focus input
  // };
  // return (
  //   <div>
  //     <input type="text" ref={inputRef} placeholder="Type here..." />
  //     <button onClick={handleFocus}>Focus Input</button>
  //   </div>
  // );

/* Video player */
  // const videoRef = useRef(null);

  // const playVideo = () => videoRef.current.play();
  // const pauseVideo = () => videoRef.current.pause();

  // return (
  //   <div>
  //     <video ref={videoRef} width="300" controls={false}>
  //       <source src="video.mp4" type="video/mp4" />
  //     </video>
  //     <br />
  //     <button onClick={playVideo}>Play</button>
  //     <button onClick={pauseVideo}>Pause</button>
  //   </div>
  // );

/* in class components */

/* import React, { Component } from "react";

class InputFocusClass extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();  // Create ref
  }
  focusInput = () => {
    this.inputRef.current.focus();     // Use ref
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}
export default InputFocusClass; */





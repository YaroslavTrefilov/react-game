import React from "react";
import "./modal.scss";
import AudioSettings from "../audio-settings/audio-settings";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  closeModal = (e) => {
    if (e.target.className === "close" || e.target.className === "modal") {
      this.props.toggleModal();
    }
  };

  goToEndGame = () => {
    this.props.onChangeState("pageName", "EndGame");
  };

  componentDidMount() {
    document.addEventListener("click", this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeModal);
  }

  render() {
    return (
      <div className="modal" id="myModal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close">&times;</span>
            <h2>Audio settings</h2>
          </div>
          <AudioSettings {...this.props} />
          <button className="dialoque-area__btn" onClick={this.goToEndGame}>
            Finish the game
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;

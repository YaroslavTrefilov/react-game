import React from 'react';
import soundSrc from '../../audio/Komiku-Road-2-Chill.mp3';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.musicRef = React.createRef();
  }
  render() {
    const audio = <audio autoPlay src={soundSrc} ref={this.musicRef} volume={0.2} loop/>;

    return this.props.isMusicOn ? audio : false;
  }
}

export default Music;
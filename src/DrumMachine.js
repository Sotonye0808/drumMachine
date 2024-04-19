// DrumMachine.js
import React, { useState } from 'react';
import './App.css';

const DrumMachine = () => {
    const [display, setDisplay] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const playSound = (sound) => {
      const audio = new Audio(sound);
      audio.play();
      setDisplay(sound.slice(7, -4)); // Display the sound description
    };
  
    const handleKeyPress = (e) => {
      const key = e.key.toUpperCase();
      const audioElement = document.getElementById(key);
      if (audioElement) {
        audioElement.play();
        setDisplay('');
      }
    };
  
    document.addEventListener('keydown', handleKeyPress);
  
    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <div className={`app ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}>
        <div id="drum-machine" className="container">
          <h1 className="text-center mt-5 mb-4">Drum Machine</h1>
          <div id="display" className="text-center mb-4">{display}</div>
          <div className="drum-pads row row-cols-1">
            {drumPads.map((pad) => (
              <div
                key={pad.id}
                className={`drum-pad col text-center p-3${isDarkMode ? ' bg-dark text-light' : ' bg-light'}`}
                onClick={() => playSound(pad.sound)}
              >
                {pad.key}
                <audio className="clip" id={pad.key} src={pad.sound}></audio>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className={`btn btn-sm ${isDarkMode ? 'btn-light' : 'btn-dark'}`} onClick={toggleMode}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const drumPads = [
    { id: 'Heater-1', key: 'Q', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    { id: 'Heater-2', key: 'W', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
    { id: 'Heater-3', key: 'E', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
    { id: 'Heater-4', key: 'A', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
    { id: 'Clap', key: 'S', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
    { id: 'Open-HH', key: 'D', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
    { id: 'Kick-n-Hat', key: 'Z', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
    { id: 'Kick', key: 'X', sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
    { id: 'Closed-HH', key: 'C', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
  ];
  
export default DrumMachine;

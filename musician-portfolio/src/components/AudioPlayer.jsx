import React, { useState, useRef } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import '../styles/AudioPlayer.css';

function AudioPlayer({ title, audioSrc, imgSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const onTimeUpdate = () => {
    const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progress);
    setCurrentTime(audioRef.current.currentTime);
  };

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const onEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
      audioRef.current.muted = false;
    }
  };

  return (
    <div className="audio-player">
      <div className="audio-player-header">
        <div className="audio-img-container">
          {imgSrc ? (
            <img src={imgSrc} alt={title} className="audio-thumbnail" />
          ) : (
            <div className="audio-thumbnail-placeholder">
              <span>♪</span>
            </div>
          )}
        </div>
        <div className="audio-info">
          <h5>{title}</h5>
        </div>
        <Button
          variant="link"
          className="play-btn"
          onClick={togglePlay}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </Button>
      </div>

      <div className="timeline-container">
        <span className="time current">{formatTime(currentTime)}</span>
        <input
          type="range"
          className="timeline"
          value={progress}
          step="0.01"
          onChange={handleProgressChange}
          min="0"
          max="100"
        />
        <span className="time duration">{formatTime(duration)}</span>
      </div>

      <div className="volume-container">
        <Button
          variant="link"
          className="volume-btn"
          onClick={toggleMute}
        >
          <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
        </Button>
        <input
          type="range"
          className="volume"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
        />
      </div>

      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />
    </div>
  );
}

export default AudioPlayer;
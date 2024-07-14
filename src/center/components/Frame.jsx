
import React from 'react';
import './Frame.css';

const Frame = ({ imageSrc, description }) => {
  return (
    <div className="frame">
      <img src={imageSrc} alt="Frame Image" className="frame-image" />
      <p className="frame-description">{description}</p>
    </div>
  );
};

export default Frame;

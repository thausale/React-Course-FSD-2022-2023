import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  if (progress > 100) {
    setProgress(100);
  }
  const styles = {
    width: `${progress}%`,
  };

  return (
    <div>
      <p>input percentage:</p>
      <input
        type="number"
        min="0"
        max="100"
        step="5"
        value={progress}
        onChange={(e) => {
          setProgress(parseInt(e.target.value));
        }}
      />
      <h2>{progress}</h2>
      <div className="progressContainer">
        <div style={styles} className="progressBar">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

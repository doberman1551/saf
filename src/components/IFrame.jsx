import React from 'react';

const IFrame = ({ src, title }) => {
  return (
    <div className="w-full h-64">
      <iframe
        src={src}
        title={title}
        className="w-full h-full border-0"
      />
    </div>
  );
};

export default IFrame;
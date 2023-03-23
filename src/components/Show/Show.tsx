import React, { useState } from 'react';

type ShowProps = {
  children: React.ReactNode;
};

export function Show({children}: ShowProps) {
  const [showChildren, setShowChildren] = useState(false);

  const toggleShowChildren = () => {
    setShowChildren(!showChildren);
  };

  console.log(children);
  return (
    <div>
      <button onClick={toggleShowChildren}>
        {showChildren ? 'Hide' : 'Show'}
      </button>
      {showChildren && children}
    </div>
  );
}


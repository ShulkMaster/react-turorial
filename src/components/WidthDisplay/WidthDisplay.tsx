import React, { useState, useLayoutEffect } from 'react';

export function WidthDisplay() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // This function will run synchronously after all DOM mutations
    // but before the browser paints any updates to the screen.
    function handleResize() {
      // Use the `clientWidth` property of the body element to get
      // the width of the viewport.
      const newWidth = document.body.clientWidth;
      setWidth(newWidth);
    }

    // Add event listener to update width on window resize
    window.addEventListener('resize', handleResize);

    // Call the resize handler once to set the initial width
    handleResize();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Add an empty dependency array to only run the effect once

  return (
    <div>
      <h1>Viewport Width: {width}px</h1>
    </div>
  );
}

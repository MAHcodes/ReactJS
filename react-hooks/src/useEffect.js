import { useEffect, useState } from "react";

const Effect = () => {
  const [cursorLocation, setCursorLocation] = useState(null);
  let resetCount = 0;

  const updateCursorLocation = (e) => {
    const newCursorLocation = `X: ${e.clientX}, Y: ${e.clientY}`;
    setCursorLocation(newCursorLocation);
  };

  const resetCursorLocation = () => {
    resetCount = resetCount + 1;
    setCursorLocation(null);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorLocation);

    return () => {
      window.removeEventListener("mousemove", updateCursorLocation);
    };
  }, [resetCount]);

  return (
    <div>
      <h1>
        {cursorLocation
          ? `Cursor Location: ${cursorLocation}`
          : "Move your cursor to get it's location"}
      </h1>
      <button onClick={resetCursorLocation}>Reset Cursor Location</button>
    </div>
  );
};

export default Effect;

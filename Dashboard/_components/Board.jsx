
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function Board() {
  const colors = useMemo(
    () => ["black", "red", "green", "orange", "blue", "yellow"],
    []
  );
  

  const canvasReference = useRef(null);
  const contextReference = useRef(null);

  const [isPressed, setIsPressed] = useState(false);

  const clearCanvas = () => {
    const canvas = canvasReference.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const beginDraw = (e) => {
    contextReference.current.beginPath();
    contextReference.current.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    setIsPressed(true);
  };

  const updateDraw = (e) => {
    if (!isPressed) return;

    contextReference.current.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    contextReference.current.stroke();
  };

  const endDraw = () => {
    contextReference.current.closePath();
    setIsPressed(false);
  };

  useEffect(() => {
    const canvas = canvasReference.current;
    canvas.width = 800;
    canvas.height = 800;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = colors[0];
    context.lineWidth = 5;
    contextReference.current = context;
  }, [colors]);

  const setColor = (color) => {
    contextReference.current.strokeStyle = color;
  };

  return (
    <>
    <header>
    <div className="flex items-center gap-4 p-5 border-b-4 border-slate-400">
            <div className="hidden lg:flex lg:flex1 lg:w-5/6 gap-6">
                <input type="text" class="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-5/6" placeholder="Search templa"/>
                             <button className="bg-slate-200 rounded-md w-22 border-b-4">+InviteMembers</button>
        
            </div>
        <Link to="/Home">  <button className="rounded-3xl w-72 bg-slate-200 h-14">Home</button></Link>
        </div>
    </header>
    <div className="Board">
      <canvas
        ref={canvasReference}
        onMouseDown={beginDraw}
        onMouseMove={updateDraw}
        onMouseUp={endDraw}
      />
      <div className="buttons">
        <button onClick={clearCanvas}>CLR</button>
        {colors.map((color) => (
          <button
            onClick={() => setColor(color)}
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
    </div>
    </>
  );
}

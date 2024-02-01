import { useState, useEffect } from 'react';
import './App.css';
import { AppRouter } from './components/AppRouter';

function App() {
  const [rotationDeg, setRotationDeg] = useState<string>('0deg');
  
  const styles = (): React.CSSProperties => ({
    ["--rotation-deg" as any]: rotationDeg,
  });

  useEffect(() => {
    // Add a listener for mouse moves to manipulate a CSS variable which configures color hue rotation.
    const handleMouseMove = (event: MouseEvent) => {
      const canvas = document.getElementById('canvas');

      // Find the center of the canvas.
      const canvasCenterX = canvas!.clientWidth * 0.5;
      const canvasCenterY = canvas!.clientHeight * 0.5;

      const cursorX = event.clientX;
      const cursorY = event.clientY;

      // Translate the mouse coorinate system to originate from canvas center.
      const realX = cursorX - canvasCenterX;
      const realY = cursorY - canvasCenterY;

      // Find the degrees from origin formed by the vector <realX, realY>.
      // Set that to the css variable for fun.
      setRotationDeg(Math.atan2(realX, realY) * (180 / Math.PI) + 'deg');
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="kudos-studio" id="canvas" style={styles()}>
      <AppRouter />
    </div>
  );
}

export default App;

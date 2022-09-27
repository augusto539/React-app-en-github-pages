import logo from './logo.svg';
import Charts from './components/charts';
import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    // Create a WorldWindow for the canvas.
    var wwd = new window.WorldWind.WorldWindow("canvasOne");

    // Add some image layers to the WorldWindow's globe.
    wwd.addLayer(new window.WorldWind.BMNGOneImageLayer());
    wwd.addLayer(new window.WorldWind.BMNGLandsatLayer());
  }, [])

  return (
    <div className="App">
      <Charts/>
      {/* <header className="App-header">
        <canvas id="canvasOne" width="1024" height="768">
          Your browser does not support HTML5 Canvas.
        </canvas>
      </header> */}
    </div>
  );
}

export default App;

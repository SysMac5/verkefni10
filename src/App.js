import './App.css';
import { allowDrop, drag, drop } from './drag.js';

function App() {
  return (
    <div className="App">
      <main className="main">
        <header className="header">
          <h1>Færa Magga 🧔‍♂️</h1>
          <p>Þessi síða notar <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API">HTML Drag and Drop API</a> til þess að færa Magga milli rammanna. Prófaðu að draga hann í annan ramma.</p>
        </header>

        <div className="rammar">
          <div className="rammi" id="rammi1" onDrop={drop} onDragOver={allowDrop}>
            <img src="./maggi.jpg" draggable="true" onDragStart={drag} id="drag1" alt="Mynd af Magga." />
          </div>

          <div className="rammi" id="rammi2" onDrop={drop} onDragOver={allowDrop}></div>

          <div className="rammi" id="rammi3" onDrop={drop} onDragOver={allowDrop}></div>

          <div className="rammi" id="rammi4" onDrop={drop} onDragOver={allowDrop}></div>

          <div className="rammi" id="rammi5" onDrop={drop} onDragOver={allowDrop}></div>

          <div className="rammi" id="rammi6" onDrop={drop} onDragOver={allowDrop}></div>

          <div className="rammi" id="rammi7" onDrop={drop} onDragOver={allowDrop}></div>

          <div className="rammi" id="rammi8" onDrop={drop} onDragOver={allowDrop}></div>

          <div className="rammi" id="rammi9" onDrop={drop} onDragOver={allowDrop}></div>

          <div className="rammi" id="rammi10" onDrop={drop} onDragOver={allowDrop}></div>

          <div className="rammi" id="rammi11" onDrop={drop} onDragOver={allowDrop}></div>

          <div className="rammi" id="rammi12" onDrop={drop} onDragOver={allowDrop}></div>
        </div>
      </main>
    </div>
  );
}

export default App;

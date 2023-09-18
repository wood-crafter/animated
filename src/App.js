import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sun"></div>
      {/* <div className="transition"></div> */}
      <div className="top">
        <section className="horizon-line horizon-line-top">
          <div className="horizon-left"></div>
          <div className="horizon-right"></div>
        </section>
      </div>
      <div className="bot">
        <section className="horizon-line horizon-line-bot">
          <div className="horizon-left"></div>
          <div className="horizon-right"></div>
        </section>
      </div>
    </div>
  );
}

export default App;

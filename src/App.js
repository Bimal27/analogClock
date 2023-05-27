import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState({
    hourNeedle: 0,
    minNeedle: 0,
    secondNeedle: 0,
    actualDate: "",
    month: "",
    year: ""
  });

  const numbers = Array.from({ length: 12 }, (_, index) => index + 1);

  function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let actualDate = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hourNeedle = 30 * hh + mm / 2;
    let minNeedle = 6 * mm;
    let secondNeedle = 6 * ss;

    setTime({ hourNeedle, minNeedle, secondNeedle, actualDate, month, year });
  }

  useEffect(() => {
    const interval = setInterval(displayTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="clock">
        <div className="date">
          {time.actualDate}/
          {time.month}
          /{time.year}
        </div>

        <div class="pendulum">
          <div class="rod" />
          <div class="circle" />
        </div>
        <div
          style={{ transform: `rotate(${time.hourNeedle}deg)` }}
          className="hand"
        >
          <i style={{ height: "110px", width: "6px" }} />
        </div>
        <div
          style={{ transform: `rotate(${time.minNeedle}deg)` }}
          className="hand"
        >
          <i style={{ height: "140px", width: "4px" }} />
          <i />
        </div>
        <div
          className="hand"
          style={{ transform: `rotate(${time.secondNeedle}deg)` }}
        >
          <i style={{ height: "180px", width: "2px" }} />
          <i />
        </div>

        {numbers.map(number =>
          <span key={number} style={{ "--num": number }}>
            <b>
              {number}
            </b>
          </span>
        )}
      </div>
    </div>
  );
}

export default App;

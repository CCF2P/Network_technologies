import React from "react";
import ReactDOM from 'react-dom/client';

function CheckDigit() {
  const [userValue, setUserValue] = React.useState("");
  const onChange = (event) => {
    setUserValue(event.target.value);
  };

  const [f, setF] = React.useState(true);
  const onClick = () => {
    setF(!f);
  }

  return (
    <div>
      <h3>Четное или нечетное число</h3>
      <form>
          <labe>
              Число:
              <input type="number" value={userValue} onChange={onChange} />
          </labe>
          {(f && userValue !== "") && <IsOddOrNot number={userValue} />}
      </form>
    </div>
  );
}


function IsOddOrNot(props) {
  const checkValue = (value) =>
    <p>
      Число: {value}
      {
        Number(value) % 2 === 0 ? " число четное" : " число нечетное"
      }
    </p>

  const listLog = checkValue(props.number);
  
  return (
      <div className="log">
          {listLog}
      </div>
  );
}


export default function Header() {
  return (
    <header>
      <div className="ReturnNumber">
        <div>
          <h2>Hi,</h2>
          <h2>I'm Gorilla!</h2>
          <h4>Welcome to my landing page</h4>
          <p>
            I am gorilla, and i am full stack developer!
            And i love bananas...
          </p>
        </div>
        <div className="ReturnNumber">
          <CheckDigit />
        </div>
      </div>
    </header>
  );
}
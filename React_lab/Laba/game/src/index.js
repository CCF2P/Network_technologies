import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function LogicGame() {
    const [userValue, setUserValue] = React.useState("");
    const [game, setGame] = React.useState(
        {
            value: Math.floor(Math.random() * 100),
            arrValues: [],
            isEnd: false
        }
    );

    const onChange = (event) => {
        setUserValue(event.target.value);
    };
    const handlerSubmit = (event) => {
        event.preventDefault();
        setGame(
            {
                value: game.value,
                arrValues: [...game.arrValues, userValue],
                isEnd: game.value == userValue
            }
        );
    };
    const newGame = () => {
        setUserValue('');
        setGame(
            {
                value: Math.floor(Math.random() * 100),
                arrValues: [],
                isEnd: false
            }
        );
    };

    return (
        <div>
            <h3>Угадай число от 0 до 100</h3>
            <form onSubmit={handlerSubmit}>
                <labe>
                    Число:
                    <input type="number" value={userValue} onChange={onChange}/>
                </labe>
                <input type="submit" value="OK"/>
                <LogGame listLog={game}/>
                {game.isEnd &&
                    <>
                        <ResultGame step={game.arrValues.length}/>
                        <input type="button" value="Новая игра?" onClick={newGame}/>
                    </>
                }
            </form>
        </div>
    );
}


function LogGame(props) {
    const number = Number(props.listLog.value);
    const listLog = props.listLog.arrValues.map((value, index) =>
        <p key={index}>
            {index + 1}.
            Число: {value}
            {
                Number(value) > number ? " больше задуманного" :
                Number(value) < number ? " меньше задуманного" : " Угадал!"
            }
        </p>
    );
    
    return (
        <div className="log">
            {listLog}
        </div>
    );
}


function ResultGame(props) {
    const n = Number(props.step);
    const result = n < 7 ? " Прекрасная логика, да ты еще и везунчик! " :
                   n > 7 ? " Пока не очень, попробуй еще раз..." :
                           " Логика у тебя в крови.";
    return (
        <h3>
            {result}
        </h3>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LogicGame/>
);

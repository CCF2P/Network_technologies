import React, { forwardRef, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: [],
    }
    this.state.isCheck.length = Object.keys(props.data[0]).length;
    this.state.isCheck.fill(true, 0, this.state.isCheck.length);
  }

  check(index) {
    this.setState(({isCheck}) => {
      isCheck[index] = !isCheck[index];
      return isCheck;
    });
  }

  render() {
    const headers = Object.keys(this.props.data[0]);
    const listRow = this.props.data.map((obj) => {
      return(
        <tr>
          {Object.values(obj).map((item, index) => {
            if (this.state.isCheck[index]) {
              return (
                <td className={index}>
                  {item}
                </td>
              );
            }
          })}
        </tr>
      );
    });
      
    return (       
      <>
        <div>
          {headers.map((e, index) => {
            return (
              <div>
                <label className={index}>
                  <input type="checkbox"
                    checked={this.state.isCheck[index]}
                    onChange={() => this.check(index)}/>
                    {e}
                </label>
              </div>
            );    
          })}
        </div>
        <table id="table">
          <thead>
            {headers.map((item, index) => {
              if (this.state.isCheck[index]) {
                return (
                  <th className={index}>
                    {item}
                  </th>
                );
              }
            })}
          </thead>
          <tbody>
            {listRow}
          </tbody>
        </table>
      </>
    );
  }
}


const data = [
  {
    "nate": 1,
    "higgers": 2,
    "and": 3,
    "say": 4,
    "gex": 5
  },
  {
    "nate": 1,
    "higgers": 2,
    "and": 3,
    "say": 4,
    "gex": 5
  },
  {
    "nate": 1,
    "higgers": 2,
    "and": 3,
    "say": 4,
    "gex": 5
  }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Table data={data}/>
);
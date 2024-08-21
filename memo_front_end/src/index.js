import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'

const App = () =>{
    return(
        <div>
            <div className="header">
                <div className="logo">
                    <p className="title">Memo</p>
                </div>
                <div className="add-section">
                    <a className="add-btn" href='#'>Make a Memo</a>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));
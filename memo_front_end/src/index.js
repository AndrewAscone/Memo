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
                    <a className="add-btn" href='#'>Write a Memo</a>
                </div>
            </div>
            <div className="memos">
                <p className="centerText">No Memos</p>
            </div>
            <div className="modal">
                <div className="form">
                    <div className="form-header">
                        <div>
                            <p className="form-header-text">Write a Memo</p>
                        </div>
                        <div>
                             <a href="#" className='close-btn'>X</a>
                        </div>
                    </div>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" className="form-control" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));
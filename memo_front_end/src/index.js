import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import { Note } from './components/note'

const backendURL = 'http://localhost:8000/'

const App = () =>{

    const [modalVisible,setModalVisible]=useState(false);
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [posts,setPosts]=useState([]);

    const createNote = async (event) =>{
        event.preventDefault();

        const postRequest= new Request(
            `${backendURL}/posts/`,
            {
                body:JSON.stringify({title, content}),
                headers:{
                    'Content-Type':'Application/Json'
                },
                method:'POST'
            }
        );

        const response = await fetch(postRequest);

        const data = await response.json();

        if(response.ok){
            console.log(data)
        }
        else{
            console.log("Network request has encountered an error")
        }

        setTitle('')
        setContent('')

        setModalVisible(false)

        getAllPosts()
    }

    const getAllPosts = async () =>{
        const response = await fetch(`${backendURL}/posts/`);

        const data = await response.json()

        if(response.ok){
            console.log(data)
            setPosts(data)
        }
        else{
            console.log("Network request has encountered an error")
        }
    }

    useEffect(
        () =>{
            getAllPosts()
        },[]
    )

    const deleteItem= async (noteId)=>{
        console.log(noteId)

        const response = await fetch(`${backendURL}/posts/${noteId}/`,{
            method:'DELETE'
        })

        if(response.ok){
            console.log(response.status)
        }

        getAllPosts();
    }

    return(
        <div>
            <div className="header">
                <div className="logo">
                    <p className="title">Memo</p>
                </div>
                <div className="add-section">
                    <a className="add-btn" href='#'
                        onClick={()=>setModalVisible(true)}
                    >Write a Memo</a>
                </div>
            </div>
            {posts.length > 0 ? 
                (<div className="post-list">
                    {
                        posts.map(
                            (item)=>(
                                <Note title={item.title} 
                                content={item.content}
                                onclick={()=>deleteItem(item.id)}
                                key={item.id}
                                />
                            )
                        )
                    }
                </div>)
                :(
                    <div className="memos">
                        <p className="centerText">No Memos</p>
                    
                    </div> 
                )
            }
            <div className={modalVisible? 'modal' : 'modal-not-visible'}>
                <div className="form">
                    <div className="form-header">
                        <div>
                            <p className="form-header-text">Write a Memo</p>
                        </div>
                        <div>
                             <a href="#" className='close-btn'
                                onClick={()=>setModalVisible(!modalVisible)}
                             >X</a>
                        </div>
                    </div>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" 
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                className="form-control" 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Text</label>
                            <textarea name="content" id="" cols="30" rows="5" 
                                value={content}
                                onChange={(e)=>setContent(e.target.value)}
                                className="form-control"
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Save" className='btn' onClick={createNote}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));
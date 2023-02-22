import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import envvariables from './envvariables';
import { AiOutlineSend } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
function App() {

  const [Posts, setPosts] = useState([]);
  const [Comments, setComments] = useState([]);
  const [comment, setcomment] = useState({ name: 'lalu', email: 'lalu@gmail.com' })
  const [id, setid] = useState();
  async function getPosts() {
    const data = await axios.get(envvariables.Post_api);
    const posts = data.data;
    setPosts(posts);
  }
  async function GetComment(id) {
    const data = await axios.get(envvariables.Post_api + '/' + id + '/comments', envvariables.api_headers);
    const comments = data.data;
    setComments(comments);
  }


  async function postComment(id) {
    setcomment({ ...comment, post_id: id })
    await axios.post(envvariables.Post_api + '/' + id + '/comments', comment, envvariables.api_headers)
    GetComment(id);
    setcomment({ ...comment, body: '' })
  }
  useEffect(() => {
    getPosts();
  }, [])
  return (
    <div>
      <div className='bg-black py-2 text-white text-xl px-5'>
        <h1>Posts</h1>
      </div>
      <div className="App grid w-[320px] md:w-[768px] grid-cols-1 mx-auto">
        {
          Posts.map((item, index) =>
            <div key={index} className='bg-gray-100 m-2 p-3 rounded-xl shadow-xl hover:shadow-orange-200'>
              <div className='my-2'>
                <p ><span className='w-fit'>User_id : </span> <span>{item.user_id}</span></p>
              </div>
              <div className='my-2'>
                <p ><span className='w-fit'>Title : </span> <span>{item.title}</span></p>
              </div>
              <div className='my-2'>
                <p ><span className='w-fit'>Body : </span> <span>{item.body}</span></p>
              </div>
              <div className='my-2'>
                <button className='text-green-700' onClick={e => { e.preventDefault(); GetComment(item.id); setid(item.id) }}><FaRegCommentDots className='text-xl'></FaRegCommentDots></button>
              </div>
              {
                item.id === id &&
                <div>
                  {
                    Comments.map((comment, index) =>
                      <div key={index}>
                        <div className='my-2'>
                          <div>
                            <p>@{comment.name}</p>
                          </div>
                          <div>
                            <p>{comment.body}</p>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  <div className='flex  py-2'>
                    <input name="" className='border-b-2 bg-gray-100 w-full border-black  focus:outline-none' value={comment.body} onChange={e => setcomment(c => ({ ...c, body: e.target.value }))} id="commentbody" cols="30" rows="3"></input>
                    <button className='px-3' onClick={e => { e.preventDefault(); postComment(item.id); }}><AiOutlineSend></AiOutlineSend></button>
                  </div>
                </div>
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;

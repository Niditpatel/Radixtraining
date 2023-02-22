import './App.css';
import PostList from './components/PostList';
import { FaHeart, FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'
function App() {
  const [likepostlist, setlikepostlist] = useState([]);
  const [show, setshow] = useState(false)
  function Verify(item) {
    const Index = likepostlist.findIndex(value => value.id === item.id)
    return Index;
  }
  const addlikes = (item) => {
    const Index = Verify(item)
    if (Index === -1) {
      setlikepostlist([...likepostlist, item]);
    } else {
      likepostlist.splice(Index, 1);
    }
  }
  const showCart = () => {
    if (show === true) {
      setshow(false)
    }
    else {
      setshow(true)
    }
  }
  return (
    <div className="App">
      <div className="bg-gray-300 h-12 mb-8">
        <div className="container-fluid py-3 px-24 flex justify-between">
          {show ? <a className="navbar-brand text-xl" href="#">Likes</a> :
            <a className="navbar-brand text-xl" href="#">Posts</a>}
          <div>
            <ul className="ms-auto flex space-x-4 mb-2 mb-lg-0">
              {show ?
                <li className="nav-item" id="cart-button">
                  <a className="nav-link" onClick={showCart} href="#">
                    <FaArrowLeft className="fa-solid fa-arrow-left"></FaArrowLeft>
                  </a>
                </li>
                :
                <li>
                  <a className="nav-link" onClick={showCart} href="#">
                    <FaHeart className="fa-regular fa-heart text-xl text-rose-900"></FaHeart>
                  </a>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4  mx-auto w-fit ">
        {show &&
          likepostlist.map(item =>
            <div className="flex shadow-lg rounded-lg hover:shadow-orange-300" >
              <div className="my-1 w-fit">
                <img src={item.PostedImage} className=" w-fit h-24  " alt="" />
              </div>
              <div className=" bg-white w-fit">
                <div className="my-2 mx-2">
                  <h5 className="text-gray-900 text-xl font-medium mb-2"> Name : { item.PostName }</h5>
                  <p><span className="text-gray-900 text-l  font-medium mb-2">Posted On : </span>
                    { (item.PostedDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>

      <div className={show ? 'hidden' : 'show'}>
        < PostList addlikes={addlikes} likepostlist={likepostlist} Verify={Verify}></PostList >
      </div>
    </div >

  );
}

export default App;

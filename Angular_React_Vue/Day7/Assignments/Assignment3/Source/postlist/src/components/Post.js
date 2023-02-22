import { FaHeart } from 'react-icons/fa';
export default function Post(props) {
    const item = props.item
    const addlikes = () => {
        props.addlikes(item);
    }
//    function verify (i) {
//     const Index  = props.likepostlist.find(value => value.id === i.id)
//     console.log(Index);
//         return Index;
//     }
    return (
        <div className="flex justify-center mx-2" key={item.PostDescription}>
            <div className="rounded-lg shadow-lg bg-white max-w-sm  hover:shadow-orange-300">
                <div className="mx-auto my-1 w-fit">
                    <img src={item.PostedImage} className=" w-fit h-48  " alt="" />
                </div>
                <div className="my-2 mx-2">
                    <h5 className="text-gray-900 text-xl font-medium mb-2"> Name : {item.PostName}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        <span className="text-gray-900 text-l  font-medium mb-2">Discription : </span>
                        {item.PostDescription}
                    </p>
                    <p><span className="text-gray-900 text-l  font-medium mb-2">Posted On : </span>
                        {(item.PostedDate).toLocaleDateString()}</p>
                </div>
                <div className="w-fit mr-auto ml-2 my-2">
                    <button type="button" className="text-gray-200 text-2xl" onClick={addlikes}>
                       {
                        props.verify(item) === -1  ? 
                        <FaHeart className='text-gray-200'></FaHeart>
                         :
                        <FaHeart className='text-rose-600'></FaHeart> 
                       }  
                    </button>
                </div>
            </div>
        </div>
    )
}
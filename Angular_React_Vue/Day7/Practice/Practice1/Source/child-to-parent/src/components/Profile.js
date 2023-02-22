export default function Profile(props){
return(
    <>
    <label className="text-xl">Name : </label>
    <input type="text" className="border border-black px-1" name='Name' id='name' onChange={e=>props.handlecallback(e.target.value)}/>
    </>
)
}
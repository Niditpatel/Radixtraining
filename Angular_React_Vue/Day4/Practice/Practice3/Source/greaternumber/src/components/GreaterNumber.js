
function GreaterNumber(props){
    return(
        <>
        {
            props.num1>props.num2 ? (<span>{props.num1}</span>) : (<span>{props.num2}</span>)
        }
        </>
    )
}


export default GreaterNumber;
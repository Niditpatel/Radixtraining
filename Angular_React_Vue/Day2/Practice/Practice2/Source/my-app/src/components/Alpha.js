import './Alpha.css'

function Alpha(){
    let arr=[];
    for( let i = 65 ;i<= 90;i++){
        arr.push(String.fromCharCode(i));
    }
    const alphabates = arr.map((a)=>
        <li>{(a)}</li>
    );
    
    return(
        <ul class="Alpha">{alphabates}</ul>
    );
}

export default  Alpha;
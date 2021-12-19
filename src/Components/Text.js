import React,{useState,useEffect} from 'react'

export default function Text(props) {
  const [text,setText]= useState("");
  const [counter, setcounter] = useState(0);

  //Counting Number of words typed
  
    useEffect(() => {      
        let a=text.split(" ");
        let c=0;
        for(let i=0;i<a.length;i++)
        {
        if(a[i].trim().length!==0)
        {
          c++;

        }

        }
        setcounter(c);      
      return () => {        
      }
    },[text])

    //Converts text to UpperCase
    const ChangeUpper=()=>{
       
      setText(text.toUpperCase());
      props.setmsg("Converted to UpperCase");
    }
    //Converts text to Lowercase
    const ChangeLower=()=>{
        
      setText(text.toLowerCase());
      props.setmsg("Converted to LowerCase");
    }
    //Converts text Intials to capitals 
    const ChangeCapitals=()=>{
        
        let t=text.split(".");
        let para="";
        for(let i=0;i<t.length;i++)
        {   if(t[i].trim().length!==0)
            {para+=t[i].trim().charAt(0).toUpperCase()+t[i].trim().slice(1)+". "}

        }
        setText(para);
        props.setmsg("Converted to Sentence Cased");
      }

      //Clear all text in textbox

      const Clear=()=>{
        setText('');
        props.setmsg("All Clear!");
      }
    const HandleOnchange=(event)=>{
        setText(event.target.value);
    }
   
    return (
        
        <div >
        <div className="container my-4" >

            <h1>{props.heading}</h1>
            <div className="mb-3" >
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} placeholder="Enter Your Text Here..."  onChange={HandleOnchange} rows="8"></textarea><br />
            <button className="btn btn-primary" onClick={ChangeUpper}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={ChangeLower} >Convert to LowerCase</button>
            <button className="btn btn-primary " onClick={ChangeCapitals} >Sentance Case</button>
            <button className="btn btn-primary mx-3" onClick={Clear} >Clear</button>
         

            </div>

        
            
        </div>
        
        <div className="container my-4" >
            <h2>Word & Characters Counter</h2>
            <p>Words: {counter} Characters: {text.length}</p>
            <h2>Approx time to read</h2>
            <p>{0.008*text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>
            
       </div>
      

    )
}

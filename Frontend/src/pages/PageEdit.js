import React,{useState} from 'react';
import TextEditor from '../common/TextEditor';
import { saveAs } from 'file-saver'
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import Highlighter from "react-highlight-words";

function PageEdit(props) {
    const [value, setValue] = useState('This is the value intially');
    const [imageState, setImageState] = useState('https://pbs.twimg.com/profile_banners/18551759/1668616935/1500x500')
    const [formState, setFormState] = useState("edit")

    const downloadImage = () => {
        saveAs(imageState, 'image.jpg') // Put your image url here.
      }

    const handleBack =()=>{
        setImageState("empty")
    }  

    const handleSave =()=>{
        setFormState("view")
    }  

    const  handleEdit =()=>{
        setFormState("edit")
    }  


    const getValue =()=>{
       return parse(value).props.children
    }


   

    return (
        <div style={{width:"100vw", display:"flex"}}>
                {formState==="edit"?<div style={{margin:"50px"}} class="editor-container" >
                    <div className='flexrow wideapart'>
                        <h3>Todays' note</h3>
                        <button onClick={handleSave}className='btnn btnn-small'>Save notes</button>
                    </div>
                    <TextEditor value={value} setValue={setValue}/>
                </div>:   
                
                <div class="editor-container">
               
                    <div style={{margin:"50px", background:"white", padding:"50px"}}>
                    <div className='flexrow wideapart'>
                        <h2>Todays' note</h2>
                        <button onClick={handleEdit}className='btnn btnn-small'>Edit note</button>
                    </div>

                    <Highlighter
    highlightClassName="YourHighlightClass"
    searchWords={["and", "or", "the"]}
    autoEscape={true}
    textToHighlight={getValue()}
  />

                    </div>
                </div>
                
                
                
                }
             <div style={{margin:"50px"}} className='bluecontainer'>
              {imageState==="empty"?
              
              <div>
                  Write something and create images for your notes.
                  <input className='input--custom input--width'></input>
                  <button className='btnn btnn-primary btnn-strech'>Create Image</button>
           
              </div>
            :
            <div style={{textAlign:"center"}}>
                <img style={{width:"400px"}} src={imageState}></img>
                <button  onClick={downloadImage} className='btnn btnn-secondary btnn-strech'>Download Image</button>
                <div onClick={handleBack} className='link-style'>
        {" "}
        <BiArrowBack /> Create new image
      </div>
            </div>
            }


            </div> 

        </div>
    );
}

export default PageEdit;
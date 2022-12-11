import React,{ useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router";
import { FcAudioFile} from "react-icons/fc";
import { AiFillAudio} from "react-icons/ai";
import UploadButton from '../common/UploadButton';
import { toast } from "react-toastify";
import { message } from "antd";
import FileUpload from '../common/FileUpload';
import axios from "axios";

function Home() {

    const apiPoint = process.env.REACT_APP_API_POINT; 
    let [user, setUser] = useState({});
    let [formState, setFormState] = useState("first");
    const [fileList, setFileList] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const url = history.location.pathname;



    const handleClick =()=>{
      setFormState("second")
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const { data } = await userService.allUserDetails();
    //       if (!data.listingId) window.location = "/welcome";
    
    //       setUser(data);
    
    //       const response = await listingService.allCompanyDetails(data.companyId);
    
    //       let postsReceived = response.data.posts;
    
    //       setCompany(response.data)
    
    //       if (searchQuery) {
    //         postsReceived = response.data.posts.filter((m) =>
    //           m.url.toLowerCase().includes(searchQuery.toLowerCase())
    //         );
    //         let postsPending = response.data.posts.filter(
    //           (m) => !m.url.toLowerCase().includes(searchQuery.toLowerCase())
    //         );
    
    //         postsPending.map((item) => (item.visibility = "no"));
    //         posts = [...postsReceived, ...postsPending];
    //         setPosts(posts);
    //         return;
    //       }
    
    //       setPosts(postsReceived);
    //     };
    //     fetchData();
    //   }, [searchQuery]);


    const props: UploadProps = {
      name: 'file',
      action: '',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        console.log(info)
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    






    const handleSubmit = async (req, res) => {
      const mySecret = process.env['API_KEY']
    
    
      const assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
          authorization: 'b18b8a1f65774b0c9283b9248a605bc1',
          "content-type": "application/json",
        },
      });
    
      try {
        const response = await assembly.post("/transcript", {
          audio_url: req.body.data.url,
        });
    
        res.status(200).json(response.data);
      } catch (error) {
        console.error(error);
      }
    };



if(formState==="first")
    return (
        <div style={{width:"100vw", height:"100vh"}} className='flexcolumn flexcolumn--allcenter'>
     <h1>Transform your voice recordings into  powerful  <br/>and beautiful notes with our tool.</h1>
     <div className="bluecontainer ">
   <div className='flexrow'>
     <div onClick={()=>setFormState("second")}  className='selectcontainer'>
       <FcAudioFile  />
       <h3 style={{marginTop:"10px"}}>Upload Audio</h3>

     </div>
     <div onClick={()=>setFormState("third")}  className='selectcontainer'>
       <AiFillAudio/>
       <h3 style={{marginTop:"10px"}}> Live Audio</h3>

     </div>
   </div>
 </div>
        
        </div>
    );

if(formState==="second")
return (
<div style={{height:"100vh"}}className='flexcolumn flexcolumn--allcenter'>
<div className="bluecontainer ">
  <div className='flexcolumn flexcolumn--allcenter'>
    <h3>Upload your voice recordings</h3>
    <FileUpload/>
    <button onClick={ handleSubmit} className='btnn btnn-primary'>Submit</button>
  </div>
  </div>
</div>
)

if(formState==="third")
return (
  <h3>Live Video</h3>
)



}

export default Home;
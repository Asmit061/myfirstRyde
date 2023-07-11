import {useRef, useState} from 'react';
import './App.css';

function App() {
  const fileInputRef = useRef();
  const [file,setFile] = useState('');
  const logo = "https://images.idgesg.net/images/article/2019/09/cw_ss_top_10_file-sharing_options_3x2_2400x1600_00_cover-100811086-large.jpg?auto=webp&quality=85,70";
  const onUploadClick = ()=>{
    fileInputRef.current.click();
  }
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div class="wrapper">
        <h1>File Sharing!</h1>
        <p>Upload and share the download link</p>
        <button onClick={()=> onUploadClick()}>Upload</button>
        <input type="file" 
          ref={fileInputRef}
          style={{display: 'none'}}
          onChange={(e)=>{setFile(e.target.files[0])}}
        />
      </div>
    </div>
  );
}

export default App;

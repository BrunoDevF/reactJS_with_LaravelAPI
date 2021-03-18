import React, { useEffect, useState } from 'react';


import API from './api/Api';
import File from './pages/File/File';


import img from './assets/img.jpg';
import './pages/Home/style.css';



function App() {
  const [fileList,setFileList] = useState([]);
  const [file,setFile] = useState(null);

  useEffect(()=>{
    requestList();
  },[]);

  const requestList = async () => {
    const fileList = await API.list();
    setFileList(fileList);

    //console.log(fileList);
  }

const handleSubmit = async (e) => {
  e.preventDefault();

  await API.upload(file);

  console.log(file);

  //setFile(null);
  requestList();
}

  return (
  <div className="App">
    <div id="page-home">
          <div className="content">
              <main>
                  <div className="upload">
                      <form onSubmit={handleSubmit} >
                          <label htmlFor="file">Faça upload de seus arquivos</label>
                          <input type="file" name="files" id="file"
                          onChange={
                            e=>{
                              setFile(e.target.files[0])
                            }
                          } />

                          <button>Enviar arquivo</button>
                      </form>
                  </div>
                  <div className="img">
                      <img src={ img } alt=""/>
                  </div>
              </main>
          </div>
      </div>
    <div>
      <File data={fileList}></File>
    </div>
  </div>
);
}

export default App;

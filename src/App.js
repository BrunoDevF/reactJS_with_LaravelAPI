import React, { useEffect, useState } from 'react';


import API from './api/Api';
import File from './pages/File/File';
import './pages/File/style.css';

import Vitrine from './pages/Vitrine/Vitrine'


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

    console.log(fileList);
  }

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log(file);
  await API.upload(file);


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
                  <input type="file" name="file" id="file"
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
          <div>
            <>
            <tr>
              <td>ID</td>
              <td>Nome</td>
              <td>tipo</td>
              <td>Tamanho</td>
              <td>url</td>
          </tr>
            {
              fileList.map(file => <File data={file} />)
            }
            {/* {fileList.map((item, index) => {
                <File data={item} key={index} />
            })} */}
            </>
        </div>
    </div>
  </div>
);
}

export default App;

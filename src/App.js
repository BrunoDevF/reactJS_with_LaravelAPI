import React, { useEffect, useState } from 'react';

import API from './api/Api';
import File from './pages/File/File';
import './pages/File/style.css';
import './pages/Home/style.css';

function App() {
  const [fileList,setFileList] = useState([]);

  const [folder,setFolder] = useState(null);

  const [file,setFile] = useState(null);

  useEffect(()=>{
    requestList();
  },[]);

  const requestList = async () => {
    const fileList = await API.list();
    setFileList(fileList);
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  await API.upload(file,folder);


  requestList();
}

return (
  <div className="App">
    <div id="page-home">
        <div className="content mg-top-bottom">
            <main>
              <div className="upload">
                <form onSubmit={handleSubmit} >
                  <label id="_file" htmlFor="file">Clique aqui para enviar seus arquivos</label>
                  
                  <input type="file" name="file" id="file"
                    onChange={
                    e=>{
                      setFile(e.target.files[0]);
                      }
                    } 
                  />
                  <div className="pasta">
                    <label>Deseja agrupar esse arquivo em uma pasta?</label>
                    <input type="text" name="pasta" placeholder="Digite aqui o nome da pasta..." 
                    onBlur={
                      (e)=> {
                        setFolder(e.target.value)
                      }
                    } 
                    />
                    <p>Obs.: Caso não escolha nenhum nome para pasta os arquivos serão salvos na pasta DROP.</p>
                  </div>
                    <button>Enviar arquivo</button>
                </form>
              </div>
            </main>
          </div>
          <div className="content">
            <div className="bg-radius">
                <div className="file">
                  <div className="line">
                    {fileList &&  (
                      <table>
                        <tr>
                          <td>ID</td>
                          <td>Nome</td>
                          <td>tipo</td>
                          <td>Tamanho</td>
                          <td>url</td>
                        </tr>
                      </table>
                    )} 
                  </div>
                </div> 

              <div className="bg"> 
                {
                  fileList.map(file => <File data={file} />)
                }
              </div>
          </div>
        </div>
    </div>
  </div>
);
}

export default App;

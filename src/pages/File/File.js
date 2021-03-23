import React from 'react';

const File = (props) => {


    return (
        <div className="file">
            <div className="line">
                <table>
                    <tbody>
                        <tr>
                            <td>{props.data.id}</td>
                            <td>{props.data.name}</td>
                            <td>{props.data.type}</td>
                            <td>{(props.data.size/1000)}</td>
                            <td>
                                <div className="pop-up">
                                    <input type="text"   value={props.data.url} />
                                </div>
                                {/* <button onClick={props.click} className="button-copy-link">Copiar endereço do arquivo</button> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default File;
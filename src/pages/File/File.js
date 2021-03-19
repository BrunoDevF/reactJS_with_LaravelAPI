import React from 'react';
const File = (props) => {
    return (
        <div className="file">
            <div className="line">
                <table>
                    
                    <tr>
                        <td>{props.data.id}</td>
                        <td>{props.data.name}</td>
                        <td>{props.data.type}</td>
                        <td>{props.data.size}</td>
                        <td>{props.data.url}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default File;
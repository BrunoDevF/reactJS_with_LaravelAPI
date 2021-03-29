import React from 'react';

const Folder = (props) => {
    const name = props.directorie;
    return (
        <div>
            nome da pasta: {props.item}
            <div>
                <p>{name}[{props.item}]</p>
            </div>
        </div>
    );
}

export default Folder;
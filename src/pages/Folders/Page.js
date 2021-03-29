import React, { useState, useEffect } from 'react';
import Folder from './Folder';

const Page = () => {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/dir')
            .then((response) => response.json())
            .then(setNodes);
    }, []);

    return (
        <div>
            {nodes.map((node) => (
                <Folder {...node} />
            ))}
        </div>
    );
};

export default Page;
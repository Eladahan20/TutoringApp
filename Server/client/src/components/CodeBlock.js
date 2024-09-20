import React from 'react';
import { useParams } from 'react-router-dom';

const CodeBlock = () => {
    const { id } = useParams(); // Get the route parameter

    return (
        <div>
            <h1>Code Block {id}</h1>
            <p>Code block content goes here...</p>
        </div>
    );
};

export default CodeBlock;

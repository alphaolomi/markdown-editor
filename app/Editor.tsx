import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Editor = () => {

    const [markdown, setMarkdown] = useState('# sup');

    return (
        <div className="bg-gray-100 min-h-screen p-12">
            <div className="container mx-auto">
                <textarea className="bg-gray-200 p-10 rounded shadow-xl w-full h-96" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
                <ReactMarkdown className="prose" children={markdown} />
            </div>
        </div>
    )
}
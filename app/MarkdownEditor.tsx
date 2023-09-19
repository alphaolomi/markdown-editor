'use client'
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

export default function MarkdownEditor() {
    const text = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:
`   
    const [markdown, setMarkdown] = useState(text);

    return (
        <div className="container mx-auto">
            <div className="flex">
                <div className="w-1/2">
                    <textarea 
                        className="w-full h-[700px] p-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
                        value={markdown}
                        onChange={e => setMarkdown(e.target.value)}
                    />
                </div>
                <div className="w-1/2 p-4">
                    <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
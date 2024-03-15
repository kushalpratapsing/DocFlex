import React, { useRef } from 'react'; // Added import for useRef
import Card from './Card';

function Foreground () {
    const ref = useRef(null); // Corrected useRef
    const data= [
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit ame",
            filesize: ".9mb",
            close: true,
            tag: { isopen: true, tagtitle: "Download now", tagcolor: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit ame",
            filesize: ".9mb",
            close: true,
            tag: { isopen: true, tagtitle: "Download now", tagcolor: "blue" }
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit ame",
            filesize: ".9mb",
            close: true,
            tag: { isopen: false, tagtitle: "Download now", tagcolor: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit ame",
            filesize: ".9mb",
            close: true,
            tag: { isopen: false, tagtitle: "Download now", tagcolor: "green" }
        }
    ];

    return (
        <div ref={ref} className='p-6 fixed z-[3] top-0 left-0 w-full h-full flex gap-8 flex-wrap'>
            {data.map((item, index) => (
                <Card key={index} data={item} reference={ref} /> // Removed comma after Card component
            ))}
        </div>
    );
}

export default Foreground;




import React from 'react';
import { FaFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({data, reference}) {
  return (
    <motion.div drag whileDrag ={{scale:1.2}} dragConstraints={reference} className='flex-shrink-0 relative w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white py-10 px-8 overflow-hidden'>
      <FaFileLines />
      <p className='text-xs leading-tight m-5 font-semibold'>{data.desc}</p>
    
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex item-center justify-between px-8 py-3 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-5 bg-zinc-600 rounded-full flex item-center justify-center'>
            {data.colse ? <IoMdClose /> : <LuDownload size=".8em" color='#fff' />}
          </span>
        </div>

        {data.tag.isopen && (
          <div className={`tag py-4 w-full ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;

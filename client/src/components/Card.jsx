import React from 'react'

import { download } from '../assets';
import { downloadImage } from '../utils';

export const Card = ({id, name, prompt, photo}) => {
  return (
    <div className='rounded-xl groups relative'>
      <img className='w-full h-auto object-cover rounded-xl'
       src={photo} alt={prompt}/>
       <div>
        <p className='text-white text-sm'>{prompt}</p>

        <div>
          <div>
            <div className='w-7 h-7 rounded-full object-cover'>
              {name[0]}
            </div>
            <p className='text-white text-sm'>{name}</p>
          </div>
          <button type="button" onClick={() => downloadImage(_id, photo)}>
            <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
          </button>
        </div>
       </div>
    </div>
  )
}

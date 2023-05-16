import { useState, useEffect } from 'react';

import { copy, linkIcon, loader, tick, enter  } from "../assets";

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
    });

    const handleSubmit = async (e) => {
      alert('Submitted')
    }
  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* {Search} */}

      <div className='flex flex-col w-full gap-2'>
    <form 
    className='relative flex justify-center items-center'
    onSubmit={handleSubmit}
    >
      <img 
      src={linkIcon} 
      alt="link_icon" 
      className='ml-3 w-5 absolute left-0 my-2' />

      <input type='url'
      placeholder='Enter your URL'
      value={article.url}
      onChange={(e) => setArticle({
        ...article, url: e.target.value
      })}
      required
      className='url_input peer' />

      <button 
      type='submit'
      className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
        <img 
        src={enter} 
        alt="enter"
        className='w-3 h-3' />
      </button>
    </form>

    {/* Browse URL History */}
      </div>

      {/* Display results */}
    </section>
  )
}

export default Demo
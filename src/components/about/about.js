import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';
const About = () => {
  return (
    <>
      <div className='flex min-h-screen flex-col items-center '>
        <div className='bg-gradient-to-r w-full from-violet-500 to-fuchsia-500 py-32 px-4'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-6xl text-white font-bold mb-7 '>About</h1>
            <h4 className='text-base font-normal text-gray-200'>
              MovieKyuu is just a small website I built for finding and sharing
              movies that interest you.
            </h4>
            <h4 className='text-base font-normal text-gray-200 mt-1'>
              <span className='font-bold'>NO SIGNUP REQUIRED</span> all movies
              added to list are saved locally to device.
            </h4>
          </div>
        </div>
        <div className='flex flex-col w-3/4 min-h-full p-10'>
          <div className='text-white max-w-4xl mx-auto'>
            <h1 className='text-3xl font-bold mb-4'>Source and Socials</h1>
            <p className='border-t border-gray-600 py-4 text-lg font-normal'>
              Source code is available here on my {'  '}
              <Link
                to='https://github.com/muhammedsubhan/moviekyuu-website'
                target='_blank'
                rel='noreferrer'
                aria-label='github link'
                className='underline underline-offset-4 hover:text-gray-500'
              >
                Github
              </Link>{' '}
              if you liked the project and want to see more like it feel free to
              follow me at @whoissubhanbytheway
            </p>
          </div>
          <div className='text-start text-white'>
            <div className=' max-w-4xl mx-auto mt-5  border-b border-gray-600 pb-2 text-3xl font-semibold'>
              <h1 className='scroll-m-20 tracking-tight transition-colors first:mt-0'>
                FAQ
              </h1>
            </div>
            <div className='max-w-4xl mx-auto'>
              <Accordion type='single' collapsible className='w-full '>
                <AccordionItem
                  value='item-1'
                  className='font-medium border-b border-gray-600 py-4 text-base '
                >
                  <AccordionTrigger className='hover:underline hover:ring-offset-4'>
                    Why MovieKyuu?
                  </AccordionTrigger>
                  <AccordionContent className='mt-3 text-gray-300'>
                    MovieKyuu is a play on words with &quot;Queue&quot; and my
                    username 😅
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value='item-2'
                  className='font-medium border-b border-gray-600 py-4 text-base '
                >
                  <AccordionTrigger className='hover:underline hover:ring-offset-4'>
                    Where is my list being saved?
                  </AccordionTrigger>
                  <AccordionContent className='mt-3 text-gray-300'>
                    All saved data is being stored into your browsers local
                    storage. Requiring no signups or logins, your data is yours.
                    <br />
                    <br />
                    <b className='text-sm text-gray-300'>
                      Note: Because data is stored in browser, cleaning browser
                      cache can result in emptying your list, and lists are not
                      transferable to other devices.
                    </b>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

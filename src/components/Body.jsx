import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { BsCloudDownload } from 'react-icons/bs';
import ReactToPrint from 'react-to-print';
import Editor from './Editor';
import Resume from './Resume';

const Body = () => {
  const colors = ['#3C486B', '#FF6000', '#19376D', '#000000'];

  const sections = {
    basisinfo: 'Basic info',
    education: 'Education',
    workExp: 'Work Experience',
    project: 'Projects',
    achivement: 'Achivement',
    summery: 'Summery',
    other: 'Others',
  };

  return (
    <>
      <Text
        textAlign={'center'}
        fontSize={'3xl'}
        textColor={'blue.800'}
        fontWeight={'bold'}
        marginTop={'10'}
      >
        Resume Builder
      </Text>
      <div className="flex justify-evenly w-[90%] m-auto gap-2">
        <div className="flex  w-[90%] m-auto gap-2">
          {colors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className="w-8 h-8 rounded-full cursor-pointer "
            ></div>
          ))}
        </div>

        <ReactToPrint
          trigger={() => (
            <Button bgColor={'blue.600'} textColor={'white'} paddingX={'10'}>
              <BsCloudDownload size={25} />
            </Button>
          )}
          content={() => document.querySelector('#resume-to-print')}
        />
      </div>
       <p className='sm:block md:hidden lg:hidden mx-2 my-3 p-1 text-lg text-blue-600'> 
         
         preview and download resume* click on <span className='font-mono'>download</span>
        </p>

      <div className="mt-16 w-[80%] mx-auto shadow-2xl border min-h-[35rem] mb-5">
        <Editor sections={sections} />
      </div>

      <div id="resume-to-print" className="resume-wrapper">
        <Resume />
      </div>

      <style jsx>{`
        @media only screen and (max-width: 600px) {
          .resume-wrapper {
            display: none;
          }
          .resume-wrapper.printable {
            display: block;
            visibility: hidden;
            position: absolute;
            top: -9999px;
            left: -9999px;
          }
        }
      `}</style>
      <style>
        {`@media print {
          .resume-wrapper.printable {
            display: block;
            visibility: visible;
            position: static;
            top: auto;
            left: auto;
          }
        }`}
      </style>
    </>
  );
};

export default Body;


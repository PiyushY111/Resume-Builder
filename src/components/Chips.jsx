import { HStack, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
// import { removeWork } from '../Redux/slice/UserSlice';

const Chips = ({name,item,id ,arr,updater,updateHandler}) => {

  const dispatch=useDispatch();



  function deleteHandler()
  {
    const filterArr=arr.filter((item)=>item.id!==id);
    console.log("fire ",name,id,filterArr)
    dispatch((updater(filterArr)));
  }
  return (
    <>
         <HStack spacing={4} marginX={'3'} marginY={'3'} cursor={'pointer'}>
  {['md'].map((size) => (
    <Tag
      size={size}
      key={size}
      borderRadius='full'
      variant='solid'
      colorScheme='green'
    >
      <TagLabel onClick={()=>updateHandler(id,name)}>{name} {item}</TagLabel>
      <TagCloseButton onClick={deleteHandler} />
    </Tag>
  ))}
</HStack>
    </>
  )
}

export default Chips
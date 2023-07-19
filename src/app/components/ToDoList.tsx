'use client';

import { useState } from 'react';
import { Button, Input } from '@components/index';

const ToDoList = () => {
  const [listItem, setListItem] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const AddNewItem = () => {};

  const CheckDone = () => {};

  const Delete = () => {};

  return (
    <div className='flex flex-col gap-2 opacity-75 bg-blue-400 border-solid border-blue-200 border-2 rounded-lg p-4 w-full'>
      <h1 className='text-2xl mb-4 font-bold'>TO DO LIST</h1>
      <div className='flex'>
        <Input
          className='rounded-lg p-1.5 md:p-2 mr-2 md:mr-6 '
          type='text'
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeholder='New List item'
        />
        <Button
          className='bg-white font-bold py-1 px-2 border-solid border-1 border-gray-400 rounded-full hover:bg-blue-600 hover:text-white'
          onClick={AddNewItem}
        >
          Add
        </Button>
        {/* <Button className='' onClick={CheckDone}>
          Done
        </Button>
        <Button className='' onClick={Delete}>
          Delete
        </Button> */}
      </div>
      <div>
        <ul>{}</ul>
      </div>
    </div>
  );
};

export default ToDoList;

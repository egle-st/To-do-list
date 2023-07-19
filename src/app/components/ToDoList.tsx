'use client';

import { useState } from 'react';
import { Button, Input } from '@components/index';

const ToDoList = () => {
  const [listItem, setListItem] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [hoveredItem, setHoveredItem] = useState('');

  const AddNewItem = () => {
    setListItem([...listItem, inputValue]);
    setInputValue('');
  };

  const CheckDone = () => {};

  const Delete = (item: string) => {
    const newListWithoutDeletedItem = listItem.filter((itemOfList) => {
      return itemOfList !== item;
    });
    setListItem(newListWithoutDeletedItem);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      AddNewItem();
    }
  };

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
          onKeyDown={handleKeyDown}
        />
        <Button
          className='bg-white font-bold py-1 px-2 border-solid border-1 border-gray-400 rounded-full hover:bg-blue-600 hover:text-white'
          onClick={AddNewItem}
        >
          Add
        </Button>
      </div>
      <div>
        <ul>
          {listItem.map((item) => {
            return (
              <div
                key={`${item + 1}`}
                className='flex bg-blue-100 p-4 rounded-2xl mb-4 items-center cursor-pointer'
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem('')}
              >
                <li className='mr-6 font-bold text-sm md:text-lg '>{item}</li>
                <div
                  className={`flex ${
                    hoveredItem === item ? 'block' : 'hidden'
                  }`}
                >
                  <Button
                    className='mr-4 text-white  bg-green-600 hover:bg-green-500 border-solid rounded-2xl border-1 border-white py-1 px-2'
                    onClick={CheckDone}
                  >
                    Done
                  </Button>
                  <Button
                    className='text-white bg-red-800 hover:bg-red-600 border-solid rounded-2xl border-1 border-white py-1 px-2'
                    onClick={() => Delete(item)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;

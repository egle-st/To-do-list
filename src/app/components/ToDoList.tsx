'use client';

import { useState } from 'react';
import { Button, Input } from '@components/index';

interface ListItemsArray {
  text: string;
  done: boolean;
}
const ToDoList = () => {
  const [listItem, setListItem] = useState<ListItemsArray[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [hoveredItem, setHoveredItem] = useState('');
  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);

  const AddNewItem = () => {
    const newItemObject = { text: inputValue, done: false };
    setListItem([...listItem, newItemObject]);
    setInputValue('');
  };

  const handleDoneButton = (item: ListItemsArray) => {
    if (listItem && listItem.length > 0) {
      const newList = listItem.map((prevItem) => {
        if (prevItem.text === item.text) {
          return { ...prevItem, done: !prevItem.done };
        } else {
          return prevItem;
        }
      });
      let notDoneItems = [];
      let doneItems = [];
      notDoneItems = newList.filter((item) => {
        return item.done === false;
      });
      doneItems = newList.filter((item) => {
        return item.done === true;
      });
      const doneAndUndoneLists = [...notDoneItems, ...doneItems];
      setListItem(doneAndUndoneLists);
    }
  };

  const Delete = (item: ListItemsArray) => {
    const newListWithoutDeletedItem = listItem.filter((itemOfList) => {
      return itemOfList.text !== item.text;
    });
    setListItem(newListWithoutDeletedItem);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      AddNewItem();
    }
  };

  const handleDeleteAll = () => {
    setListItem([]);
  };

  return (
    <div className='flex flex-col gap-2 opacity-75 bg-blue-400 border-solid border-blue-200 border-2 rounded-lg p-4 w-full'>
      <h1 className='text-2xl mb-4 font-bold'>TO DO LIST</h1>
      <div className='flex flex-col sm:flex-row gap-2 items-center justify-center md:justify-start'>
        <Input
          className='rounded-lg p-1.5 md:p-2 mr-2 mb-4 md:mb-2 md:mr-6 '
          type='text'
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeholder='New List item'
          onKeyDown={handleKeyDown}
        />
        <Button
          className='bg-blue-800 font-bold w-24  text-xs md:mr-2 py-1 px-1.5 border-solid border-2 border-blue-700 rounded-full mb-2 hover:bg-blue-600 text-white'
          onClick={AddNewItem}
        >
          Add
        </Button>
        <Button
          className=' font-bold w-24 text-xs md:mr-2 py-1 px-1.5 border-solid border-2 border-red-900 rounded-full mb-2 bg-red-800 hover:bg-red-600 text-white'
          onClick={handleDeleteAll}
        >
          Delete All
        </Button>
      </div>
      <div className='mt-6'>
        <ul>
          {listItem.map((item) => {
            if (item.text !== '')
              return (
                <div
                  key={`${item.text + 1}`}
                  className={`flex p-4 rounded-2xl mb-4 items-center cursor-pointer ${
                    item.done ? 'bg-green-500' : 'bg-blue-100'
                  }`}
                  onMouseEnter={() => setHoveredItem(item.text)}
                  onMouseLeave={() => setHoveredItem('')}
                >
                  <li
                    className={`mr-6 font-bold text-sm md:text-lg ${
                      item.done ? `${`line-through decoration-2`}` : ''
                    }`}
                  >
                    {item.text.slice(0, 1).toUpperCase() + item.text.slice(1)}
                  </li>
                  <div
                    className={`flex  ${
                      hoveredItem === item.text ? 'block' : 'hidden'
                    }`}
                  >
                    <Button
                      className='mr-4 text-white text-xs bg-green-600 hover:bg-green-500 border-solid rounded-2xl border-2 border-emerald-800 py-1 px-2'
                      onClick={() => handleDoneButton(item)}
                    >
                      {`${item.done ? 'Undone' : 'Done'}`}
                    </Button>
                    <Button
                      className='text-white bg-red-800 text-xs hover:bg-red-600 border-solid rounded-2xl border-2 border-red-900 py-1 px-2'
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

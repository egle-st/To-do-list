'use client';

import { FC } from 'react';
import { Button, Input } from '@components/index';

const AddNewItem = () => {};

const CheckDone = () => {};

const Delete = () => {};

const ToDoList = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h1>TO DO LIST</h1>
      <div className='flex'>
        <Input className='' />
        <Button className='' onClick={AddNewItem}>
          Add
        </Button>
        <Button className='' onClick={CheckDone}>
          Done
        </Button>
        <Button className='' onClick={Delete}>
          Delete
        </Button>
      </div>
      <div>
        <ul>{}</ul>
      </div>
    </div>
  );
};

export default ToDoList;

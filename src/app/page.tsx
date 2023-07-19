import { ToDoList, Text } from '@components/index';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-backgroundimage bg-cover  '>
      <div className=' flex flex-col w-5/6  justify-center items-center mt-20 gap-4 p-2 font-mono text-sm'>
        <ToDoList />
        <Text
          text='Photo by Andy Holmes on Unsplash'
          className='text-white absolute bottom-3 right-2'
        />
      </div>
    </main>
  );
}

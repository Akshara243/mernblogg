import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>
          Share your thoughts, ideas, and stories with the world!
        </h2>
        <p className='text-gray-500 my-2'>
          Join BlogSphere today and start creating, editing, and engaging with a 
          community that values your voice.
        </p>
        <a
          href='/create-post'
        >
          <Button
            gradientDuoTone='purpleToPink'
            className='rounded-tl-xl rounded-bl-none rounded-br-xl w-full'
          >
            Start Writing
          </Button>
        </a>
      </div>
      <div className='flex-1 p-7'>
        <img src='https://media.istockphoto.com/id/490183446/photo/responsive-design-mockup.jpg?s=612x612&w=0&k=20&c=lmo6f5MxGwORRPy-oh0RIAQJRBWua530mtPhW5UquUE=' />
      </div>
    </div>
  );
}

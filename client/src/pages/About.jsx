import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About BlogSphere
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to BlogSphere! Our platform is designed to be a dynamic space 
              where writers, thinkers, and creators can share their ideas, stories, 
              and expertise with the world.
            </p>

            <p>
              BlogSphere hosts a variety of content, including personal blogs, 
              technical guides, lifestyle tips, and industry insights. Whether you're 
              a seasoned writer or just starting out, our platform gives you the tools 
              to express yourself and connect with a like-minded community.
            </p>

            <p>
              Engage with other readers by leaving comments, liking posts, and joining 
              discussions. We believe that the best ideas emerge from collaboration, 
              so we encourage meaningful conversations and knowledge sharing.
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}

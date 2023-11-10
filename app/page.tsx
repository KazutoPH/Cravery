import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-full">
      <div className='content-container flex flex-row'>
      <div className='flex flex-1 items-center justify-center'>
        <div className='flex flex-col items-center'>
          <h1 className='text-dark text-4xl font-extrabold'>Your Favorite<br/>
          <span className='text-6xl text-primary'> Food Cravings </span><br/>
          On The Go...
          </h1>

        <div className='mt-10'>
          <button className='bg-primary py-3 px-4 rounded-md text-xl font-bold text-white'>
              Order Now
          </button>
        </div>
        </div>
      </div>
      <div className='flex flex-1 relative min-h-[600px]'>
        <Image
        src='/assets/food.png'
        alt='food.jpeg'
        fill
        priority
        sizes=''
        className='object-contain'
        />
      </div>
      </div>
    </main>
  )
}

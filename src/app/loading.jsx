import Image from 'next/image'
const loading = () => {
  return (
    <div className='flex justify-center'>
        <Image className='h-52' src="loader.svg" alt="loading.." />
    </div>
  )
}

export default loading
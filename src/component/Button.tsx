
function Button() {
  return (
    <div>
      <div className='flex gap-5 '>
            <button className='hover:bg-gray-200 hover:dark:bg-gray-500 rounded-lg px-2 py-1 hover:underline hover:decoration-gray-500 cursor-pointer '>সাইন ইন</button>
            <button className='bg-green-500 px-2 py-1 rounded-lg hover:bg-green-600 text-white '>সাইন আপ</button>
        </div>
    </div>
  )
}

export default Button

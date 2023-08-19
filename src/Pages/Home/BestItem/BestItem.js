import React from 'react'
import bestFood from '../../../images/vipfood.jpg'

const BestItem = () => {
  return (
    <div
      className="h-[30rem] bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/life-style_1122-1996.jpg?w=2000&t=st=1692425927~exp=1692426527~hmac=96e12dce72c86819a39fe0fc83a3b7ee4cc4fad005607cf4d8ae723c13602342)', // Use template literals to set the URL
      }}
    >
      <div className="bg-white shadow-md p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-lg">
        {/* Content of your card */}
        <h2 className="text-2xl font-semibold mb-4">Wanna Tour our kitchen?</h2>
        <p className="text-gray-700 font-semibold">Click the button</p>
        <button className="bg-red-600 mt-3 rounded-md px-5 py-2 font-semibold text-white">Tour kitchen</button>
      </div>
    </div>
  )
}

export default BestItem

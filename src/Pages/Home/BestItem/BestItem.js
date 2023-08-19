import React from 'react'
import bestFood from '../../../images/vipfood.jpg'

const BestItem = () => {
  return (
    <div
      className="h-[30rem] bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'url(https://i.ibb.co/RjVfsxp/kitchen.jpg)', // Use template literals to set the URL
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

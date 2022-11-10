import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../contexts/UserContext'

const Review = () => {
  const service = useLoaderData()

  const { title, _id } = service
  const { user } = useContext(AuthContext)
  const handleReview = (event) => {
    event.preventDefault()
    const form = event.target
    const name = `${form.firstName.value} ${form.lastName.value}`
    const email = user?.email || 'unregistered'
    const phone = form.phone.value
    const photoUrl = form.photoUrl.value
    const message = form.message.value

    const review = {
      service: _id,
      serviceName: title,
      customer: name,
      email,
      phone,
      photoUrl,
      message,
    }
    fetch('https://sakibs-new-kitchen-server.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          alert('Review Submit Successfully')
          form.reset()
        }
      })
      .catch((er) => console.error(er))
  }

  return (
    <div className="">
      <form onSubmit={handleReview}>
        <h2 className="text-center text-4xl">Add Review</h2>
        <h2 className="text-2xl text-center">Item Name: {title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-info w-full "
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-info w-full "
            required
          />
          <input
            name="photoUrl"
            type="text"
            placeholder="Your PhotoUrl"
            className="input input-bordered input-info w-full "
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered input-info w-full "
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            defaultValue={user?.email}
            className="input input-bordered input-info w-full  "
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-info w-full"
          placeholder="Your Review"
          required
        ></textarea>
        <div className='flex  lg:flex-col mx-28 my-5'>
            <input className="btn space-y-3" type="submit" value="Submit Your Review" />
        </div>
      </form>
    </div>
  )
}

export default Review

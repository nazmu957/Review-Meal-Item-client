import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/UserContext'

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
  const { user } = useContext(AuthContext)
  const {
    _id,
    serviceName,
    message,
    email,
    photoUrl,
    customer,
    phone,
    service,
    status,
  } = review
  const [reviewService, setReviewService] = useState({})

  useEffect(() => {
    fetch(`https://sakibs-new-kitchen-server.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data))
  }, [service])

  return (
    <tr>
      <th>
        {/* <label>
            
          <button onClick={() => handleDelete(_id)} className='btn' >X</button>
        </label> */}

        {/* The button to open modal */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Delete Successfully!</h3>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                ok!
              </label>
            </div>
          </div>
        </div>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img className="rounded-full" src={user?.photoURL} alt="" />
            </div>
            <h2></h2>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
      </td>
      <td>{message}</td>
      {/* <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : 'Never want eat'}
        </button>
      </th> */}
      <th>
        <label
          htmlFor="my-modal"
          onClick={() => handleDelete(_id)}
          className="btn"
        >
          Delete
        </label>
      </th>
    </tr>
  )
}

export default ReviewRow

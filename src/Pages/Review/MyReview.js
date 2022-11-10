import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/UserContext'
import ReviewRow from './ReviewRow'

const MyReview = () => {
  const { user } = useContext(AuthContext)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5007/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }, [user?.email])

  const handleDelete = id =>{
        const proceed = window.confirm('Do you confirm to delete?');
        if(proceed){
            fetch(`http://localhost:5007/reviews/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0) {
                    // alert('deleted');
                    const remaining = reviews.filter(rvs =>rvs._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }

    const handleStatusUpdate = id =>{
        fetch(`http://localhost:5007/reviews/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'One more time'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = reviews.filter(rvs => rvs._id !== id);
                const approving = reviews.find(rvs => rvs._id === id);
                approving.status = 'One more time'

                const newReviews = [approving,...remaining];
                setReviews(newReviews);
            }
        })
    }
  return (
    <div>
      <h2 className='text-2xl text-center'>Total Review: {reviews.length}</h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              
              <th></th>
              <th>Customer Name</th>
              <th>Food Name</th>
              <th>Food Review</th>
              <th>Comment Update</th>
              <th>Delete Review</th>
            </tr>
          </thead>
          <tbody>
            {
                reviews.map(review => <ReviewRow
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
                ></ReviewRow>)
            }
          </tbody>

          
        </table>
      </div>
    </div>
  )
}

export default MyReview

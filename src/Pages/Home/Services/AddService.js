import React from 'react';

const AddService = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.foodName.value;
        const price = form.price.value;
        const img = form.photoUrl.value;
        const foodCode = form.foodCode.value;
        const description = form.description.value;
       

        const newService = {
            title,
            price,
            img,
            foodCode,
            description
        }

        fetch('http://localhost:5007/newService',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
           
            console.log(data)
            if(data.acknowledged){
                alert('new service added successfully')
                form.reset();
            }
        })
        .catch(er => console.error(er));


    }
    return (
        <div className="">
      <form onSubmit={handleAddService}>
        <h2 className="text-center text-4xl">Add Service</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="foodName"
            type="text"
            placeholder="Give FoodName"
            className="input input-bordered input-info w-full "
            required
          />
          <input
            name="price"
            type="text"
            placeholder="price"
            className="input input-bordered input-info w-full "
            required
          />
          <input
            name="photoUrl"
            type="text"
            placeholder="Food PhotoUrl"
            className="input input-bordered input-info w-full "
            required
          />
        
          <input
            name="foodCode"
            type="text"
            placeholder="Give TextFoodCode"
            className="input input-bordered input-info w-full "
          />
        
    <textarea
          name="description"
          className="textarea textarea-info w-full"
          placeholder="Give Description"
          required
        ></textarea>
       
        </div>
        
        <div className='flex  lg:flex-col mx-28 my-5'>
            <input className="btn space-y-3" type="submit" value="Add service" />
            
            
        </div>
      </form>

      
    </div>
  )

};

export default AddService;
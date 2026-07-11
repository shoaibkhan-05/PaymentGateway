import React from 'react'
import axios from "axios"

const Products = ({data}) => {
  
  const checkouthandler= async (amount ,)=>{
  const key = await axios.get("http://localhost:3000/api/v1/getkey",{withCredentials:true})
   console.log(key.data.key)

  const result = await axios.post("http://localhost:3000/api/v1/payment/process", 
     { amount  }, {withCredentials:true})
    
     console.log(result);


  const options = {
        key:key.data.key, // Replace with your Razorpay key_id
        amount: amount, // Amount is in currency subunits.
        currency: 'INR',
        name: 'shoaib khan',
        description: 'Test Transaction',
        order_id:result.data.order.id, // This is the order_id created in the backend
        callback_url: 'api/v1/paymentVerification', // Your success URL
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();


   }


  return (
<div className="w-full min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.courseImage}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {item.title}
              </h2>

              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">
                  ₹{item.price}
                </span>

                <button
                  onClick={() => checkouthandler(item.price)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-semibold"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products

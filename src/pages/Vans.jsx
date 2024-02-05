import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Vans = () => {
    const  [vans, setVans] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/vans').then((data)=>{
            console.log(data.data);
            setVans(data.data)
        }).catch((err)=>{
          console.log(err);
        })
      }, [])
  return (
    <>
    <br />
        <div className="container mt-5">
                <h4 className='fs-2 text-black'>Explore Our Van Options</h4>
                <br />
                <div className=" d-flex gap-5">
                <div className='col-md-3 col-lg-1 '>
                    <button className='btn btn-transparent' style={{backgroundColor:"#feead1"}}>Simple</button>
                    </div>                    
                    <div className='col-md-3 col-lg-1 '>
                    <button className='btn btn-transparent' style={{backgroundColor:"#feead1"}}>Luxury</button>
                    </div>

                    
                    <div className='col-md-3 col-lg-1 '>
                    <button className='btn btn-transparent' style={{backgroundColor:"#feead1"}}>Rugged</button>
                    </div>
                    
                    <div className='col-3 '>
                    <button className='btn btn-transparent text-decoration-underline'>Clear filter</button>
                    </div>                </div>
        </div>


        <div className="container mt-5">
  <h4 className='fs-2 text-black'>Explore Our Van Options</h4>
  <div className="row gap-3">
    {vans.map(van => (
      <div key={van.id} className="col-md-4">
          <img src={van.imageUrl} alt="" className="w-100 mb-2" />
          <span className=' fs-4'>{van.name}</span>
          <span className='float-end fs-4 fw-bold'>Price: ${van.price}</span>
          <br />
        <Link to={`/api/vans/${van.id}`} className="text-decoration-none text-dark">
        <button className='btn btn transparent text-white mt-5 fw-bold' style={{backgroundColor:'#e17654'}}>{van.type}</button>

        </Link>
      </div>
    ))}
  </div>
</div>

      
    </>
  )
}

export default Vans
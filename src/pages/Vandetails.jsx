import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
 
const Vandetails = () => {
    const {id}  = useParams();
    const  [details, setDetails] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/vans/${id}`).then((res) =>{
            console.log(res.data);
            setDetails(res.data);
        }) 
    }, [id])
    

  return (
    <>
        <div className="container">
            <br />
        <i class="bi bi-arrow-left fs-6"></i> <Link to={'/vans'} className='fs-6 text-dark mb-3'>Back to all vans</Link><br /><br />
            {
                details ? (

             <>
                    <div>
                        <img className='container ' src={details.imageUrl} alt="" /><br />
                        <button className='btn btn transparent text-white mt-5 fw-bold' style={{backgroundColor:'#e17654'}}>{details.type}</button>
                        <h1>{details.name}</h1>
                        <span className='fs-3 fw-bold'>{details.price}$</span> <span>/day</span>
                        <p><b>Vehicle Description : </b> {details.description}</p>
                    
                        <button className='btn btn-transparent  col-12 fw-bold p-3 text-white' style={{backgroundColor:'#fe8d38', margin:"10% 0% "}}>Rent this van</button>

        </div>
                        </>
                        ): (
                            <p>Loading</p> 
                            )}
    
                     </div>
                     </>
  )
}

export default Vandetails
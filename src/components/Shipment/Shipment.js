import React from 'react';
import { useAuth } from '../Login/useAuth';
import { useForm } from 'react-hook-form';
import './Shipment.css';

const Shipment = () => {
    const { register, handleSubmit,errors } = useForm();
    const onSubmit = data => console.log(data);
    const auth = useAuth();
    return (
      
      <form className="ship-from" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}

        <input name="name"
            defaultValue={auth.user.Name} 
            ref={register({ required: true })} 
            placeholder="Your Name" />
        {/* errors will return when field validation fails  */}
            {
                errors.name && <span className="error" >Name is required</span>
            }

        <input name="email" 
            defaultValue={auth.user.email} 
            ref={register({ required: true })} 
            placeholder="Your Email" />
        {/* errors will return when field validation fails  */}
            {
                errors.email && <span className="error" >Email is required</span>
            }
        <input name="AddressLine1" 
            ref={register({ required: true })} 
            placeholder="Address Line 1" />
        {/* errors will return when field validation fails  */}
            {
                errors.AddressLine1 && <span className="error" >Address is required</span>
            }
        <input name="AddressLine2" 
            ref={register} 
            placeholder="Address Line 2" />
        {/* errors will return when field validation fails  */}
            {
                errors.AddressLine1 && <span className="error" >Address is required</span>
            }
        <input name="city"
            ref={register({ required: true })} 
            placeholder="City" />
        {/* errors will return when field validation fails  */}
            {
                errors.city && <span className="error" >City is required</span>
            }
        <input name="country" 
            ref={register({ required: true })}
            placeholder="Country" />
        {/* errors will return when field validation fails  */}
            {
                errors.country && <span className="error" >Country is required</span>
            }
        <input name="zipcode" 
            ref={register({ required: true })} 
            placeholder="Zip code" />
        {/* errors will return when field validation fails  */}
            {
                errors.zipcode && <span className="error" >Zip code is required</span>
            }
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;
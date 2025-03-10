import React from 'react'

const Profile = ({data,setData,errors,setErrors}) => {
    const {name,age,email} = data;
    console.log(errors);
    // handleSubmit 

    const handleSubmit = (e) => {
        e.preventDefault();
        const newError = validateForm(data);
        setErrors(newError);

        if(Object.keys(errors).length === 0) return console.log('Form Submitted Succesfuly')
        else{
             return console.log('Check With Validations'); 
}

    }

    const validateForm = (data) => {
        const error = {};
        if(!data.name.trim()){
            error.name = 'Name is Required'
        }
        else if(data.name.length < 4){
            error.name = 'Name should be atleast 4 charectars'
        }
        if(!data.age.trim()){
            error.age = 'Age is Required'
        }
        else if(data.age < 18){
            error.age = 'Minors not allowed'
        }
        if(!data.email.trim()){
            error.email = 'Email is Required'
        }
        const Regex = '!/\S+@\S+\.\S+/';
        if(!/\S+@\S+\.\S+/.test(data.email)){

            error.email = 'Email Pattern is Required'


        }
        return error;
    } 

    const handleChange = (e,item) => {
        setData(prev => ({
            ...prev,
            [item] : e.target.value
        }))

    }
    console.log(data);
  return (
    <div>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <label> Name : </label>
            <input type='text' value={name} onChange={(e)=> handleChange(e,'name')} className='border-1 bg-white'/>
            
            {
                errors?.name && <span>{errors.name}</span>
            }
            
            <br/>
            <label> Age : </label>
            <input type='number' value={age} onChange={(e)=> handleChange(e,'age')} className='border-1 bg-white'/>
            {
                errors?.age && <span>{errors.age}</span>
            }
            <br/>
            <label> Email : </label>
            <input type='text' value={email} onChange={(e)=> handleChange(e,'email')} className='border-1 bg-white'/>
            {
                errors?.email && <span>{errors.email}</span>
            }
            <button className='border-1 bg-white p-1 gap-2 cursor-pointer'>Next</button>
        </form> 
    </div>
  )
}

export default Profile
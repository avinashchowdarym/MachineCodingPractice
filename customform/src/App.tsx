
import { useEffect, useState } from 'react'
import './App.css'

type FormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  securityQuestion: string;
  incomeRange: string;
  employmentStatus: string;
}

const EmailRegex : RegExp = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const PhoneRegex : RegExp = /^\+?[0-9]{10,15}$/;

function App() {

  return (
   <div className='flex flex-col justify-center items-center z-50 relative text-white'>
      <div className='text-white text-xl border-1 border-white w-[1000px] h-[1000px] flex flex-col justify-center items-center'>
        <CustomForm />
      </div>
   </div>
  )
}

export const CustomForm = () => {
  

  const [step,setStep] = useState(1);
  const [formData , setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    password: '', 
    securityQuestion: '',
    incomeRange: '',
    employmentStatus: ''
  })

  const [errors,setErrors] = useState<{[key: string] : string}>({});

  // const validateStep = (): boolean => {
  //   let newErrors : {[key: string] : string} = {};

  //   if(step === 1){
  //     if(!formData.name){
  //       newErrors.name = 'Name is Required';
  //     }
  //     if(!EmailRegex.test(formData.email)){
  //       newErrors.email = 'Invalid Email Format'
  //     }
  //     if(!PhoneRegex.test(formData.phone)){
  //       newErrors.phone = 'Invalid Phone Format'
  //     }
  //   }
  //   if (step === 2) {
  //     if (formData.password.length < 8 || !/[A-Z]/.test(formData.password) || !/[a-z]/.test(formData.password) || !/[0-9]/.test(formData.password) || !/[!@#$%^&*]/.test(formData.password)) {
  //       newErrors.password = "Password must be 8+ characters with uppercase, lowercase, number, and special character";
  //     }
  //     if (!formData.securityQuestion) newErrors.securityQuestion = "Security question is required";
  //   } 
  //   if (step === 3) {
  //     if (!formData.incomeRange) newErrors.incomeRange = "Income range is required";
  //     if (!formData.employmentStatus) newErrors.employmentStatus = "Employment status is required";
  //   }
  //   setErrors(newErrors);
  //   return Object.keys(errors).length === 0;
    
  // }
  // useEffect(()=>{
  //   validateStep();
  // },[errors,formData])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
      setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (value.trim() !== "") {
        delete updatedErrors[name];
      }
      return updatedErrors;
    });
  }
  console.log(formData);
  const handlePrev = () => {
    setStep(prev => prev-1);
  }

  const handleNext = () => {
    let newErrors : {[key: string] : string} = {};

    if(step === 1){
      if(!formData.name){
        newErrors.name = 'Name is Required';
      }
      if(!EmailRegex.test(formData.email)){
        newErrors.email = 'Invalid Email Format'
      }
      if(!PhoneRegex.test(formData.phone)){
        newErrors.phone = 'Invalid Phone Format'
      }
    }
    if (step === 2) {
      if (formData.password.length < 8 || !/[A-Z]/.test(formData.password) || !/[a-z]/.test(formData.password) || !/[0-9]/.test(formData.password) || !/[!@#$%^&*]/.test(formData.password)) {
        newErrors.password = "Password must be 8+ characters with uppercase, lowercase, number, and special character";
      }
      if (!formData.securityQuestion) newErrors.securityQuestion = "Security question is required";
    } 
    if (step === 3) {
      if (!formData.incomeRange) newErrors.incomeRange = "Income range is required";
      if (!formData.employmentStatus) newErrors.employmentStatus = "Employment status is required";
    }
    setErrors(newErrors);
    if(Object.keys(newErrors).length === 0) setStep(prev => prev+1);
    // else setStep(step);
}


  return(
    <form className='flex flex-col max-w-md mx-auto mt-10 p-6 shadow-md rounded-lg'>
      {
        (step === 1) && 
          (<fieldset className='flex flex-col '>
            <legend className='font-bold text-xl mb-4'>Personal Infromation</legend>
            <div className='w-full'>
              <label className=''>Name</label>
              <input type='text' name='name' className='border-1 border-white m-10 p-2 w-[250px]' placeholder='Your Name' onChange={handleChange}/>
              {errors.name ? <p className="text-red-500 text-sm">{errors.name}</p> : <></>}

            </div>
            
            <div className='w-full'>
              <label className=''>Email</label>
              <input type='email' name='email' className='border-1 border-white m-10 p-2 w-[250px]' placeholder='Your Email Id' onChange={handleChange}/>
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            </div> <div className=''>
              <label className='w-full'>Phone</label>
              <input type='text' name='phone' className='border-1 border-white m-10 p-2 w-[250px]' placeholder='Your Phone Number' onChange={handleChange}/>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            </div>

          </fieldset>)


          
      }
      {step === 2 && (
        <fieldset>
          <legend className="text-xl font-bold mb-4">Account Security</legend>
          <label>Password</label>
          <input type="password" name="password" className="w-full p-2 border mb-2" onChange={handleChange} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          
          <label>Security Question</label>
          <input type="text" name="securityQuestion" className="w-full p-2 border mb-2" onChange={handleChange} />
          {errors.securityQuestion && <p className="text-red-500 text-sm">{errors.securityQuestion}</p>}
        </fieldset>
      )}
      {step === 3 && (
        <fieldset>
          <legend className="text-xl font-bold mb-4">Financial Information</legend>
          <label>Income Range</label>
          <input type="text" name="incomeRange" className="w-full p-2 border mb-2" onChange={handleChange} />
          {errors.incomeRange && <p className="text-red-500 text-sm">{errors.incomeRange}</p>}
          
          <label>Employment Status</label>
          <input type="text" name="employmentStatus" className="w-full p-2 border mb-2" onChange={handleChange} />
          {errors.employmentStatus && <p className="text-red-500 text-sm">{errors.employmentStatus}</p>}
        </fieldset>
      )}
      <div className='flex justify-between mt-4'>
        {step > 1 ? <button className='border-1 rounded bg-white text-gray-950 p-2' onClick={(e)=>{e.preventDefault() ; handlePrev()}}>Prev</button> : <></>}
        {step<3 ? <button className='border-1 rounded bg-white text-gray-950 p-2' onClick={(e)=>{e.preventDefault(); handleNext()}}>Next</button> : <button className='border-1 rounded bg-white text-gray-950 p-2' >Submit</button>}
      </div>

    </form>
  )
}

export default App

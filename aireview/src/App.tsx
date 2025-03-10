
import { useState } from 'react'
import './App.css'
import Code from '../src/components/Code'
import Review from '../src/components/Review'
import { ChatOllama } from "@langchain/ollama";

function App() {

  const [review,setReview] = useState('This is Code Review');

  const [state,setState] =useState< 'idle' | 'generating' | 'generated'>('idle');

  const isGenerating = state === 'generating';

  const model = new ChatOllama({
    model: "llama3",  // Default value.
  });
  


  const handleGenerateReview = async (code: string) => {
    // try {
    //   setState("generating");
    //   const response = await fetch("http://localhost:5173/api/v1/reviews", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ code }),
    //   });

    //   const data = await response.json();
    //   setReview(data.review);
    // } catch (err) {
    //   alert("Something went wrong. Please try again later.");
    //   console.log(err);
    // }

    // setState("generated");
    console.log(code);
    const result = await model.invoke(["human", "Hello, how are you?"]);
    console.log('result',result);

  };
  return (
    <div className='flex w-full h-full justify-center items-center overflow-hidden'>

      {/* Code Mirror */}
      <Code isGenerating = {isGenerating} onGeneratingCode={handleGenerateReview}/>
      {/* {Review} */}
      <Review isGenerating={isGenerating} review={review} />
    </div>
  )
}

export default App

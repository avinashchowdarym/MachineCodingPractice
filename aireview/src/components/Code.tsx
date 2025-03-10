import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import { javascript } from '@codemirror/lang-javascript';



const Code = ({isGenerating , onGeneratingCode }: {isGenerating : boolean ; onGeneratingCode(code: string) : void}) => {

    const [code,setCode] = useState('// write your code here');
    return (
    
    <div className="  bg-gray-900 w-6/12 h-full relative">
        <button className='absolute bottom-3 right-3 bg-green-500 z-50 w-max p-2 rounded hover:bg-green-700 active:translate-y-1 disabled:opacity-75  disabled:pointer-events-none disabled:cursor-not-allowed'
        disabled = {isGenerating}
        onClick={()=>{onGeneratingCode(code)}}

        >
            Generate Review
        </button>
        <CodeMirror
         theme={'dark'} 
         value={code}
         onChange={setCode}
         minHeight='100vh'
         extensions={[javascript({ jsx: true })]}
         style={{fontSize:'30px'}}
         />
    
    </div>

)
} 

export default Code;


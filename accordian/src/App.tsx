
import './App.css'
import Accordian from './components/Accordian'
const items = [
  {
    id: "item-1",
    title: "Accordion Item 1",
    content:
      "This is the content for Accordion Item 1. You can add any kind of information here.",
  },
  {
    id: "item-2",
    title: "Accordion Item 2",
    content:
      "This is the content for Accordion Item 2. It can include text, images, or other HTML elements.",
  },
  {
    id: "item-3",
    title: "Accordion Item 3",
    content:
      "This is the content for Accordion Item 3. You can also add links or lists in the content.",
  },
  {
    id: "item-4",
    title: "Accordion Item 4",
    content:
      "This is the content for Accordion Item 4. It's up to you what kind of data you'd like to display.",
  },
];
function App() {

  return (
    <div className='flex flex-col justify-center items-center bg-amber-200 h-screen w-screen'>
      <Accordian items={items}/>
    </div>
  )
}

export default App

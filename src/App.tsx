import { useState } from 'react'
import './App.css'
import Sidebar from './components/layout/Sidebar'
function App() {
  const [isOpen,setIsOpen] = useState<boolean>(true);

  return (
    <>
      <section className="h-screen flex bg-[#F3F5F7] px-3 py-4">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}></Sidebar>
        <div>hi</div>
      </section>
    </>
  )
}

export default App

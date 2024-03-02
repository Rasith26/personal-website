import React from 'react'

const Foot = () => {
  return (
    //mt-auto at the top div to fix the footer at bottom of the webpage
    <div class="mt-auto"> 
      <footer class="text-white bg-black p-2 fs-6 mt-auto">
        &copy; {(new Date().getFullYear())} Mohamed Rasith
      </footer>
    </div>
  )
}

export default Foot
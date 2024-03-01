import React from 'react'

const Foot = () => {
  return (
    <div>
      <footer class="fixed-bottom text-white bg-dark bg-opacity-25 p-2 fs-6 mt-auto">
        &copy; {(new Date().getFullYear())} Mohamed Rasith
      </footer>
    </div>
  )
}

export default Foot
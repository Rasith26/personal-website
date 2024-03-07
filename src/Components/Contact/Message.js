import React from 'react'

const Message = () => {
  return (
    <div class="msg-box container-fluid con-f d-flex flex-column bg-dark text-white text-start w-100 mt-auto mb-0 p-3">
        <div class="h1 msg-width">Message Me</div>
        <div class="msg-width">
            <form>
                <div class="form-group m-2">
                    <label for="name" class="m-2 fw-bold fs-5">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="form-group m-2">
                    <label for="email" class="m-2 fw-bold fs-5">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="name@gmail.com" required/>
                </div>
                <div class="form-group m-2">
                    <label for="message" class="m-2 fw-bold fs-5">Message</label>
                    <textarea class="form-control" id="message" rows="5" maxrows="8" style={{resize: "none"}} required></textarea>
                </div>
                <button type="submit" class="btn btn-primary m-4 fw-bold fs-5 px-4">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Message
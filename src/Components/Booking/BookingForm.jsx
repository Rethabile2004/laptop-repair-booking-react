import '/src/Components/Booking/Styling/BookingForm.css';

import { useState } from 'react';
function BookingForm() {
  const [input, setInput] = useState({
    fullName: "",
    email: "11",
    phoneNumber: "",
    consReason: "",
    deviceType: "",
    condition: "",
    additionalInfor: "",
    // image:""
  })
  function handleInput(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  return (
    <section className="consulatationFormSection">
      <div className="consulatationContainer">
        <h2>Consultation Form</h2>
        <p>Please fill out your details to book a laptop repair consulation.</p>
        <form onSubmit={""} className="consulatationForm">
          <div className="consulatationRow">
            <label htmlFor="fullName">Full Names</label>
            <input id="fullName" onChange={handleInput} type="text" name='fullName' placeholder="Rethabile Siase" />
          </div>
          <div className="consulatationRow">
            <label htmlFor="email">Email</label>
            <input id="email" onChange={handleInput} type="text" name='email' placeholder="ericksiase375@gmail.com" />
          </div>
          <div className="consulatationRow">
            <label htmlFor="text">Phone Number</label>
            <input id="phoneNumber" onChange={handleInput} type="text" name='phoneNumber' placeholder="+27752626847" />
          </div>
          <div className="consulatationRow">
            <label htmlFor="reason">Consultation reason</label>
            <select id="consiltation-reason" onChange={handleInput} name='consReason'>
              <option value="">Select an option</option>
              <option value="broken screen">Broken Screen</option>
              <option value="problem with powering on">Laptop won't turn on</option>
              <option value="Upgrade Ram">Upgrade RAM</option>
              <option value="problem with sound">Laptop does not emmit sound</option>
              <option value="water damage">Laptop damaged by water/ drink</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="consulatationRow">
            <label htmlFor="position">Type of device</label>
            <select name='deviceType' id="deviceType" onChange={handleInput}>
              <option value="">Select an option</option>
              <option value="laptop">Laptop</option>
              <option value="computer">Computer</option>
              <option value="phone">Smart Phone/ Tablet</option>            </select>
          </div>
          <div className="consulatationRow">
            <label htmlFor="critical">Condition</label>
            <div>
              <input type="radio" name="condition" value="critical" onChange={handleInput} /> Critical
              <input type="radio" name="condition" value="non-critical" onChange={handleInput} /> Not Critical
            </div>
          </div>
          <div className="consulatationRow">
            <label htmlFor="text">Addition Information (Optional)</label>
            <textarea id="more-infor" name='additionalInfor' type="text" placeholder="Tell us more about the condition of your laptop/ computer." rows={4} onChange={handleInput} />
          </div>
          {/* <div className="consulatationRow">
            <label htmlFor="laptopImage" hidden>Upload Images (Optional)</label>
            <input id="laptopImage" hidden type="file" />
          </div> */}
          <button className="consulatationSubmit">Apply Now</button>
        </form>
      </div>

    </section>

  )
}

export default BookingForm;
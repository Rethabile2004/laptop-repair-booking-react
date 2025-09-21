import '/src/Components/Booking/Styling/BookingForm.css';

function BookingForm() {
  return (
    <section className="consulatationFormSection">
      <div>
      </div>
      <div className="consulatationContainer">
        <h2>Consultation Form</h2>
        <p>Please fill out your details to book a laptop repair consulation.</p>
        <form className="consulatationForm">
          <div className="consulatationRow">
            <label htmlFor="fullName">Full Names</label>
            <input id="fullName" type="text" placeholder="Rethabile Siase" />
          </div>
          <div className="consulatationRow">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="ericksiase375@gmail.com" />
          </div>
          <div className="consulatationRow">
            <label htmlFor="text">Phone Number</label>
            <input id="phoneNumber" type="text" placeholder="+27752626847" />
          </div>
          <div className="consulatationRow">
            <label htmlFor="position">Consultation reason</label>
            <select id="consiltation">
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
            <select id="consiltation">
              <option value="">Select an option</option>
              <option value="laptop">Laptop</option>
              <option value="computer">Computer</option>
              <option value="phone">Smart Phone/ Tablet</option>            </select>
          </div>
          <div className="consulatationRow">
            <label htmlFor="position">Condition</label>
            <div>
              <input type="radio" name="condition" value="critical" /> Critical
              <input type="radio" name="condition" value="non-critical" /> Not Critical
            </div>
          </div>
          <div className="consulatationRow">
            <label htmlFor="text">Addition Information (Optional)</label>
            <textarea id="more-infor" type="text" placeholder="Tell us more about the condition of your laptop/ computer." rows={4} />
          </div>
          <div className="consulatationRow">
            <label htmlFor="laptopImage">Upload Images (Optional)</label>
            <input id="laptopImage" type="file" />
          </div>
          <button className="consulatationSubmit">Apply Now</button>
        </form>
      </div>

    </section>

  )
}

export default BookingForm;
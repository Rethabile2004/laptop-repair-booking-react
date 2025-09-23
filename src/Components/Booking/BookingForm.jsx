import '/src/Components/Booking/Styling/BookingForm.css';
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConsultationContext } from '../API/ConsultationContext';

function BookingForm() {
  const {addConsultation,consultations}=useContext(ConsultationContext);
  const [errors, setErrors] = useState({});
  const navigate=useNavigate();
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    consReason: "",
    deviceType: "",
    condition: "",
    additionalInfor: "",
  });

  function handleInput(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleFinalSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (!input.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!input.email.trim()) newErrors.email = 'Email is required';
    if (!input.phoneNumber.trim()) newErrors.phoneNumber = 'Phone Number is required';
    if (!input.deviceType.trim()) newErrors.deviceType = 'Type of device is required';
    if (!input.consReason.trim()) newErrors.consReason = 'Reason for consultation is required';
    if (!input.condition.trim()) newErrors.condition = 'Condition is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      window.confirm("Once submitted changes will not be permitted. Are you sure you want to submit?");
      addConsultation(input.fullName,input.email,input.phoneNumber,input.consReason,input.deviceType,input.condition,input.additionalInfor);
      navigate('/success');
    }
  }

  return (
    <section className="consulatationFormSection">
      <div className="consulatationContainer">
        <h2>Consultation Form: {consultations.length}</h2>
        <p>Please fill out your details to book a laptop repair consultation.</p>
        <form onSubmit={handleFinalSubmit} className="consulatationForm">
          <div className="consulatationRow">
            <label htmlFor="fullName">Full Names</label>
            <input id="fullName" name="fullName" value={input.fullName} onChange={handleInput} placeholder="Rethabile Siase" />
            {errors.fullName && <span style={{ color: "red" }}>{errors.fullName}</span>}
          </div>

          <div className="consulatationRow">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" value={input.email} onChange={handleInput} placeholder="ericksiase375@gmail.com" />
            {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
          </div>

          <div className="consulatationRow">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input id="phoneNumber" name="phoneNumber" value={input.phoneNumber} onChange={handleInput} placeholder="+27752626847" />
            {errors.phoneNumber && <span style={{ color: "red" }}>{errors.phoneNumber}</span>}
          </div>

          <div className="consulatationRow">
            <label htmlFor="consReason">Consultation reason</label>
            <select id="consReason" name="consReason" value={input.consReason} onChange={handleInput}>
              <option value="">Select an option</option>
              <option value="broken screen">Broken Screen</option>
              <option value="problem with powering on">Laptop won't turn on</option>
              <option value="Upgrade Ram">Upgrade RAM</option>
              <option value="problem with sound">Laptop does not emit sound</option>
              <option value="water damage">Laptop damaged by water/drink</option>
              <option value="other">Other</option>
            </select>
            {errors.consReason && <span style={{ color: "red" }}>{errors.consReason}</span>}
          </div>

          <div className="consulatationRow">
            <label htmlFor="deviceType">Type of device</label>
            <select id="deviceType" name="deviceType" value={input.deviceType} onChange={handleInput}>
              <option value="">Select an option</option>
              <option value="laptop">Laptop</option>
              <option value="computer">Computer</option>
              <option value="phone">Smart Phone/Tablet</option>
            </select>
            {errors.deviceType && <span style={{ color: "red" }}>{errors.deviceType}</span>}
          </div>

          <div className="consulatationRow">
            <label>Condition</label>
            <div>
              <input type="radio" name="condition" value="critical" onChange={handleInput} /> Critical
              <input type="radio" name="condition" value="non-critical" onChange={handleInput} /> Not Critical
            </div>
            {errors.condition && <span style={{ color: "red" }}>{errors.condition}</span>}
          </div>

          <div className="consulatationRow">
            <label htmlFor="additionalInfor">Additional Information (Optional)</label>
            <textarea
              id="additionalInfor"
              name="additionalInfor"
              value={input.additionalInfor}
              onChange={handleInput}
              placeholder="Tell us more about the condition of your laptop/computer."
              rows={4}
            />
          </div>

          <button type="submit" className="consulatationSubmit">Apply Now</button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;

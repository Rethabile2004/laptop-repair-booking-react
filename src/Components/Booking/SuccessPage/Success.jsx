import React from 'react';
import '/src/Components/Booking/SuccessPage/Styling/Success.css';
import { useNavigate } from 'react-router-dom';
const SuccessPage = () => {
  const navigate=useNavigate();
  return (
    <>
      <section className="success">
        <div className="success-content">
          <h1>🎉 Submission Successful!</h1>
          <p>Thank you for reaching out. We’ve received your message and will get back to you shortly.</p>
          <button className="success-btn" onClick={() => navigate('/consultation-list')}>Track Consultation Information</button>
        </div>
        <div>
        </div>
      </section>
    </>
  );
};

export default SuccessPage;

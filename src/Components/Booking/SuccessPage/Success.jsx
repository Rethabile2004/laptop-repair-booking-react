import React from 'react';
import '/src/Components/Booking/SuccessPage/Styling/Success.css';

const SuccessPage = () => {
  return (
    <section className="success">
      <div className="success-content">
        <h1>🎉 Submission Successful!</h1>
        <p>Thank you for reaching out. We’ve received your message and will get back to you shortly.</p>
        <button className="success-btn" onClick={() => window.location.href = '/'}>Return to Home</button>
      </div>
    </section>
  );
};

export default SuccessPage;

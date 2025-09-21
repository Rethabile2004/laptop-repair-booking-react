import React from 'react';
import '/src/Components/Booking/SuccessPage/Styling/Success.css';

const SuccessPage = () => {
  return (
    <>
      <section className="success">
        <div className="success-content">
          <h1>🎉 Submission Successful!</h1>
          <p>Thank you for reaching out. We’ve received your message and will get back to you shortly.</p>
          <button className="success-btn" onClick={() => window.location.href = '/'}>Return to Home</button>
        </div>
        <div>
        </div>
      </section>
      <section>
        <div>
          <h1>Rethabile Siase</h1>
          <p>Contact Information: ericksiase375@gmail.com | 0752626847</p>
          
        </div>
      </section>
    </>
  );
};

export default SuccessPage;

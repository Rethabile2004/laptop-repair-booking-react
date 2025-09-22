import React, { useContext } from 'react';
import { ConsultationContext } from '../API/ConsultationContext';
import '/src/Components/Booking/ConsultationList.css';

function ConsultationList() {
  const { consultations } = useContext(ConsultationContext);

  if (consultations.length === 0) {
    return (
      <section className="consultationList">
        <h2>No consultations submitted yet.</h2>
      </section>
    );
  }

  return (
    <section className="consultationList">
      <h2>📋 Submitted Consultations ({consultations.length})</h2>
      <ul>
        {consultations.map((c, index) => (
          <li key={index} className="consultationItem">
            <p><strong>Name:</strong> {c.fullName}</p>
            <p><strong>Email:</strong> {c.email}</p>
            <p><strong>Phone:</strong> {c.phoneNumber}</p>
            <p><strong>Device:</strong> {c.deviceType}</p>
            <p><strong>Reason:</strong> {c.consReason}</p>
            <p><strong>Condition:</strong> {c.condition}</p>
            {/* <p><strong>Date submitted:</strong> {c.dateCreated}</p> */}
            {c.additionalInfor && (
              <p><strong>Additional Info:</strong> {c.additionalInfor}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ConsultationList;

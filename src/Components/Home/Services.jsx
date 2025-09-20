import '/src/Components/Home/Services.css'
function Services(){
    const services = [
    {
      id: 1,
      title: 'Consultation',
      description: 'Book expert advice tailored to your needs.',
      img: '/src/assets/solution.svg',
    },
    {
      id: 2,
      title: 'Therapy Sessions',
      description: 'Professional support for mental wellness.',
      img: '/src/assets/message.svg',
    },
    {
      id: 3,
      title: 'Career Coaching',
      description: 'Guidance to help you reach your goals.',
      img: 'src/assets/educate.svg',
    },
  ];
    return (
        <>
        <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <img style={{ width: "120px" }} src={service.img} alt="" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
        </>
    )
}
export default Services
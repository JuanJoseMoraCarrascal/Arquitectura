import React from 'react';

const servicesData = [
  {
    title: 'Diseño Arquitectónico',
    description: 'Creamos espacios funcionales y estéticamente atractivos para cualquier tipo de proyecto.',
    image: '/path-to-image/design.jpg'
  },
  {
    title: 'Supervisión de Obras',
    description: 'Supervisamos y gestionamos cada fase de la construcción para garantizar calidad y cumplimiento de plazos.',
    image: '/path-to-image/supervision.jpg'
  },
  {
    title: 'Consultoría',
    description: 'Ofrecemos asesoramiento experto para la toma de decisiones técnicas en el diseño y construcción.',
    image: '/path-to-image/consultoria.jpg'
  },
  {
    title: 'Interventoría',
    description: 'Supervisamos la correcta ejecución de las obras, asegurando el cumplimiento de los estándares técnicos y normativos en cada fase del proyecto.',
    image: '/path-to-image/interventoria.jpg'
  }
  
];

const HomeServices = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Servicios de Arquitectura</h1>
        <p>Brindamos soluciones arquitectónicas innovadoras y personalizadas para cualquier proyecto.</p>
      </header>

      <section className="services-section">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image"/>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomeServices;

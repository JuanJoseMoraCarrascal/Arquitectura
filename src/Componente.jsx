import React from 'react';

const servicesData = [
  {
    title: 'Diseño Arquitectónico',
    description: 'Creamos espacios funcionales y estéticamente atractivos para cualquier tipo de proyecto.',
    image: '/imagenes/espacio.png'
  },
  {
    title: 'Supervisión de Obras',
    description: 'Supervisamos y gestionamos cada fase de la construcción para garantizar calidad y cumplimiento de plazos.',
    image: '/imagenes/supervi.png'
  },
  {
    title: 'Consultoría',
    description: 'Ofrecemos asesoramiento experto para la toma de decisiones técnicas en el diseño y construcción.',
    image: '/imagenes/Designer.jpeg'
  },
  {
    title: 'Avalúos y Asesoría Inmobiliaria',
    description: 'Ofrecemos servicios de avalúos y asesoría inmobiliaria personalizados, diseñados para satisfacer las necesidades específicas de nuestros clientes. Nuestro equipo de expertos está altamente capacitado para realizar avalúos precisos y confiables, asegurando que obtengas el valor real de tus propiedades.',
    image: '/imagenes/Avalúos y Asesoría Inmobiliaria.jpeg'
  },
  {
    title: 'Interventoría',
    description: 'Supervisamos la correcta ejecución de las obras, asegurando el cumplimiento de los estándares técnicos y normativos en cada fase del proyecto.',
    image: '/imagenes/Interventoria.png'
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

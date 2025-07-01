// components/ServiceGrid.js
import ServiceCard from './ServiceCard';

export default function ServiceGrid({ services }: any) {
  return (
    <section
      aria-label="List of services"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
    >
      {services.map((service: any, index: any) => (
        <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          description={service.description}
          priority={index < 2}
        />
      ))}
    </section>
  );
}

import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className='flex flex-wrap  gap-4 '>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;

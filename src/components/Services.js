import Title from "./title";
import {services} from "./data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      {/* ITERATION IS BETTE AND POSSIBLE INSTEAD OF THE ONE BELOW */}

      {/* <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div> */}
      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <article key={service.id} className="service">
              <span className="service-icon">
                <i className={service.icon}></i>
              </span>
              <div className="service-info">
                <h4 className={service.title}>saving money</h4>
                <p className="service-text">{service.text}</p>
              </div>
            </article>
          );
        })}
        {/* instead of write the list belo like this, instead you can iterate it above like that */}
        {/* <article className="service">
          <span className="service-icon">
            <i className="fas fa-wallet fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">saving money</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-tree fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">endless hiking</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-socks fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">amazing comfort</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article> */}
      </div>
    </section>
  );
};
export default Services;

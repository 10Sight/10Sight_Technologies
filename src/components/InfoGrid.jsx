import React from "react";

const InfoGrid = ({ data }) => {
  const items = data?.items || [];

  return (
    <div>
      {/* Why choose us */}
      <section className="px-[5vw] py-20 bg-white" id="why-choose-us">
        <div className="text-center mb-12">
          {data?.topTitle && (
            <p
              className="text-sm uppercase text-gray-400 tracking-widest"
              data-aos="fade-up"
              dangerouslySetInnerHTML={{ __html: data.topTitle }}
            />
          )}
          {data?.topSubheading && (
            <h2
              className="text-3xl sm:text-4xl font-bold text-primary sora-600"
              data-aos="fade-up"
              dangerouslySetInnerHTML={{ __html: data.topSubheading }}
            />
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-sm text-center"
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary sora-600">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 sora-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InfoGrid;

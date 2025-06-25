import React from 'react';

const WeeklySpecial = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-cursive font-bold text-sage-800 mb-4">
            Plat de la semaine
          </h2>
          <div className="w-24 h-1 bg-peach-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-sage-50 to-peach-50 rounded-3xl overflow-hidden shadow-xl">
          <div className="w-full h-[600px]">
            <iframe
              src="https://temporal-taurus-435.notion.site/ebd/21d025556520809e8bb4f6c936857279?v=21d0255565208007b52d000cbdc86238"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
              title="Plat de la semaine"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklySpecial;

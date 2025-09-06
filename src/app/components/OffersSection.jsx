'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Tag, ChevronRight, ArrowRight, ShoppingBag } from 'lucide-react';

const OffersSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 0,
    seconds: 0
  });

  // Sample offers data
  const offers = [
    {
      id: 1,
      title: "Summer Collection",
      description: "Get up to 40% off on summer essentials",
      discount: "40% OFF",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      timeLeft: "12:00:00",
      tag: "HOT",
      color: "bg-red-500"
    },
    {
      id: 2,
      title: "New Arrivals",
      description: "Be the first to shop our new collection",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      timeLeft: "06:30:00",
      tag: "NEW",
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Clearance Sale",
      description: "Last chance to buy with huge discounts",
      discount: "60% OFF",
      image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      timeLeft: "24:00:00",
      tag: "SALE",
      color: "bg-green-500"
    }
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const seconds = prevTime.seconds - 1;
        const minutes = seconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
        const hours = minutes < 0 ? prevTime.hours - 1 : prevTime.hours;
        
        return {
          hours: hours < 0 ? 0 : hours,
          minutes: minutes < 0 ? 59 : minutes,
          seconds: seconds < 0 ? 59 : seconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-11/12 mx-auto ">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Special Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't miss out on our limited-time offers. Grab your favorite fashion items before they're gone!
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-6 mb-12 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-4 md:mb-0">
            <Zap className="w-8 h-8 text-yellow-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold text-primary/80">Flash Sale Ending Soon!</h3>
              <p className="text-gray-600">Hurry up before the offers expire</p>
            </div>
          </div>
          
          <div className="flex space-x-4 text-primary">
            <div className="flex flex-col items-center ">
              <span className="text-2xl font-bold bg-gray-100 rounded-lg px-3 py-2">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span className="text-xs text-gray-500 mt-1">HOURS</span>
            </div>
            <span className="text-2xl font-bold pt-2">:</span>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold bg-gray-100 rounded-lg px-3 py-2">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span className="text-xs text-gray-500 mt-1">MINUTES</span>
            </div>
            <span className="text-2xl font-bold pt-2">:</span>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold bg-gray-100 rounded-lg px-3 py-2">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
              <span className="text-xs text-gray-500 mt-1">SECONDS</span>
            </div>
          </div>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div 
              key={offer.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Offer Tag */}
              <div className="relative">
                <div className={`absolute top-4 left-4 ${offer.color} text-white px-3 py-1 rounded-full text-sm font-bold z-10`}>
                  {offer.tag}
                </div>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
              </div>

              {/* Offer Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-primary">{offer.discount}</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    Ends in: {offer.timeLeft}
                  </div>
                </div>

                <button className="btn btn-primary w-full group/btn">
                  Shop Now
                  <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Offers Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="btn btn-outline btn-primary group">
            View All Offers
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersSection;
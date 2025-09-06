"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ChevronRight, Sparkles, ShoppingBag, Star, Zap, Heart, Search, Menu, X, ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const containerRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);
  
  const springConfig = { damping: 20, stiffness: 100 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  
  const handleMouseMove = (event) => {
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPos = mouseX / width - 0.5;
    const yPos = mouseY / height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Fashion banner data
  const slides = [
    {
      title: "Summer Collection 2025",
      subtitle: "Redefine Your Style",
      description: "Experience fashion that speaks to your soul. Get up to 40% off on our new summer arrivals.",
      image: "https://images.pexels.com/photos/5698855/pexels-photo-5698855.jpeg",
      cta: "Shop Collection",
      aiCta: "AI Style Assistant",
      bgGradient: "from-pink-500 via-purple-700 to-blue-900",
      accentColor: "#ec4899",
      elements: ["Floral", "Breezy", "Vibrant"]
    },
    {
      title: "Urban Essentials",
      subtitle: "Streetwear Reinvented",
      description: "Stand out with our exclusive urban collection designed for the modern city dweller.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Explore Urban",
      aiCta: "Find My Urban Style",
      bgGradient: "from-gray-900 via-blue-800 to-teal-900",
      accentColor: "#06b6d4",
      elements: ["Edgy", "Comfort", "Urban"]
    },
    {
      title: "Ethereal Elegance",
      subtitle: "For Your Special Moments",
      description: "Captivate everyone with our exquisite evening wear collection designed to make you shine.",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      cta: "View Collection",
      aiCta: "Style Me for Evening",
      bgGradient: "from-purple-900 via-indigo-900 to-blue-900",
      accentColor: "#8b5cf6",
      elements: ["Elegant", "Luxurious", "Memorable"]
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // AI Assistant dialog
  const AIStyleAssistant = () => (
    <motion.div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 bg-opacity-95 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-md w-full z-50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold flex items-center">
          <Sparkles className="w-6 h-6 mr-2 text-primary" />
          AI Style Assistant
        </h3>
        <button onClick={() => setShowAIAssistant(false)} className="btn btn-ghost btn-circle">
          <X className="w-5 h-5" />
        </button>
      </div>
      <p className="mb-6">Tell me about your style preferences and I'll find the perfect items for you!!</p>
      <div className="flex flex-col space-y-4">
        <input type="text" placeholder="What's your style vibe?" className="input input-bordered w-full" />
        <button className="btn btn-primary w-full">
          Discover Your Style <Zap className="w-5 h-5 ml-2" />
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden" ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Background image with parallax effect */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
              scale: 1.1,
              rotateX: springRotateX,
              rotateY: springRotateY
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent opacity-60"></div>
          
          {/* Animated floating elements */}
          {slides[currentSlide].elements.map((element, index) => (
            <motion.div
              key={index}
              className="absolute text-white px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
              style={{
                top: `${20 + index * 25}%`,
                left: `${10 + index * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              {element}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-white px-8 md:px-16 lg:px-24">
        <motion.div
          className="mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <motion.span 
            className="text-sm uppercase tracking-widest border border-white/30 rounded-full px-4 py-1.5 inline-flex items-center backdrop-blur-sm bg-black/20"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.4)" }}
          >
            <Star className="w-4 h-4 mr-2" fill="currentColor" />
            New Collection
          </motion.span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}
        >
          {slides[currentSlide].title.split(' ').map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              whileHover={{ scale: 1.05, color: slides[currentSlide].accentColor }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl font-light mb-6 max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {slides[currentSlide].subtitle}
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mb-8 backdrop-blur-sm bg-black/20 p-4 rounded-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          {slides[currentSlide].description}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <motion.button 
            className="btn btn-lg group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            style={{ background: slides[currentSlide].accentColor, border: 'none' }}
          >
            <span className="relative z-10 flex items-center">
              {slides[currentSlide].cta}
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.span 
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ 
                x: hovered ? "0%" : "-100%", 
                opacity: hovered ? 0.2 : 0 
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
          
          <motion.button 
            className="btn btn-outline btn-lg group relative overflow-hidden backdrop-blur-sm bg-white/10 border-white/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAIAssistant(true)}
          >
            <span className="relative z-10 flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              {slides[currentSlide].aiCta}
              <Zap className="w-5 h-5 ml-2 group-hover:animate-pulse" />
            </span>
            <motion.span 
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%", opacity: 0 }}
              whileHover={{ x: "0%", opacity: 0.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'}`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation arrows */}
      <motion.button 
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle glass"
        onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight className="w-6 h-6 rotate-180" />
      </motion.button>
      <motion.button 
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle glass"
        onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight className="w-6 h-6" />
      </motion.button>
      
      {/* Decorative animated elements */}
      <motion.div 
        className="absolute top-16 right-16 text-white opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <ShoppingBag size={140} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-32 left-16 text-white opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Sparkles size={100} />
      </motion.div>
      
      {/* Animated discount badge */}
      <motion.div 
        className="absolute top-8 right-8 bg-primary text-white font-bold py-2 px-4 rounded-full flex items-center shadow-lg"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Zap className="w-5 h-5 mr-2" fill="white" />
        UP TO 40% OFF
      </motion.div>

      {/* AI Assistant Modal */}
      <AnimatePresence>
        {showAIAssistant && (
          <motion.div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAIAssistant(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AIStyleAssistant />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroBanner;
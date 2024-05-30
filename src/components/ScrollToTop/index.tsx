import React, { useState, useEffect } from "react";
import { ArrowUp } from 'lucide-react';


const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Se a posição vertical da página for maior que 300, mostra a seta, caso contrário, oculta
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Adiciona um listener de scroll ao montar o componente
    window.addEventListener("scroll", toggleVisibility);

    // Remove o listener de scroll ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-primary-primary p-4 rounded-full focus:outline-none md:animate-bounce "
        >
          <ArrowUp className="h-14" size={28}/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;

import { useEffect, useState } from 'react';

// const images = [
//   'public/img1.jpeg',
//   'public/img2.jpeg',
//   'public/img3.jpeg',
// ];

export const Footer = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000); // change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

  return (
    <footer className="bg-gray-900 text-white py-2 mt-1">
      <p className="mt-2 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Aseem Gupta. All rights reserved.
        </p>
    </footer>
  );
};


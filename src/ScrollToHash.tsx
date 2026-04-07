// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export const ScrollToHash = () => {
//   const { hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       const el = document.querySelector(hash);
//       if (el) {
//         el.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [hash]);

//   return null;
// };

//2

// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export const ScrollToHash = () => {
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       // Чекаме 150ms за страницата сигурно да се вчита
//       const timeout = setTimeout(() => {
//         const id = hash.replace('#', '');
//         const el = document.getElementById(id);
//         if (el) {
//           el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//       }, 150);
//       return () => clearTimeout(timeout);
//     } else {
//       // Ако нема хаш (одиш чистo на /about), врати на врвот
//       window.scrollTo(0, 0);
//     }
//   }, [pathname, hash]); // Ги пратиме двете промени

//   return null;
// };

//3

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);

      // 1. АКО ВЕЌЕ СМЕ НА HOME (само скролај мазно)
      if (el && pathname === '/') {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } 
      
      // 2. АКО ДОАЃАМЕ ОД ДРУГА СТРАНИЦА (направи инстант скок)
      else {
        // Користиме многу мало доцнење за да го победиме дифолтниот скрол на прелистувачот
        const timeout = setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            // Овде користиме 'instant' или 'auto' за да нема „летање“ низ страната
            element.scrollIntoView({ behavior: 'auto', block: 'start' });
          }
        }, 0); 
        return () => clearTimeout(timeout);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

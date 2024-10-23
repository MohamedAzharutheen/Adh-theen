// pages/_app.js
import '@/styles/globals.css'; // your global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Dynamically import Bootstrap JS on the client side
    import('bootstrap/dist/js/bootstrap.bundle.min').then((module) => {
      // Module loaded, you can use it here if needed
    }).catch((error) => {
      console.error('Failed to load Bootstrap JS:', error);
    });
  }, []);

  return <Component {...pageProps} />;
}

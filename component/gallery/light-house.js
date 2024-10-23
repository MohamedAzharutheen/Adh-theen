import Image from 'next/image'; // For Next.js optimized image loading
import Lightbox from "yet-another-react-lightbox";
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import "yet-another-react-lightbox/styles.css"; 

  const slides = [
    {
      src: "/assets/images/dynamic-gallery/hajji-img.jpg",
      alt: "Image 1",
    },
    {
      src: "/assets/images/dynamic-gallery/IMG-20241017-WA0024.jpg",
      alt: "Image 2",
    },
    {
      src: "/assets/images/dynamic-gallery/IMG-20241017-WA0025.jpg",
      alt: "Image 3",
    },
    {
      src:  "/assets/images/dynamic-gallery/IMG-20241017-WA0026.jpg",
      alt: "Image 3",
    },
    {
      src:  "/assets/images/dynamic-gallery/IMG-20241017-WA0027.jpg",
      alt: "Image 3",
    },
    {
      src:    "/assets/images/dynamic-gallery/IMG-20241017-WA0028.jpg",
      alt: "Image 3",
    },
    {
      src: "/assets/images/dynamic-gallery/IMG-20241017-WA0029.jpg",
      alt: "Image 3",
    },
    {
      src: "/assets/images/dynamic-gallery/IMG-20241017-WA0030.jpg",
      alt: "Image 3",
    },
    {
      src:"/assets/images/dynamic-gallery/ladies-grp.jpg",
      alt: "Image 3",
    },
    {
      src:"/assets/images/dynamic-gallery/ladies-grp2.jpg",
      alt: "Image 3",
    },
    {
      src: "/assets/images/dynamic-gallery/umrah-img.jpg",
      alt: "Image 3",
    },
    // Add more images as needed
  ];

export default function Gallery() {
  const [index, setIndex] = useState(-1); // State for tracking current Lightbox image

  return (
    <>

  <div className="container-fluid">
      
      <h4 className="cw tac fs-33 mfs-24 fw7 fwb mt70 cb ">Journey of Faith : <span className="logo-clr fwb"> Hajj and Umrah </span>  Galleries</h4>
        <p className={`fs-24 green-clr fwb pdt24 tac`}>October Umrah Trip - 2024</p>

      {/* Simple image grid for displaying images */}
      <div className="df fw fac fjc gap20 mt40">
        {slides.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            whileHover={{ scale: 1.05 }} // Add hover effect to scale image
            whileTap={{ scale: 0.95 }} // Shrink image slightly when clicked
            onClick={() => setIndex(index)} // Open Lightbox when image is clicked
            transition={{ type: "spring", stiffness: 400, damping: 20 }} // Add spring-like effect
          >
            <Image
              className="br20"
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              style={{ cursor: 'pointer', width:"100%",height:"auto" }} // Add cursor pointer on hover
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox for displaying clicked image */}
      <Lightbox
        index={index} // Current image index
        slides={slides} // Pass the slides (images) to Lightbox
        open={index >= 0} // Open Lightbox when index is valid
        close={() => setIndex(-1)} // Close Lightbox by resetting index
      />
  </div>
      {/* Optional styling for the image grid */}
      <style jsx>{`

        .gallery-item {
          flex-basis: 30%;
          max-width: 300px;
        }
        @media (max-width: 768px) {
          .gallery-item {
            flex-basis: 45%;
          }
        }
        @media (max-width: 480px) {
          .gallery-item {
            flex-basis: 100%;
          }
        }
      `}</style>
    </>
  );
}

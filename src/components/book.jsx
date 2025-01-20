import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './book.css';
import image1 from '../assets/Monograme.png';

function BookModel() {
  const { scene } = useGLTF('../assets/livre.gltf'); // Path to your GLTF file
  return <primitive object={scene} />;
}

const Book = () => {
  return (
    <div name="Book">
      {/* Navbar */}
      <nav className="navbar">
        <img src={image1} alt="Monogram" className="navbar-logo" />
      </nav>

      {/* 3D Book */}
      <div className="canvas-container">
        <Canvas>
          {/* Add Lights */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* Add 3D Book */}
          <BookModel />

          {/* Controls for interaction */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="content">
        <h1>BOOK</h1>
      </div>
    </div>
  );
};

export default Book;

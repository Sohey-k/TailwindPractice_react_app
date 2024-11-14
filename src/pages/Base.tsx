// src/pages/Base.tsx

import React from 'react';
import SlidingText from '../components/SlidingText';
// import { motion } from 'framer-motion';
// import myImage from '../../public/Girl-Rearme.png'; // 画像のパスを指定
export const Base: React.FC = () => {
    return (
      <div className="flex justify-center items-center h-screen">
      <SlidingText text="RE:ARME" />
    </div>
    );
  };
  
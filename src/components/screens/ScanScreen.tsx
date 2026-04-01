import React from 'react';
import { motion } from 'motion/react';
import { X, Zap, Camera } from 'lucide-react';
import Button from '../ui/Button';

interface ScanScreenProps {
  onBack: () => void;
  onScanComplete: () => void;
}

const ScanScreen = ({ onBack, onScanComplete }: ScanScreenProps) => (
  <div className="h-[100svh] bg-black relative flex flex-col items-center justify-center p-6 pt-safe pb-safe">
    <button onClick={onBack} className="absolute top-12 left-6 w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center backdrop-blur-md">
      <X />
    </button>
    <div className="w-64 h-64 border-2 border-natty-lime rounded-[40px] relative">
      <div className="absolute inset-0 border-4 border-natty-lime/20 rounded-[40px] animate-pulse" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-natty-lime/20" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-natty-lime/20" />
      <motion.div 
        animate={{ y: [0, 256, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-1 bg-natty-lime shadow-[0_0_15px_rgba(197,217,55,0.8)]"
      />
    </div>
    <div className="mt-12 text-center space-y-4">
      <h2 className="text-2xl font-bold text-white">Scanne le QR Code</h2>
      <p className="text-white/40 text-sm">Place le code présent sur le frigo Natty dans le cadre pour le déverrouiller.</p>
      <Button onClick={onScanComplete} variant="lime" className="mt-8">Simuler Scan</Button>
    </div>
    <div className="absolute bottom-12 flex gap-4">
      <button className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white"><Zap size={24} /></button>
      <button className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white"><Camera size={24} /></button>
    </div>
  </div>
);

export default ScanScreen;

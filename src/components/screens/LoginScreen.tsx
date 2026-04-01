import React from 'react';
import { motion } from 'motion/react';
import { Mail, LockKeyhole } from 'lucide-react';
import Button from '../ui/Button';

interface LoginScreenProps {
  onLogin: () => void;
  onSignup: () => void;
  onForgot: () => void;
}

const LoginScreen = ({ onLogin, onSignup, onForgot }: LoginScreenProps) => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-[100svh] bg-natty-beige p-8 flex flex-col pt-safe pb-safe">
      <div className="flex-1 flex flex-col justify-center">
        <div className="w-16 h-16 bg-natty-teal rounded-2xl flex items-center justify-center text-natty-lime font-black text-3xl mb-8">N</div>
        <h1 className="text-4xl font-black text-natty-teal mb-2">Bon retour !</h1>
        <p className="text-natty-charcoal/60 font-medium mb-12">Connecte-toi pour continuer ton aventure Natty.</p>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-natty-charcoal/60 ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-natty-charcoal/20" size={20} />
              <input type="email" placeholder="ton@email.com" className="w-full h-14 bg-white rounded-2xl pl-14 pr-6 font-bold border-2 border-transparent focus:border-natty-teal outline-none transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-natty-charcoal/60 ml-1">Mot de passe</label>
            <div className="relative">
              <LockKeyhole className="absolute left-5 top-1/2 -translate-y-1/2 text-natty-charcoal/20" size={20} />
              <input type="password" placeholder="••••••••" className="w-full h-14 bg-white rounded-2xl pl-14 pr-6 font-bold border-2 border-transparent focus:border-natty-teal outline-none transition-all" />
            </div>
          </div>
          <button onClick={onForgot} className="text-xs font-bold text-natty-teal/60 hover:text-natty-teal transition-colors ml-1">Mot de passe oublié ?</button>
        </div>
      </div>
      
      <div className="space-y-4">
        <Button onClick={onLogin} variant="primary" className="w-full h-16 text-lg">Se connecter</Button>
        <button onClick={onSignup} className="w-full py-4 text-sm font-bold text-natty-charcoal/60">
          Pas encore de compte ? <span className="text-natty-teal">S'inscrire</span>
        </button>
      </div>
    </motion.div>
  );
};

export default LoginScreen;

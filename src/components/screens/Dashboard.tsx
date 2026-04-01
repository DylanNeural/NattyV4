import React from 'react';
import { Bell, Droplets, Clock, Zap, Map as MapIcon, Users } from 'lucide-react';
import Card from '../ui/Card';
import { UserProfile, Screen } from '../../types';

interface DashboardProps {
  user: UserProfile;
  onNavigate: (s: Screen) => void;
}

const Dashboard = ({ user, onNavigate }: DashboardProps) => {
  return (
    <div className="space-y-6 pb-24 pb-safe">
      <header className="flex justify-between items-center p-6 bg-natty-beige sticky top-0 z-10 pt-safe">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-natty-teal rounded-xl flex items-center justify-center text-natty-lime font-black text-xl">N</div>
          <div>
            <h2 className="font-bold text-xl">Bonjour, {user.name} 👋</h2>
            <p className="text-xs text-natty-charcoal/60">Mardi 31 mars</p>
          </div>
        </div>
        <button onClick={() => onNavigate('notifications')} className="w-10 h-10 bg-natty-teal text-white rounded-full flex items-center justify-center relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-natty-beige rounded-full"></span>
        </button>
      </header>

      <div className="px-6 space-y-6">
        <Card className="grid grid-cols-3 gap-4 p-4">
          <div className="flex flex-col items-center justify-center border-r border-black/5">
            <div className="relative w-16 h-16 flex items-center justify-center mb-2">
              <svg className="w-full h-full -rotate-90">
                <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4" className="text-natty-charcoal/5" />
                <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="175.9" strokeDashoffset="44" className="text-natty-lime" />
              </svg>
              <span className="absolute text-xs font-bold">75%</span>
            </div>
            <span className="text-lg font-black">1 840</span>
            <span className="text-[10px] uppercase tracking-wider text-natty-charcoal/60 font-bold">kcal</span>
          </div>
          <div className="flex flex-col items-center justify-center border-r border-black/5">
            <Droplets className="text-blue-500 mb-2" size={24} />
            <span className="text-lg font-black">1.2 / 2.5 L</span>
            <span className="text-[10px] uppercase tracking-wider text-natty-charcoal/60 font-bold">Hydratation</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Clock className="text-natty-orange mb-2" size={24} />
            <span className="text-lg font-black">12h30</span>
            <span className="text-[10px] uppercase tracking-wider text-natty-charcoal/60 font-bold">Repas</span>
          </div>
        </Card>

        <div className="bg-natty-lime/20 p-6 rounded-3xl border border-natty-lime/30 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2 text-natty-teal">
            <Zap size={18} fill="currentColor" />
            <span className="font-bold text-sm">Conseil IA</span>
          </div>
          <p className="text-natty-teal font-medium leading-snug">Après l'effort, privilégiez les protéines dans les 30 premières minutes pour optimiser votre récupération musculaire.</p>
        </div>

        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h3 className="font-bold text-lg">Découvrir</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card onClick={() => onNavigate('social')} className="p-4 bg-white border-none flex items-center gap-4">
              <div className="w-12 h-12 bg-natty-teal/10 rounded-2xl flex items-center justify-center">
                <Users size={24} className="text-natty-teal" />
              </div>
              <div className="flex-1">
                <span className="font-bold text-sm text-natty-teal block">Communauté</span>
                <p className="text-[10px] text-natty-charcoal/60 font-medium">Rejoins les sportifs de ta ville</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h3 className="font-bold text-lg">Défi en cours</h3>
            <span className="text-natty-lime font-bold text-sm">3 / 7 jours</span>
          </div>
          <Card onClick={() => onNavigate('challenges')} className="p-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold">Hydrate Challenge 💧</h4>
            </div>
            <div className="h-2 w-full bg-natty-charcoal/5 rounded-full overflow-hidden">
              <div className="h-full bg-natty-lime w-[43%]" />
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h3 className="font-bold text-lg">Articles Santé</h3>
            <button className="text-natty-teal font-bold text-sm">Voir tout</button>
          </div>
          <div className="overflow-x-auto flex gap-4 pb-4 -mx-6 px-6 no-scrollbar">
            {[
              { id: 1, title: "Les 5 aliments essentiels pour les sportifs à Toulouse", category: "Nutrition", seed: "food1" },
              { id: 2, title: "Optimiser sa récupération après une séance de CrossFit", category: "Récupération", seed: "fitness1" },
              { id: 3, title: "Le guide du jeûne intermittent pour débutants", category: "Santé", seed: "clock1" },
              { id: 4, title: "Hydratation : pourquoi 2L ne suffisent pas toujours", category: "Hydratation", seed: "water1" }
            ].map(article => (
              <Card key={article.id} className="min-w-[280px] p-0 overflow-hidden border-none shadow-md">
                <img src={`https://picsum.photos/seed/${article.seed}/400/200`} alt="Article" className="w-full h-32 object-cover" referrerPolicy="no-referrer" />
                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-natty-teal bg-natty-teal/10 px-2 py-1 rounded-md">{article.category}</span>
                  <h4 className="font-bold leading-tight text-natty-charcoal">{article.title}</h4>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

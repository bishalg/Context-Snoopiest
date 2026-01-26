
import React from 'react';

interface FutureCardProps {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
}

export const FutureFrontierCard: React.FC<FutureCardProps> = ({ icon, title, subtitle, description }) => {
    return (
        <div className="bg-white dark:bg-slate-900 border-t-4 border-t-violet-500 rounded-xl p-5 shadow-lg transition-all hover:scale-[1.02] border-x border-b border-black/5 dark:border-white/5">
            <div className="text-2xl mb-2">{icon}</div>
            <h4 className="font-bold text-slate-800 dark:text-white text-sm">{title}</h4>
            <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-2 tracking-widest">{subtitle}</div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

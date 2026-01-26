
import React from 'react';

interface MilestoneCardProps {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    outcome: string;
    color: string;
}

export const MilestoneCard: React.FC<MilestoneCardProps> = ({ id, title, subtitle, description, outcome, color }) => {
    return (
        <div className="relative group">
            {/* The Card Content */}
            <div className={`bg-white dark:bg-slate-900 border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-xl transition-all hover:shadow-2xl hover:border-${color}-500/50 border-l-4 border-l-${color}-500`}>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white m-0 !mt-0">{title}</h3>
                <div className={`text-xs font-bold text-${color}-600 dark:text-${color}-400 uppercase mb-3 tracking-wider`}>{subtitle}</div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                    {description}
                    <br /><strong className="text-slate-900 dark:text-slate-200">Outcome:</strong> {outcome}
                </p>
            </div>
        </div>
    );
};

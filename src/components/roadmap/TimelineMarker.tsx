
import React from 'react';

interface TimelineMarkerProps {
    id: number;
    color: string;
}

const colorGradients: Record<string, string> = {
    sky: 'from-sky-400 via-blue-500 to-indigo-600',
    teal: 'from-teal-400 via-emerald-500 to-cyan-600',
    amber: 'from-amber-400 via-orange-500 to-red-600',
    indigo: 'from-indigo-400 via-violet-500 to-purple-600',
    violet: 'from-violet-400 via-purple-500 to-fuchsia-600',
};

export const TimelineMarker: React.FC<TimelineMarkerProps> = ({ id, color }) => {
    const gradient = colorGradients[color] || 'from-slate-400 to-slate-600';

    return (
        <div className={`absolute left-0 top-1 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg border-2 border-white dark:border-slate-900 z-20 hover:scale-125 transition-all duration-300 pointer-events-none text-sm text-white bg-gradient-to-br ${gradient} shadow-${color}-500/30`}>
            {/* Inner glass reflection */}
            <div className="absolute inset-0.5 rounded-full bg-white/20 blur-[1px] pointer-events-none"></div>
            <span className="relative z-10">{id}</span>
        </div>
    );
};

import React from 'react';
import Link from 'next/link';

export default function PBCTFbanner() {
    return (
        // Right side - PBCTF Terminal
        <div 
        className="flex-shrink-0 w-full lg:w-[28rem]"
        data-aos="zoom-y-out"
        data-aos-delay="600"
        >
        <Link href="/pbctf">
            <div className="relative group cursor-pointer">
            {/* Terminal Window */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-green-400/40 rounded-lg shadow-2xl group-hover:border-green-400/70 group-hover:bg-gray-900/80 transition-all duration-300 overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-gray-800/80 backdrop-blur-sm border-b border-green-400/30 px-4 py-3 flex items-center">
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                    <span className="text-green-400 font-mono text-sm">terminal@pbctf:~$</span>
                </div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-5 bg-black/60 backdrop-blur-sm group-hover:bg-black/70 transition-colors duration-300">
                <div className="font-mono text-sm space-y-2">
                    <div className="text-green-400">
                    <span className="text-green-500">guest@pb-community</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ </span>
                    <span className="animate-pulse">|</span>
                    </div>
                    
                    <div className="text-green-300 leading-relaxed space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400">&gt;</span>
                        <span>Initializing PBCTF 4.0...</span>
                        <span className="text-green-400">[✓]</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400">&gt;</span>
                        <span>Competition Status:</span>
                        <span className="text-green-400 font-bold animate-pulse">LIVE</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400">&gt;</span>
                        <span>Registration:</span>
                        <span className="text-green-400 font-bold">OPEN</span>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-green-400/30">
                        <div className="text-cyan-300">
                        <span className="text-white">$ </span>
                        <span>echo &quot;Join the CTF challenge!&quot;</span>
                        </div>
                        <div className="text-green-200 ml-2 mt-1">
                        Join the CTF challenge!
                        </div>
                    </div>
                    
                    <div className="mt-3">
                        <div className="text-cyan-300">
                        <span className="text-white">$ </span>
                        <span>./register_now.sh</span>
                        </div>
                        <div className="flex items-center gap-2 ml-2 mt-2">
                        <span className="text-green-400">&gt;</span>
                        <span className="text-black bg-green-400/90 backdrop-blur-sm px-3 py-1.5 rounded font-bold text-sm group-hover:bg-green-300/90 transition-colors duration-300">
                            CLICK TO REGISTER
                        </span>
                        <span className="text-green-400 animate-bounce">←</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
            {/* Enhanced glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400/30 via-emerald-400/30 to-green-500/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>
            </div>
        </Link>
        </div>
    )
}
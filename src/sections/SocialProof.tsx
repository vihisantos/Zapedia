import { motion } from "framer-motion";

export function SocialProof() {
    const companies = [
        "TechGlobal", "InovaSys", "AlphaCode", "BetaTrade", "GammaSoft", "DeltaCorp",
        "NexGen", "CloudFlow", "DataStack", "LogicGate", "PrimeSolutions", "VertexIQ"
    ];

    return (
        <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-10">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                    Utilizado por equipes de alta performance em todo o mundo
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
                >
                    {/* Duplicate set for seamless loop */}
                    {[...companies, ...companies].map((company, index) => (
                        <div key={index} className="flex items-center gap-3 text-2xl font-black text-slate-300 transition-colors duration-300 hover:text-brand-500 group">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-brand-50 group-hover:scale-110">
                                <div className="w-5 h-5 bg-slate-300 rounded-[4px] group-hover:bg-brand-400"></div>
                            </div>
                            <span className="tracking-tighter">{company}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Masks for a premium look */}
                <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10"></div>
            </div>
        </section>
    );
}

import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Sophisticated Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                        Pronto para transformar seu <br />
                        <span className="text-brand-400">WhatsApp em uma máquina?</span>
                    </h2>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        Junte-se a mais de 2.000 empresas que já escalaram suas vendas com o Zapedia.
                        Comece agora e veja a diferença em minutos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="#pricing" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto bg-white text-slate-900 hover:bg-brand-50 h-16 px-10 text-lg font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95">
                                Começar Teste Grátis
                            </Button>
                        </a>
                        <a href="https://wa.me/5511999999999?text=Olá! Gostaria de uma demonstração do Zapedia." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-700 text-white hover:bg-slate-800 bg-transparent h-16 px-10 text-lg font-bold rounded-full transition-all">
                                Falar com Consultor <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </a>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                            Set-up Instantâneo
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                            Cancelamento em 1 clique
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                            Sem Taxa de Adesão
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

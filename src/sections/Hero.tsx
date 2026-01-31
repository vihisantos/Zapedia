import { Button } from "../components/ui/button";
import { ArrowRight, MessageSquare, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-24 pb-32 overflow-hidden bg-slate-50">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-200/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 shadow-sm text-brand-700 text-sm font-semibold mb-8"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
                        </span>
                        Novidade: Integração com CRM disponível
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                        Seu WhatsApp, <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-600 to-accent-600">
                            Superpotência de Vendas.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                        Centralize atendimento, automatize conversas e multiplique suas vendas. A plataforma tudo-em-um para times que crescem rápido.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <a href="#pricing">
                            <Button size="lg" className="w-full sm:w-auto gap-2 text-base h-14 px-8 shadow-brand-500/20 shadow-lg hover:shadow-brand-500/30 transition-all">
                                Começar Grátis <ArrowRight className="w-5 h-5" />
                            </Button>
                        </a>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 text-base h-14 px-8 text-slate-700 bg-white hover:bg-slate-50 border-slate-200">
                            <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" /> Ver Demonstração
                        </Button>
                    </div>

                    <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-500" />
                            <span>Setup em 2 min</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-500" />
                            <span>Sem cartão de crédito</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-500" />
                            <span>Suporte BR 🇧🇷</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content (Illustration/Graphic) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:h-[700px] flex items-center justify-center perspective-1000"
                >
                    {/* Decorative Elements around phone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-linear-to-tr from-brand-100/30 to-accent-100/30 rounded-full blur-[100px] -z-10" />

                    <div className="relative w-full max-w-[400px] aspect-9/19 bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
                        {/* Dynamic Island Area */}
                        <div className="absolute top-0 left-0 w-full h-8 bg-slate-900 z-50 flex justify-center">
                            <div className="w-32 h-6 bg-black rounded-b-2xl"></div>
                        </div>

                        {/* Screen Content */}
                        <div className="w-full h-full bg-slate-50 flex flex-col pt-10">
                            {/* Header */}
                            <div className="px-4 py-3 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-10 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-linear-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-xs">
                                    Z
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 leading-none">Zapedia Comercial</h3>
                                    <p className="text-[10px] text-brand-600 font-medium">Online agora</p>
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden relative">
                                <div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] opacity-[0.03]"></div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.0 }}
                                    className="self-start max-w-[85%] bg-white rounded-2xl rounded-tl-none p-4 shadow-sm relative z-10 text-slate-800 text-sm"
                                >
                                    Olá! Gostaria de saber mais sobre a automação do Zapedia. 🚀
                                    <span className="text-[10px] text-slate-400 block text-right mt-1">10:42</span>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.0 }}
                                    className="self-end max-w-[85%] bg-brand-500 text-white rounded-2xl rounded-tr-none p-4 shadow-sm relative z-10 text-sm"
                                >
                                    Oi! Claro. Com o Zapedia você centraliza seu time e automatiza respostas 24/7.
                                    <span className="text-[10px] text-brand-100 block text-right mt-1">10:42</span>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 3.0 }}
                                    className="self-start max-w-[85%] bg-white rounded-2xl rounded-tl-none p-3 shadow-sm relative z-10"
                                >
                                    <div className="flex gap-1.5">
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                                    </div>
                                </motion.div>

                                {/* Alert Badge */}
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 4.5, type: "spring" }}
                                    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium shadow-xl flex items-center gap-2 whitespace-nowrap z-20"
                                >
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    Lead capturado com sucesso!
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Cards Behind */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute top-20 right-0 lg:-right-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <Zap className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 font-medium">Velocidade</div>
                                <div className="text-sm font-bold text-slate-800">Tempo Real</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="absolute bottom-32 -left-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 hidden lg:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
                                <MessageSquare className="w-5 h-5 text-accent-600" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 font-medium">Conversas</div>
                                <div className="text-sm font-bold text-slate-800">+450/dia</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}


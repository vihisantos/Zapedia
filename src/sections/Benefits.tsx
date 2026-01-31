import { Button } from "../components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Benefits() {
    return (
        <section id="benefits" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 space-y-40">
                {/* Benefit 1 */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-100/30 rounded-full blur-[120px] -z-10" />
                        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
                            {/* Dashboard Mockup Content */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">Z</div>
                                        <div className="text-sm font-bold text-slate-800">Insights Analytics</div>
                                    </div>
                                    <div className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">Ao vivo</div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Taxa de Conversão</div>
                                        <div className="text-2xl font-black text-slate-800">12.4%</div>
                                        <div className="text-[10px] text-green-600 font-bold mt-1">↑ 2.1% este mês</div>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Tempo Médio Resposta</div>
                                        <div className="text-2xl font-black text-slate-800">45s</div>
                                        <div className="text-[10px] text-brand-600 font-bold mt-1">Meta: 60s</div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="text-[10px] uppercase font-bold text-slate-400">Atividade dos Canais</div>
                                    <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex">
                                        <div className="h-full bg-brand-500 w-[65%]"></div>
                                        <div className="h-full bg-accent-500 w-[25%] opacity-70"></div>
                                        <div className="h-full bg-slate-300 w-[10%] opacity-50"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-bold text-slate-500">
                                        <span>WhatsApp (65%)</span>
                                        <span>CRM (25%)</span>
                                        <span>Outros (10%)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-bold mb-8 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                            Performance em Tempo Real
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                            Domine sua operação com <span className="text-brand-600">dados reais.</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Esqueça planilhas manuais. Nosso dashboard inteligente consolida todas as métricas essenciais para você otimizar seu funil de vendas instantaneamente.
                        </p>
                        <ul className="space-y-5 mb-10">
                            {[
                                "Relatórios operacionais de ponta a ponta",
                                "Monitoramento de SLA ultra-preciso",
                                "Score de satisfação do cliente automatizado",
                                "Sincronização instantânea com seu ERP/CRM"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                                    <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-500/20">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button size="lg" className="h-14 px-10 rounded-full group">
                            Explorar Recursos <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>

                {/* Benefit 2 */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-bold mb-8 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                            IA & Automação No-Code
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                            Escalabilidade infinita <span className="text-accent-600">sem contratar mais.</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Crie fluxos de conversação complexos em minutos. Nossa IA proprietária entende a intenção do cliente e qualifica leads enquanto você dorme.
                        </p>
                        <ul className="space-y-5 mb-10">
                            {[
                                "Flow Builder Visual: Arraste e solte",
                                "Integração nativa com ChatGPT-4o",
                                "Transbordo Inteligente para o time certo",
                                "Detecção de sentimentos automática"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                                    <div className="w-7 h-7 rounded-lg bg-accent-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-accent-500/20">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button variant="outline" size="lg" className="h-14 px-10 rounded-full border-slate-200 hover:bg-slate-50 group">
                            Configurar Fluxos <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent-100/30 rounded-full blur-[120px] -z-10" />
                        <div className="bg-slate-950 border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
                            <div className="flex items-center gap-2 mb-6 opacity-40">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                <div className="ml-4 text-[10px] font-mono text-slate-600">automation_engine.py</div>
                            </div>
                            <div className="font-mono text-base leading-relaxed p-4 bg-black/40 rounded-2xl border border-white/5">
                                <span className="text-purple-400">class</span> <span className="text-yellow-300">WhatsAppBot</span>:<br />
                                &nbsp;&nbsp;<span className="text-purple-400">async def</span> <span className="text-blue-400">handle_lead</span>(self, msg):<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;intent = <span className="text-purple-400">await</span> self.ia.<span className="text-blue-400">analyze</span>(msg)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> intent == <span className="text-green-300">"pricing"</span>:<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-purple-400">await</span> self.<span className="text-blue-400">send_plans</span>()<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># Listening for new signals...</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="inline-block w-2 h-5 bg-brand-500 animate-pulse translate-y-1"></span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

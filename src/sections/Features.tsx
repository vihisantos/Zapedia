import { MessageCircle, Users, BarChart3, ShieldCheck, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: MessageCircle,
        title: "Múltiplos Atendentes",
        description: "Conecte toda sua equipe em um único número de WhatsApp. Distribua conversas automaticamente.",
    },
    {
        icon: Zap,
        title: "Respostas Rápidas",
        description: "Crie bancos de respostas e automações para agilizar o atendimento e reduzir o tempo de esperar.",
    },
    {
        icon: Users,
        title: "Gestão de Contatos",
        description: "Organize seus leads com etiquetas, funis de vendas e anotações detalhadas.",
    },
    {
        icon: BarChart3,
        title: "Relatórios Detalhados",
        description: "Acompanhe métricas de atendimento, tempo de resposta e performance da equipe em tempo real.",
    },
    {
        icon: ShieldCheck,
        title: "Segurança de Dados",
        description: "Conversas criptografadas e backups automáticos para garantir a segurança da sua operação.",
    },
    {
        icon: Globe,
        title: "Acesso Remoto",
        description: "Acesse de qualquer lugar, via web ou aplicativo móvel. Sua operação nunca para.",
    }
];

export function Features() {
    return (
        <section id="features" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Soft decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-100/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
                    >
                        Tudo o que você precisa para <span className="text-brand-600">escalar</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-slate-600 leading-relaxed"
                    >
                        Ferramentas poderosas para profissionalizar seu atendimento, automatizar processos e vender muito mais.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 hover:border-brand-100 relative overflow-hidden"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-2 bg-linear-to-br from-brand-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-8 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

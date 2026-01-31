import { Button } from "../components/ui/button";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "97",
        description: "Ideal para profissionais autônomos e pequenas equipes.",
        features: ["1 Número de WhatsApp", "2 Atendentes", "Bando de Respostas Rápidas", "Histórico de 3 meses"],
        featured: false,
    },
    {
        name: "Professional",
        price: "197",
        description: "Para empresas em crescimento que precisam de automação.",
        features: ["Até 5 Números", "10 Atendentes", "Chatbot / Automação Simples", "API de Integração", "Histórico Ilimitado"],
        featured: true,
    },
    {
        name: "Enterprise",
        price: "Sob Consulta",
        description: "Soluções customizadas para grandes operações.",
        features: ["Números Ilimitados", "Atendentes Ilimitados", "Gerente de Conta Dedicado", "Setup Personalizado", "SLA Garantido"],
        featured: false,
        customAction: "Falar com Vendas",
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-200/50 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent-200/50 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Planos flexíveis para cada fase
                    </h2>
                    <p className="text-lg text-slate-600">
                        Comece pequeno e cresça com a gente. Sem fidelidade forçada.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl p-8 border ${plan.featured ? 'border-brand-500 shadow-2xl scale-105 relative z-10' : 'border-slate-200 shadow-lg'}`}
                        >
                            {plan.featured && (
                                <div className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    Mais Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                            <p className="text-slate-500 text-sm mt-2 min-h-[40px]">{plan.description}</p>

                            <div className="my-8">
                                {plan.price !== "Sob Consulta" && <span className="text-sm text-slate-500">R$</span>}
                                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                                {plan.price !== "Sob Consulta" && <span className="text-sm text-slate-500">/mês</span>}
                            </div>

                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <Button
                                asChild
                                variant={plan.featured ? 'default' : 'outline'}
                                className="w-full"
                            >
                                <a
                                    href={`https://wa.me/5511999999999?text=${encodeURIComponent(
                                        `Olá! Tenho interesse no plano ${plan.name} da Zapedia.`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {plan.customAction || "Assinar Agora"}
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

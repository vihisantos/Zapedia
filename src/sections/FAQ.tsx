import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Preciso manter o celular ligado?",
        answer: "Não! Nossa tecnologia em nuvem conecta seu WhatsApp diretamente aos nossos servidores. Você pode desligar o celular ou ficar sem internet que o sistema continua funcionando."
    },
    {
        question: "Existe fidelidade ou multa de cancelamento?",
        answer: "Nenhuma. Nossos planos são mensais e você pode cancelar a qualquer momento sem burocracia ou taxas escondidas."
    },
    {
        question: "Posso usar o mesmo número para vários atendentes?",
        answer: "Sim! Essa é a principal vantagem. Você centraliza tudo em um único número oficial e distribui os atendimentos para quantos operadores precisar."
    },
    {
        question: "O sistema tem aplicativo para celular?",
        answer: "Sim, possuímos aplicativo para Android e iOS, permitindo que você e sua equipe atendam de qualquer lugar."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-slate-600">
                        Tire suas dúvidas sobre o Zapedia.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 hover:bg-white transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left font-semibold text-slate-900 focus:outline-none"
                            >
                                {faq.question}
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-brand-600 shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

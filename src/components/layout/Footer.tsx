import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, Send } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-600/20">
                                <span className="text-white font-black text-xl">Z</span>
                            </div>
                            <span className="text-2xl font-black text-white tracking-tighter">
                                Zapedia
                            </span>
                        </div>
                        <p className="text-slate-500 mb-8 leading-relaxed max-w-sm">
                            A plataforma líder em inteligência conversacional para WhatsApp.
                            Transformamos conversas simples em relacionamentos lucrativos.
                        </p>
                        <div className="flex gap-3">
                            {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 border border-slate-800">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h5 className="font-bold text-white text-base mb-6 uppercase tracking-wider">Produto</h5>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#features" className="hover:text-brand-500 transition-colors">Funcionalidades</a></li>
                            <li><a href="#pricing" className="hover:text-brand-500 transition-colors">Planos</a></li>
                            <li><a href="#" className="hover:text-brand-500 transition-colors">Integrações</a></li>
                            <li><a href="#" className="hover:text-brand-500 transition-colors">API Docs</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h5 className="font-bold text-white text-base mb-6 uppercase tracking-wider">Empresa</h5>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#" className="hover:text-brand-500 transition-colors">Sobre Nós</a></li>
                            <li><a href="#" className="hover:text-brand-500 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-brand-400 transition-colors">Termos</a></li>
                            <li><a href="#" className="hover:text-brand-400 transition-colors">Privacidade</a></li>
                        </ul>
                    </div>

                    {/* Newsletter & Contact */}
                    <div className="lg:col-span-4">
                        <h5 className="font-bold text-white text-base mb-6 uppercase tracking-wider">Newsletter</h5>
                        <p className="text-sm text-slate-500 mb-6 font-medium">Receba dicas de automação e vendas no seu e-mail.</p>
                        <form className="relative mb-8" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-4 pr-16 focus:outline-hidden focus:border-brand-500 transition-colors text-white text-sm"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-brand-600 hover:bg-brand-500 text-white px-4 rounded-lg transition-colors shadow-lg shadow-brand-600/20">
                                <Send className="w-4 h-4" />
                            </button>
                        </form>

                        <ul className="space-y-3 text-sm font-medium">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-brand-500 border border-slate-800">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-slate-400">suporte@zapedia.com.br</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-brand-500 border border-slate-800">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span className="text-slate-400">+55 (11) 99342-1200</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-slate-600 uppercase tracking-widest">
                    <div>
                        &copy; {new Date().getFullYear()} Zapedia Hub. Todos os direitos reservados.
                    </div>
                    <div className="flex gap-8">
                        <span className="text-slate-800">Orgulhosamente feito no Brasil 🇧🇷</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

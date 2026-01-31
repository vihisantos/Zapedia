import { Button } from "../ui/button";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 flex items-center">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {/* Logo Placeholder */}
                    <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Z</span>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-brand-700 to-brand-500">
                        Zapedia
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Funcionalidades</a>
                    <a href="#benefits" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Benefícios</a>
                    <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Preços</a>
                    <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">FAQ</a>
                </div>

                <div className="flex items-center gap-4">
                    {/* <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 hidden sm:block">Login</a> */}
                    <a href="#pricing">
                        <Button size="sm" className="bg-brand-600 hover:bg-brand-700 text-white">
                            Começar Agora
                        </Button>
                    </a>
                </div>
            </div>
        </nav>
    );
}

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <Navbar />
            <main className="grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}

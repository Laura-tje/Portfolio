import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-(--bg) text-(--text)">
        <Header />

        <main className="flex-1 w-full relative">
          <Outlet />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
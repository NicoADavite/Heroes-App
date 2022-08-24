import { Navbar } from "./ui/components/Navbar";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <div className="app">
      <Navbar />
      <AppRouter />
    </div>
  );
};

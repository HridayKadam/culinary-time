
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipeProvider } from "./context/RecipeContext";
import Index from "./pages/Index";
import Medieval from "./pages/Medieval";
import Cyberpunk from "./pages/Cyberpunk";
import Apocalyptic from "./pages/Apocalyptic";
import RecipeDetail from "./pages/RecipeDetail";
import SecretRecipe from "./pages/SecretRecipe";
import SearchResults from "./pages/SearchResults";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import MyRecipes from "./pages/MyRecipes";
import RecipeEditor from "./pages/RecipeEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RecipeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/medieval" element={<Medieval />} />
            <Route path="/cyberpunk" element={<Cyberpunk />} />
            <Route path="/apocalyptic" element={<Apocalyptic />} />
            <Route path="/medieval/:slug" element={<RecipeDetail />} />
            <Route path="/cyberpunk/:slug" element={<RecipeDetail />} />
            <Route path="/apocalyptic/:slug" element={<RecipeDetail />} />
            <Route path="/secret/:era/:slug" element={<SecretRecipe />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/:era/search" element={<SearchResults />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/my-recipes" element={<MyRecipes />} />
            <Route path="/edit/:id" element={<RecipeEditor />} />
            <Route path="/create/:era" element={<RecipeEditor />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RecipeProvider>
  </QueryClientProvider>
);

export default App;

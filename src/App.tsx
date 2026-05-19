import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";
import Home from "@/pages/Home";
import CityPage from "@/pages/CityPage";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <ErrorBoundary>
      <Toaster />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/window-cleaning/:slug" component={CityPage} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

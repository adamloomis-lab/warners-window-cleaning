import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";
import Home from "@/pages/Home";
import CityPage from "@/pages/CityPage";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Accessibility from "@/pages/Accessibility";
import NotFound from "@/pages/NotFound";
import CookieBanner from "@/components/CookieBanner";

export default function App() {
  return (
    <ErrorBoundary>
      <Toaster />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/window-cleaning/:slug" component={CityPage} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/accessibility" component={Accessibility} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <CookieBanner />
    </ErrorBoundary>
  );
}

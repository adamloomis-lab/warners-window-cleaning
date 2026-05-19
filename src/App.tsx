import { Route, Switch } from "wouter";
import { Toaster } from "sonner";

function Placeholder() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-8">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Warner's Window Cleaning
        </h1>
        <p className="text-slate-600">
          Scaffold ready. Components and pages will be ported in Phase 3.
        </p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Placeholder} />
        <Route>{() => <Placeholder />}</Route>
      </Switch>
      <Toaster richColors position="top-center" />
    </>
  );
}


import { Header } from "./components/Header";
import Dashboard from "./pages/Dashboard/page";

function App() {
  return (
    <main className="w-full h-full flex flex-col">
      <Header/>
      <div className="flex-1">
        <Dashboard/>
      </div>
    </main>
    
  );
}

export default App;

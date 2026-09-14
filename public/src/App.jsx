import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to load data", err));
  }, []);

  const handleAdd = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info("Technology removed from stack.");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("Your stack has been cleared.");
  };

  return (
    <div className="min-h-screen bg-base-100 font-sans">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <Banner />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-16">
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-bold mb-6">Available Technologies</h2>
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechCard 
                    key={tech.id} 
                    tech={tech} 
                    onAdd={handleAdd} 
                    isAdded={stack.some(item => item.id === tech.id)} 
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="lg:w-1/4">
            <YourStack 
              stack={stack} 
              onRemove={handleRemove} 
              onRemoveAll={handleRemoveAll} 
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

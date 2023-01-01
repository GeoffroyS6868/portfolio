import * as React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AnimationCanvas from "./components/AnimationCanvas";

function App() {
    return (
        <div className="App">
            <AnimationCanvas/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </div>
    );
}

export default App;

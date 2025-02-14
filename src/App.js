import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { Route, Routes } from "react-router-dom";

import Notfound from "./pages/404";
import About from "./pages/about";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import Projects from "./pages/projects";

import "./app.css";
import { TRACKING_ID } from "./data/tracking";

import LanguageContext from "./LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";


function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

    const [language, setLanguage] = useState('es'); 

    useEffect(() => {
        const browserLanguage = navigator.language;
        
        const detectedLanguage = getLanguageFromBrowser(browserLanguage);
        setLanguage(detectedLanguage);
    }, []);

    const getLanguageFromBrowser = (browserLanguage) => {
        if (browserLanguage.startsWith('es')) {
            return 'es';
        } else if (browserLanguage.startsWith('en')) {
            return 'en';
        } else {
            return 'es'; 
        }
    };

    const languageContextValue = {
        language,
        setLanguage,
    };


	return (
		<LanguageContext.Provider value={languageContextValue}> 
			<div className="App">
                <LanguageSwitcher /> 
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
		</LanguageContext.Provider>
	);
}

export default App;
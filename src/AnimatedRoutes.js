import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages 
import Home from "./pages/home.jsx";
import HistoryWidget from "./components/history/HistoryWidget";
import ArtWidget from "./components/art/ArtWidget";
import Events from "./pages/events";
import FaqWidget from "./components/faq/FaqWidget";
import CollectiveWidget from "./components/collective/CollectiveWidget";


const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={<Home />} />
                <Route path="/history" exact element={<HistoryWidget />} />
                <Route path="/art/:artId" exact 
                element={
                    // kind of workaround to provide art object for a very first rendering 
                    <ArtWidget initialArt={location?.state?.id ? location?.state: undefined}/>
                } />
                <Route path="/collective" exact element={<CollectiveWidget/>} />
                <Route path="/events" exact element={<Events />} />
                <Route path="/faq" exact element={<FaqWidget/>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
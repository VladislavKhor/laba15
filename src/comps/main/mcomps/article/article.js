import './article.css';
import News from '../../../artcomps/news/news';
import About from '../../../artcomps/about/about';
import Contacts from '../../../artcomps/contacts/contacts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Er404 from '../../../artcomps/er404/er404';

export function Article() {
    return (
        <div className="article">
        <BrowserRouter>
            <Routes>
                     
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<Er404 />} />
              
            </Routes>
        </BrowserRouter>
        </div>
    );
}
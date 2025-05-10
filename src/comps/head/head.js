import './head.css'
import { Link } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";

function Head() {
    return (
        <div className="head">   
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/news" reloadDocument> НОВОСТИ </Link></li>
                <li><Link to="/about" reloadDocument> О ПРОЕКТЕ </Link></li>
                <li><Link to="/contacts" reloadDocument> КОНТАКТЫ </Link></li> 
            </ul>
        </nav>
        </BrowserRouter>   
        
        </div>
    )
}
 
export default Head;
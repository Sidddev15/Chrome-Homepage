import Shortcut from "./shortcut";
import SocialLinks from "./socialLinks";
import SearchBar from "./SearchBar";
import Socials from "./heading/social";
import Editable from "./heading/editable";
import './assets/socialLinks.css';


function App () {
    return (
        <div>
            <SocialLinks />
            <Socials />
            <Shortcut />
            <SearchBar />
            <Editable />
        </div>
    );
            
}

export default App;
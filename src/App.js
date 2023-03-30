import Shortcut from "./shortcut";
import SocialLinks from "./socialLinks";
import SearchBar from "./SearchBar";
import Socials from "./heading/social";
import Editable from "./heading/editable";
import './assets/socialLinks.css';


function App () {
    return (
        <div>
            <Editable />
            <SocialLinks />
            <SearchBar />
            <Socials />
            <Shortcut />
        </div>
    );

            
            
}

export default App;
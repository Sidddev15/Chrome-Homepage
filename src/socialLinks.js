import { ImSkype, ImTwitter, ImFacebook, ImLinkedin2, ImInstagram } from "react-icons/im";
import './assets/shortcut.css'; 

function SocialLinks () {
   return (
    <div>
        <a href="https://www.facebook.com/profile.php?id=100053328720096"><ImFacebook/> Facebook</a>
        <a href="https://twitter.com/siddharth150699"><ImTwitter/> Twitter</a>
        <a href="https://www.linkedin.com/in/siddharth1599/"><ImLinkedin2/> LinkedIn</a>
        <a href="https://www.instagram.com/sidddev15/"><ImInstagram/> Instagram</a>
        <a href="https://join.skype.com/invite/xIbnPN8XdvQS"><ImSkype/> Skype</a>
    </div>
   );
}

export default SocialLinks;
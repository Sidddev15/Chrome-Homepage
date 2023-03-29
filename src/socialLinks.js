import { ImSkype, ImTwitter, ImFacebook, ImLinkedin2, ImInstagram, ImGithub,ImStackoverflow } from "react-icons/im";
import './assets/socialLinks.css'; 

function SocialLinks () {
   return (
    <div className="flex justify-center my-8">
        <button id="social-icons"><a href="https://www.facebook.com/profile.php?id=100053328720096" target="_blank" rel="noreferrer"><ImFacebook/>  </a></button>
        <button id="social-icons"><a href="https://twitter.com/siddharth150699" target="_blank" rel="noreferrer"><ImTwitter/>  </a></button>
        <button id="social-icons"><a href="https://www.linkedin.com/in/siddharth1599/" target="_blank" rel="noreferrer"><ImLinkedin2/>  </a></button>
        <button id="social-icons"><a href="https://www.instagram.com/sidddev15/" target="_blank" rel="noreferrer"><ImInstagram/>  </a></button>
        <button id="social-icons"><a href="https://join.skype.com/invite/xIbnPN8XdvQS" target="_blank" rel="noreferrer"><ImSkype/>  </a></button>
        <button id="social-icons"><a href="https://github.com/Sidddev15" target="_blank" rel="noreferrer">< ImGithub /> </a></button>
        <button id="social-icons"><a href="https://stackoverflow.com/users/20270412/siddharth-singh" target="_blank" rel="noreferrer">< ImStackoverflow /> </a></button>
    </div>
    

   );
}

export default SocialLinks;
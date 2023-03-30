import './assets/shortcut.css';

function Shortcut () {
    return (
        <div className='flex justify-center'>
            <button className='mx-8 my-5 pushable' id='shortcut-icons'><a className='front' href="https://chat.openai.com/chat">ChatGPT</a></button>
            <button className='mx-8 my-5 justify-stretch pushable' id='shortcut-icons'><a className='front' href="https://portfoliosiddharthsingh.in/">MyPortfolio</a></button>
            <button className='mx-8 my-5 pushable' id='shortcut-icons'><a className='front' href="https://leetcode.com/Sidd_sr/">LeetCode</a></button>
        </div>
    );
}

export default Shortcut;


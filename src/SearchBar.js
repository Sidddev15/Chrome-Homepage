import './assets/SearchBar.css';

function searchBar () {
    return (
        <div className='flex justify-center my-100'>
            <button className='pushableSearch'><a className='frontSearch' href="https://www.google.com/">Click Here To Search</a></button>
        </div>
        
    );
}

export default searchBar;
import './App.css';

function Search(){

    function searchInput(){
        let currentValue = document.querySelector('input[name=search]').value;

        alert(currentValue)
    }

    return(
        <form>
            <input onKeyUp={searchInput} type="text" name="search" placeholder='Digite a cidade...'></input>
        </form>
    );
}

export default Search;
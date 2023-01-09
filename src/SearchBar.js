import "./SearchBar.css"


const SearchBar = () => {
    return (
     <div className="search_outerBody"> 
      <div className="search_body">
        <div>
        <img
          className="search_icon"
          height="18px"
          width="18px"
          alt="search"
          src="https://purepng.com/public/uploads/large/search-icon-lob.png"
        />
        </div>
        <input
          className="search_input"
          placeholder="Search a Term | Topic"
        />
      </div>  
     </div> 
    );
}

export default SearchBar;
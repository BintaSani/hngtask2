// import React, { useState } from "react";
// import { ReactComponent as Search} from '../../assets/search.svg';

// import './search.scss'


// const SearchBar = (props) => {
//   const [searchValue, setSearchValue] = useState("");
  
//   const handleChange = (e) => {
//     setSearchValue(e.target.value);
//   }

//   const resetInput = () => {
//     setSearchValue("")
//   }

//   const callSearch = (e) => {
//     e.preventDefault();
//     props.search(searchValue);
//     resetInput();
//   }

//   return (
//       <form className="form">
//         <input
//           value={searchValue}
//           onChange={handleChange}
//           placeholder="What do you want to watch?"
//           className="search"
//           type="text"
//         />
//         <Search onClick={callSearch} type="submit" />
//       </form>
//     );
// }

// export default SearchBar;
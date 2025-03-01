import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ setSearchQuery }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(query);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full p-1 mx-2 text-black bg-white rounded-lg"
    >
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 rounded-l-md focus:outline-none"
        value={query}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-yellow-500 rounded-r-md hover:bg-yellow-600"
      >
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
    </form>
  );
}

export default SearchBar;

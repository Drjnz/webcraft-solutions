
import { useState } from 'react';

function SearchBar({ placeholder = 'Rechercher...', onSearch }) {
  const [search, setSearch] = useState('');

  function handleChange(event) {
    const value = event.target.value;
    setSearch(value);
    onSearch(value);
  }

  function clearSearch() {
    setSearch('');
    onSearch('');
  }

  return (
    <div className="container my-4">
      <div className="input-group shadow-sm">

        <span className="input-group-text bg-white">
          <i className="bi bi-search"></i>
        </span>

        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={search}
          onChange={handleChange}
        />

        {search && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={clearSearch}
          >
            <i className="bi bi-x-lg"></i>
            Effacer
          </button>
        )}

      </div>
    </div>
  );
}

export default SearchBar;

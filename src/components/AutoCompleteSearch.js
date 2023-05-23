import React, { useState } from 'react';

function AutoCompleteSearch({ suggestions, handleSearch, searchTerm }) {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = e => {
    handleSearch(e);
    setShowSuggestions(true);
  };

  const handleClick = suggestion => {
    handleSearch({ target: { value: suggestion } });
    setShowSuggestions(false);
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {  // Enter key
      handleSearch({ target: { value: suggestions[activeSuggestion] } });
      setShowSuggestions(false);
    }
    else if (e.keyCode === 38) {  // Up arrow
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    else if (e.keyCode === 40) {  // Down arrow
      if (activeSuggestion - 1 === suggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  return (
    <React.Fragment>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={searchTerm}
        className="searchInput"
        placeholder="Search by language..."
      />
      {showSuggestions && searchTerm && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              onClick={() => handleClick(suggestion)}
              className={index === activeSuggestion ? 'suggestion-active' : ''}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}

export default AutoCompleteSearch;
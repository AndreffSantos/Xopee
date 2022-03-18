import React from 'react';
import CategoriesList from "./categorieslist";

class SearchBar extends React.Component {
  render() {
    const { change, click, input } = this.props;
    return (
      <div className="search-bar">
        <aside>
          <CategoriesList
            change={ change }
          />
        </aside>
        <input 
          type="text"
          name="inputName"
          value={ input }
          onChange={ change }
        />
        <button
          type="button"
          onClick={ click }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default SearchBar;

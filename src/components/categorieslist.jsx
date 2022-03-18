import React from "react";
import { getCategories } from "../services/fetchApi";

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    getCategories().then((response) => {
      this.setState({
        categories: [...response],
      });
    });
  }

  render() {
    const { categories } = this.state;
    const { change } = this.props;
    return (
      <div>
        <select
          name="rate"
          onChange={ change }
        >
          <option value="">Escolha uma Categoria</option>
          { categories.map(({ id, name }) => (
            <option
              key={ id }
              value={ id }
            >
              { name }
            </option>
        )) }
        </select>
      </div>
    );
  }
}

export default CategoriesList;

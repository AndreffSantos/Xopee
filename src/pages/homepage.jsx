import React from "react";
import Header from "../components/header";
import SearchBar from "../components/searchbar";
import ProductCard from "../components/productcard";
import { getProductsFromCategoryAndQuery } from "../services/fetchApi";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      inputName: '',
      rate: '',
    };
  }

  componentDidMount() {
    getProductsFromCategoryAndQuery("", "").then((response) => {
      this.setState({
        productList: response.results,
      });
    });
  }

  handleChange = ({target: { name, value }}) => {
    this.setState({
      [name]: value,
    }, () => {
      if (name === 'rate') {
        this.handleClick();
      }
    });
  }

  handleClick = () => {
    const { inputName, rate } = this.state;
    getProductsFromCategoryAndQuery(rate, inputName).then((response) => {
      this.setState({
        productList: response.results,
      });
    });
  }

  render() {
    const { productList, inputName } = this.state;
    return (
      <>
      <Header />
        <SearchBar
          change={ this.handleChange }
          click={ this.handleClick }
          input={inputName}
        />
        <main>
          { productList.map(({ id, ...rest }) => (
            <ProductCard
              key={id}
              id={id}
              {...rest}
            />
          )) }
        </main>
      </>
    );
  }
}

export default Homepage;

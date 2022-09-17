const responceData = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

// take all user input
const SearchBar = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <div>
        <input type="radio" />
        <span>Only show product in stock</span>
      </div>
    </div>
  );
};

// show products
const ProductTable = () => {};

// product category
const ProductCategoryRow = () => {};

// product item
const ProductRow = () => {};

// the whole application
const FilterableProductTable = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

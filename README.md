# Redux E-Commerce Store

Welcome to the Redux E-Commerce Store project! This project demonstrates a simple e-commerce store application built using React and Redux. Users can browse through a list of products, add items to their cart, and manage the number of items in the cart.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your web browser and navigate to `http://localhost:3000` to see the application in action.

## Features

- Browse a list of products with images, names, and prices.
- Add products to the shopping cart.
- Adjust the quantity of products in the cart.
- Remove products from the cart.

## Usage

1. **Product List Page**: Upon visiting the application, you will see a list of products available for purchase. Each product displays an image, name, and price. Click the "Add to Cart" button to add a product to your cart.

2. **Cart Page**: Click the shopping cart icon in the navigation bar to view your cart. Here, you can see a list of items you've added to the cart, along with their quantities. You can increase or decrease the quantity of an item using the "+" and "-" buttons, respectively. You can also remove items from the cart entirely by clicking the "Remove" button.

## Project Structure

The project is organized into several components, actions, and reducers, following a Redux architecture.

- `actions.js`: Defines action types and action creators for adding, removing, and updating cart items.
- `reducer.js`: Implements the cart reducer, handling various actions to update the cart state.
- `products.js`: Contains an array of sample product data.
- `ProductList.js`: Component for displaying the list of products and adding items to the cart.
- `Cart.js`: Component for managing the cart, including adjusting quantities and removing items.
- `Navbar.js`: Navigation bar component with a link to the cart page and a cart icon.
- `App.js`: Main application component that sets up the Redux store and routes.



[E-Commerce Cart Redux react.webm](https://github.com/umar8637/Ecommerce-React-Redux-Store/assets/114384219/1f8d6592-a3b4-4683-923c-e6f7c752d021)


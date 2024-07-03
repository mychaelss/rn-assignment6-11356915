# rn-assignment6-11356915
Open Fashion Shopping Cart App
This React Native application is a shopping cart app called "Open Fashion." Users can browse through a list of items, add them to their cart, and proceed to checkout where they can view and remove items.

Design Choices
User Interface
Minimalistic Design: The app follows a minimalistic design to ensure a clean and user-friendly interface.
Consistent Styling: The design uses consistent colors and font styles to provide a cohesive look and feel.
Responsive Layout: The layout adapts well to different screen sizes to enhance the user experience across various devices.
Navigation
React Navigation: The app uses @react-navigation/native for handling navigation between screens. This includes transitioning from the home screen to the checkout screen.
Icons
FontAwesome Icons: The app uses react-native-vector-icons/FontAwesome for incorporating intuitive icons such as the shopping cart, search, and action buttons.
Components
App.js
The main entry point of the application.
Sets up the navigation stack and wraps the app with the CartProvider to make cart state accessible throughout the app.
HomeScreen.js
Displays a list of items that can be added to the cart.
Each item card includes an image, name, description, price, and buttons to add or remove the item from the cart.
The cart icon in the header navigates to the checkout screen and shows the number of items in the cart.
CheckoutScreen.js
Displays the items added to the cart.
Each item includes an image, name, description, price, and a button to remove the item from the cart.
Shows the total price of items in the cart.
Includes a checkout button.
CartContext.js
Implements the CartContext to manage the state of the cart.
Uses useState to maintain the cart items.
Uses useEffect to load and save cart items from and to AsyncStorage.
Provides addToCart and removeFromCart functions to manage cart operations.
Data Storage
AsyncStorage
Loading Cart Items: The CartProvider loads cart items from AsyncStorage when the app initializes. This ensures that the cart state is persisted across app restarts.
Saving Cart Items: The cart state is saved to AsyncStorage whenever it changes. This is handled using the useEffect hook.
![alt text](<home screen.jpeg>)
![alt text](<checkout screen.jpeg>)
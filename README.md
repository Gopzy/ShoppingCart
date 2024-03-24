# ShoppingCart

Frame work used in the Application and why:

1. Used Redux state management and sagas middle ware to store the Api data, and Products that added to the cart Cart
   Note: two separate reducers to store Cart data and Api Product data,
2. Type script for type definition throughout the whole application.
3. Used Axios to fetch the get api and process it.
4. Used react-navigation bottom-tabs to implement the main tab.
5. react-native-vector-icons used to export vector-icons to the application
6. react-native-paper for radio button so the user can select the product size before adding to the cart.
7. StyleSheet to Style the app instead of TailWind (more suitable for web), as it offers more flexibility to mobile UI/UX designing and available natively.

How the App works:

I have designed the UI in a simple but elegant manner, more focused on User friendly.
Have paid attention to details even for smaller details and features of the app.

Every Fundamental feature of the app works perfectly fine including:

1. Adding multiple products to cart.
2. Option to Increase or decrease the product quantity in the cart itself.
3. Adding the same product in multiple sizes in the cart and being able to see them separately.
   Also have the ability to delete the particular size product separately from the cart.
4. Completely delete the product from the cart.
5. User can see all the products added to the cart including size , selected size, amount foreach product and total Amount for the entire cart
6. Can view the available products in Home Screen.
7. Can Navigate to Cart screen from bottom navigation Tab.

I have tested the app multiple time and made sure all the potential issues were fixed and its ready for deployment .
It’s a breeze to use the app by anyone, choosing the right product in available size and adding it to that cart process is extremely inviting.

How to run the app,

1. npm install or yarn: install all the dependencues
2. npm run android : to start the android app
3. npm run iOS: to start the iOS app

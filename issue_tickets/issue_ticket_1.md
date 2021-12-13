## Unexpected Behavior

> When redirecting to my products page from a delete (navigate redirect), the delete and redirect happens to quickly and the products page does not have time to render the updated products.

## Expected Behavior

> Upon a redirect, the new array of products should show minus the one that was deleted.

## Reproduce the Error

> 1. clone this repo
> 2. run rails server at the highest level: should run on localhost: 3000
> 3. cd into client
> 4. run 'npm start': should ask to run on localhost: 3001
> 5. click on the products icon on the bottom left.  Click on a product. Click "delete"
> 6. This will redirect you to the products page, but will still show the product.  You will have to refresh the page to show the item deleted.
**my delete function is in ./src/screens/one_product/OneProduct.jsx

## Documentation

> https://stackoverflow.com/questions/63942848/rest-api-response-not-updating-until-page-is-refreshed


## Attempted Resolution

> I have tried to use a use effect on the delete function.  My use effect is set up for products at the main level and is set to function at page load. 

>I looked through prior assignments and searched the internet for a solution.

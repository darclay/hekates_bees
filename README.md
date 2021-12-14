# HAKETES BEES - README
### Overview
This site is called Hekates Bees.  Hekates is the Greek goddess of magic.  She is the goddess of the night and the protector of the home.  She is also known as teh mother of angels.  In this case she oversees the magically workings of the hive and gives instructions to the worker bees.
![alt text](https://i.imgur.com/0VdnToQ.jpg) 

Hekates Bees is an online shop, which takes the customer through a portal and into another realm.  The customer has access to bee products, to include, but not limited to: lotions, soaps, and oils.  The customer can browse, seach by product, and click on a specific product to get more information.  The customer can venture to the κουτσομπολιό or Blog (which in greek is to gossip).

Here customers can read about what is happening at the Hekates Bees home...

### MVP GOALS
The minimal viable product for Hekates Bees is:

Client: viewable Front End with the ability to see products and a mock up button for adding products to a shopping cart.
Administrator: everything under client plus a hidden login on the frontend to give the administrator access to add, edit, and delete blog posts. The adminstrator will also have access to add, edit, and delete products.

- _Have fully functional CRUD backend using Ruby on Rails,_
- _Set up user authentication on backend,_
- _Set up a professional looking frontend site using React, and_
- _Use CSS to style the site and to have a mobile friendly experience._

### Libraries and Dependencies

|     Library      | Description                                                            |
| :--------------: | :----------------------------------------------------------------------|
|      React       | _This is used for the frontend development of this site_               |
|   React Router   | _Used for directing the user through React Components._                |
|      Rails       | _This is the server-side app which is the framework for our database._ |
|     PostgreSQL   | _This is the database used for all data used on this site._            |
|  JWT and bcrypt  | _This is used for user athentication and building JSON web tokens_     |

### WireFrame 

Basic Layout:
Home
![](https://i.imgur.com/U9DgP6I.png)
Products
![](https://i.imgur.com/FNKdweJ.png) 
Product
![](https://i.imgur.com/pjq3zy6.png)
Add Product
![](https://i.imgur.com/LuHLlk3.png)
Edit Delete Product
![](https://i.imgur.com/x6LKdW9.png)
Blog
![](https://i.imgur.com/NKYpCn4.png)
Blog Add Edit Delete
![](https://i.imgur.com/2LrNM6V.png)
Create User
![](https://i.imgur.com/Q7eVqpR.png)
Login
![](https://i.imgur.com/ZV77bez.png)


Basic Component Tree and State:
![](https://i.imgur.com/i0ZzKox.png)

Resource Index:
![](https://www.figma.com)
![](https://www.theoi.com/Cult/HekateCult.html)
![](https://imgur.com)
![](https://www.wallpaperflare.com/bee-flying-on-top-of-white-flowers-during-sunset-e-pl5-cosmos-wallpaper-mvxmh)
https://www.youtube.com/watch?v=ArTVfdHOB-M&t=18s
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

### Component Tree: 
``` structure
src
|
app
|
|____assets/
        |_____images
|____main
        |____services
        |____components/
                |_____layout
                          |______nav
                                      |______mobile_nav
                                      |______desktop_nav
                          |______footer
                |_____product
                          |______create_product
                          |_____edit_product
                |_____post
                          |______create_post
                          |_____edit_post
                          |_____update_post
                          |_____delete_post
        |____screens
                |_____home.js
                |_____home.css
                |_____products.js
                |_____products.css
                |_____one_product.js
                |_____one_product.css
                |_____create_product.js
                |_____create_product.css
                |_____blog.js
                |_____blog.css     
```    

### Time Estimates 

| Task                             | Estimated Time |  Actual Time  |
| :------------------------------: | :------------: | :-----------: | 
| Planning Idea                    |     2 hrs      |     2 hrs     |
| Readme                           |     2 hrs      |     2 hrs     |
| Wireframe                        |     4 hrs      |               |
| Component Structure              |     2 hr       |               |
| Build Rails Server               |     2 hrs      |               |
| Build DB, Seed, & Test           |     2 hrs      |               |
| Set up Authentication            |     2 hrs      |               |
| Build React Component Structure  |     2 hrs      |               |
| Build Services, Axios, & Test    |     4 hrs      |               |
| Build React Pages                |    10 hrs      |               |
| CSS Styling                      |    20 hrs      |               |
| -------------------------------- | :------------: | :-----------: |
| TOTAL                            |    52 hrs      |               |  

### Server (Example)

Pending...

### ERD Model

![](https://i.imgur.com/Vmm9Atw.png)

### Post-MVP

Pending...

### Code Showcase

Pending...

## Code Issues & Resolutions

Pending...
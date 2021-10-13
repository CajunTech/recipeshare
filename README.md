# RecipeShare
![recipeshare_frontpage](https://user-images.githubusercontent.com/89054252/137150446-2568b9a1-1577-4175-a7ea-8c4ef70616b8.png)

Link to application - https://recipeshare-app.herokuapp.com/
<br>

# Technologies used:</br>
Node.js, PostgreSQL, JavaScript, CSS (Bootstrap), Embedded JavaScript, Sequelize ORM, JSON Web Tokens  
<br>

# Approach:
The RecipeShare project started out with an entitity relationship diagram (ERD) and a few user stories. I initially focused on user authentication functionality to allow user persistence and hashed passwords. Once authentication was completed I moved on to building out the recipe views, functionality, and used a Boostrap default theme to allow for some styling as I continued to build out the application. After minimal viable project was met I started adding additional functionality (favorites, user restrictions on edit/delete recipe, etc.) and made adjustment to styling by migrating from a table format to card based format.
<br>
<br>
ERD:
<br>
![recipeshare_erd](https://user-images.githubusercontent.com/89054252/137154588-dee3790d-13ff-4fd1-9454-48c28060f61e.png)
</br>

User Stories:
- As a User I would like the ability to view a list of recipes.
- As a User I would like the ability to view individual recipes with ingredients and instructions.
- As a User I would like the ability to create recipes.
- As a User I would like the ability to edit my recipes.
- As a User I would like the ability to delete my recipes.
- As a User I would like the ability to save recipes as favorites.
- As a User I would like the ability to easily view and access my favorites.
- As a User I would like the ability to easily view and access recipes I have created.
- As an Admin I would like to require Users to create accounts for the application.
- As an Admin I would like to require Users to login the application.
- As a User I would like the ability to change my password.
- As a User I would like the ability to edit my account.
- As a User I would like the ability to delete my account.
- As an Admin I would like the ability to delete any recipes.
<br>

# Main features:
- User profile page showing created and favorited recipes
- Somewhat dynamic step creation for recipe instructions
- Dynamic recipe interaction options based on user/recipe relationship status
<br>

User profile (contributed/favorite) sample:
<br>
![recipeshare_profile](https://user-images.githubusercontent.com/89054252/137161720-098786b3-b8fe-487f-aed3-28a6fbe44a62.png)
<br>
Code snippet of dynamic Favorite, Edit, and Delete button creation:
```js
      <% if (!isFavorite) { %>
        <form action="/recipes/<%=recipe.id%>/favorites?_method=PUT" method="POST">
        <input class="btn btn-primary" type="submit" value="Add to Favorites" />
        </form>
        <%}%>
      <% if (recipe.author === amAuthor || amAdmin === 'admin') { %>
    <a href='/recipes/<%=recipe.id%>/edit'><input class="btn btn-primary" type="button" value='Edit Recipe'/></a> 
    <form action="/recipes/<%=recipe.id%>?_method=DELETE" method="POST">
      <input class="btn btn-primary" type="submit" value="Delete Recipe" />
  </form> 
  <% } %>
  ```
  Code snippets of dynamic step creation of recipes (users are asked to press enter after each step when creating/editing a recipe):
  ```js
    let instruction = recipe.instructions.split('\n');
	let ingredient = recipe.ingredients.split('\n');
	res.render('recipes/show.ejs', {
		recipe,
		instruction,
		ingredient,
 ```
 ```js
 <h2>Ingredients:</h2>
<hr style="max-width:600px;">
<div>
  <ul>
  <% for (i=0; i<ingredient.length; i++) { %>
    <li style='list-style-type:none'><%= ingredient[i] %></li> 
    <% } %>
    </ul>
</div>
<h2>Instructions:</h2>
<hr style="max-width:600px;">
<div>
  <% for (i=0; i<instruction.length; i++) { %>
    <p><span style="font-weight: bold">Step <%=i+1%> :</span><%= instruction[i] %></p> 
    <% } %>
</div>
```
  



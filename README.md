# DOCS

## 1. What i changed before strting debugging

  - Changed the node version from 16 to 20 due to my syteme, need an admin to change it so i just specified that i use 20 version.
  - Downgrade history package's version from 5 to 4 due to the incompatibility with React Router Dom 5 and "createHashHistory".
  - I added some comments in the code to help understand what changes have been made

## 2. Bugs found

  - When navigate to "Add product" the browser display the "Not Found" page.
  - When navigate to "Edit Product" the browser display the same page before.
  - The List of categories are not displayed neither in "Add product" page nor in "Edit product" page.
  - When click on submit button in both pages nothing happens.
  - the productId prop is not distructed in UpdateFormContainer.

## 3. Solutions made

  - Due to the downgrade of history package and react router dom, "createHashHistory" function works normaly and all the navigation works well without changing anything.
  - distruct the "categories prop" in the "ProductForm" Component to be able to display them.
  - distruct the "productId prop" in the "UpdateFormContainer" Component.
  - dispatch the "createProductForm" action in "AddFormContainer" Component to handle the "onSave" handler.
  - dispatch the "updateProductForm" action in "UpdateFormContainer" Component to handle the "onSave" handeler.

## 4. Suggestions

  The upgrade suggestions are just listed to this project, it does not take into consideration large scale projects when it is difficult to refactor all the project. 

  - Upgrade React Router dom to version 6 and redux to redux toolkit rather then downgrade to history 4.
  - Upgrade redux to "redux toolkit" because the create store of redux is depcrated and it is recommanded to use redux toolkit unstead (By the offical documentation),
  the side effect of inject navigation in redux is an old practice after the release of toolkit.
  - create a file for the store to manage all the store outside the main.jsx
  . create a redux folder to manage actions and reducers folder (for better folder structure).
  - Extract the render of "ProductList" outside the JSX return in a "render fuction" to avoid using 2 nested mapping in JSX.
  - In the "ProductForm" i would create a generic component for an "Input" and use it as a common Component avoiding the repitition code, after it use an array of the Inputs props.
  - I would also use a render function and extract the mapping render of the product categories in "Product" Component.

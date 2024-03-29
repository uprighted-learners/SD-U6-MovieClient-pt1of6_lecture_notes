### Before Getting Started
There are two different branches associated with this lesson.
- Main
  - This branch provides the base notes of material not filled out.
- Completed
  - This branch includes all the added notes for you to review and compare with your own code-along.

### Topics Covered
- Reactstrap
- Auth & Signup Components
  - useRef()

### What Should Already Be Understood
- Creating a React Application
  - File / Folder structure
- Reusable Components
- Props
- Basic structure of `useState`
- Express Server

## Files / Folders Provided in this Lesson
You will just need to spin up a new React application and add update the following:
This lesson starts right at the `npx create-react-app .` point.

This lesson also provides the solution for the **Counter Challenge** in the previous. The lesson will not walk through that solution, but the code is available to review.

**Running:**
- You will need to start up **MongoDB** and your **Movie Server**. Navigate to your server project within the terminal and run `nodemon` or `npm start` and have your server going while building the Movie application.

- movies
  - src
    - components
    - `App.jsx`
      - *boilerplate code removed*
    - [App.css](./src/App.css) (provided code)

- `notes.md`: details the various notes taught throughout this lesson.
- **assets folder**: additional notes
  - screenshot of where to update server
  - component tree example

## Resources
- [Reactstrap Docs](https://reactstrap.github.io/?path=/docs/components-forms--input#hidden-labels)
- [Bootstrap Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
- [w3Schools useRef](https://www.w3schools.com/react/react_useref.asp)
- [Hook API Reference React](https://reactjs.org/docs/hooks-reference.html#useref)
- [NPM Cors Package](https://www.npmjs.com/package/cors)

## Challenge
**Login**
/* 
    - Create a login folder within auth.
        - Create a JSX file called login (consider how the file/folder should be set)
    - Create a functional component called Login
    - Setup a form:
        - Above the form, make an h2 that displays "Login"
        - Use components from Reactstrap (hint: consider Signup)
        - No labels are required.
        - Two input fields: 
            - email: use a placeholder to denote "Email"
            - password: use a placeholder to denote "Password"
    - Import useRef:
        - create variables to reference both email & password.
        - incorporate within the Input components
    - Handle Submit
        - Set the form to fire off an async function called "handleSumbit"
            - write is as an arrow function.
        - Within the function
            - console.log both useRef variables that were established.
    - Export the component.
    - Import & mount the Login component within Auth.jsx
        - Note: Frame the component in the same fashion as Signup.
*/
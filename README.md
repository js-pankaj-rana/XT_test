# XT_test || Hacker News App React Project with Server Side Rendering
Skill Testing code


# App Introduction

This is Hacker News App, in which everyday user can read the news, up vote the article on that basis of the Chart is reflected.


# npm modules

    axios
    express
    history
    moment
    node-sass
    react-scripts
    react-redux
    react-router
    react-router-dom
    react-test-render
    recharts
    redux-saga
    
# npm start
Project start with server file, before triggering this commannd need to run *npm run build* 


# npm test 

It shows the Jest unit test cases, in command prompt.  

# local server buil and start npm run build:ssr
For start the server with new build  trigger this command *npm run build:ssr*

   
All the API request is going via axios and saga middleware.

For reducer we create a rootReducer for handling all store data.

Create Action for handle the action call. All action is declared in the constant.action.js 


All Endpoint URL is declared in constant.url.js

For storing the client activity we used the localStorage for store manipulation.

When user reload the page the api call will not trigger 

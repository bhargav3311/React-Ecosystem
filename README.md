# React-Ecosystem

React application without the help of create-react-app

By creating application without the help of create-react-app, developers will get to know what goes on behind the scenes.
Once this rudimentary React application is completed from scratch we will get to know how to incroporate each of the ecosystem and concepts one-by-one.
So this might be wondering is what this application need in order to create React app without using boilerplate generator.
So, we might need

1. index.html to which will be sent to client and what React will render our app into
2. Support for ES6
3. webpack, this will care of the actual building our app as well as allow us to use thinks like CSS/SASS modules to style our app.
4. finally something called react-hot-loader, which will allow us to see the changes that we make to our app immediately in development without having to refresh our app every time.

So yes its time to create and setup directory that will hold our React project

1. Create a directory by call the directory (ex: Project name)
2. Open up terminal and navigate to the same
3. Run npm init -y to initalize new package that'll create package.json file
4. so let's create two directories inside of our root directory. We're going to call the first one public. This will hold all the publicly accessible resources for our app just like in a regular static website. And we're going to call the second one src. S-R-C. This will hold our actual react code.
5. yay! we are on the way to start building our react application.
6. We are going to be writing React code using ES6 syntax and we're also going to need to add support for JSX, React's special HTML-like syntax for defining page layouts. And in order to do all this, we're going to start off by opening up a terminal inside our directory and running
   npm install --save-dev @babel/core @babel/cli @babel/preset-env and @babel/preset-react.
   code.
   So let's create this .babelrc file in the root of our directory. Call it .babelrc. Don't forget the dot before it. And inside this file, we're going to define a JSON object. And this object will have a property presets that will be an array of two strings.
7. The first one's going to be babel/present-env, which handles the transformation of ES6 into common JS, and @babel/preset-react, which knows how to deal with JSX properly. Babel will use both of these presets to transform our code into something a browser can run, although just as a side note, most modern browsers now support ES6 syntax so this isn't as necessary as it once was.
   (ex: {
   "presets": ["@babel/preset-env", "@babel/preset-react"]
   })
8. Create index.js, App.js and App.css and do the rest of it.
9. run npm install react react-dom
10. Set-up webpack to build our app. What were going to have web pack do for us is take the code in our source directory and perform some operations on it like converting the ES6 syntax and JSX to common JS and then host our public directory so that we can view our app in a browser.
11. npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
12. we can build and serve our React applications: npx webpack-dev-server --mode development

[!DOCTYPE Adventures](https://doctypeadventures.netlify.com)

by Vladimir Jankovic

Blog and news content management system written in React. It uses Wordpress API for content delivery, Netlify for hosting and automatic deployment and Git and Github for version control and as repository container. !DOCTYPE Adventures blog CMS is free to use (under MIT licence) and feature:

- Mobile first & fluid design, adapts to all devices
- Full SEO optimization
- Dark and light themes hot-switching
- Social integration (Facebook and Twitter)
- Searchable content
- Lighting fast pagination
- HTML5 semantic tagging & Sass powered CSS + BEM methodology

You can check it out live at https://doctypeadventures.netlify.com

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is written in React (version 17) with functional components and hooks (useContext + useReducer for global store management), React-router for routing and React-helmet for meta tags and SEO optimization. It uses Bootstrap 5 framework for responsive grid system and SCSS (Sass) with BEM standard methodology.

## Dependencies

1. Bootstrap 5

2. React-router-dom
   npm install react-router-dom

3. Node-sass
   npm install sass-loader sass webpack --save-dev

4. React-helmet
   npm install react-helmet

## Prevent 404 error on serverless hosting

If you are on serverless hosting, you must add \_redirects file in public folder with content:
/\* /index.html 200
to prevent 404 error

## Wordpress API

This app gets it's blog content from [Wordpress API](https://developer.wordpress.org/rest-api/) which means that you must host Wordpress installation somewhere. The free plan on Wordpress.com website will NOT do the trick because of (in the time of writing) the obsolete api version used.

## Edit 2021-05-29

* Facebook comments added to individual posts.

## Copyright Information

MIT License

Copyright (c) 2020 Vladimir Jankovic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

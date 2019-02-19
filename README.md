# TSPaint
Coding project for interview process.

### Instructions
To build and run the program simply:
```
$ npm install
$ npm run build
```
And then open the `index.html` file in the `dist/` directory.
Alternatively, to see it in development mode:
```
$ npm install
$ npm run start
```
And the app will open in your web browser.

The app allows the user to choose one of eight colors on the palette and color the pixels. The user can rename the painting by clicking on the title and add tags. The user can use the redo and undo buttons below the canvas. When the masterpiece is complete, the user can save the painting and its title will appear in the sidebar. The user can search for paintings by title and tags and download the file to their computer. They can then use the import button to load it back up in a new session. 

### Testing
Due to general time constraints, I was not able to test TSPaint as rigorously as I would have liked. I put in some example tests that should show how I approach testing React components and Redux reducers. To run the tests:
```
$ npm run test
```

### Project Architecture
The project is based around React, Redux, and (a little bit of) Redux-Saga with Sass for styling. I use Redux as the single source of truth for application state with the sole exception of volatile form data, which remains in the component state. I attempted to build my React components as modularly as possible. I separated out the functionality of the the app into two primary modules: a Sidebar and a Studio. These components get their props directly from the store, and in the case of the Studio, delegate to other components. Each module has its own actions and reducer (which can listen to actions from other modules). Additionally, each module can have its own saga to handle relevant asynchronous work. However, since the only asynchronous work was in importing a painting, only the Sidebar has a saga in practice. 

### Documentation
I am usually very clear and thorough in my documentation, however considering the short time frame and small size of this project I decided not to spend too much time on documentation. With that said, I tried to write in a clear, easily understandable style and use things like PropTypes to make the code easy to follow.

### Opportunities for Improvement
Though I am happy with the final product, I do recognize that there are a number of ways the project could be improved, which represent learning opportunities.
* Better organized stylesheets and more systematic styling
* A more compact and lightweight final build
* More thorough testing
* More thorough documentation
* Allowing users to select the palette colors
* General UI tweaks
* CTRL-Z to undo instead of buttons

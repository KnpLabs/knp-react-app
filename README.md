# KNP React App

This is a bootstraped ready application for your React. If you are looking
for a Javascript FP starting point in your frontend application, this
project could be a good start.

## Installation

Requires the latest version of :
- docker-ce
- docker-compose

Just clone this repository and install its dependencies:

```bash
$ git clone git@github.com:KnpLabs/knp-react-app.git myApp
$ cd myApp
$ make install-deps
```

Then, run it with
```bash
$ make start
```

and browse [http://localhost:3000/](http://localhost:3000/).

## What is inside ?

This bootstrapper is based on top of
[React Create App](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).
Please follow this complete guide before posting any issue on this repository.
In fact it does nothing except cleaning up some code and propose a default
architecture.

## Documentation

### React
- [Create React app](https://github.com/facebook/create-react-app)

### Archi
- [Duck file structure](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c)
- [ADR](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

### Libs
- [How to Redux](https://egghead.io/courses/getting-started-with-redux)
- [React Functional Lifecycle](https://github.com/Aloompa/react-functional-lifecycle)
- [RxJS](https://github.com/ReactiveX/rxjs)
- [Learn RxJS](https://www.learnrxjs.io/)
- [Redux Observable](https://redux-observable.js.org/)
- [Intro to Ramda](http://randycoulman.com/blog/categories/thinking-in-ramda/)
- [Ramda](https://ramdajs.com/docs/)

### Tests
- [Jest](https://jestjs.io/)
- [Test Renderer](https://reactjs.org/docs/test-renderer.html)

To run the tests :
```bash
$ make test
```

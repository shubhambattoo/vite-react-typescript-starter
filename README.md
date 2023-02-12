# React TypeScript Starter

A simple, and scalable for building production ready React applications

## Getting Started

1. Clone this repo by running `git clone {REPO URL} {PROJECT NAME}`
1. Change directory inside the project folder and delete `.git` folder and run `npm install` to install the dependencies
1. You can run `npm run dev` to start the dev server on [http://localhost:5173](http://localhost:5173)

## Folder structure

```
├───assets # static assets required for the application
│   └───img
|───api # api routes
├───components # reusable components
├───config # front end application configuration
├───hooks # react hooks
├───libs # any internal library required
├───pages # main bussiness logic as per features
├───types # typescript types
└───utils # any utility requireed for the application
```

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the pages folder, which should contain different feature-based things. Every feature/page folder should contain domain specific code for a given feature and further can create components inside the components folder for particular pages/feature. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things.

## Scripts

| command     | description                                                   |
| ----------- | ------------------------------------------------------------- |
| dev         | runs the dev server                                           |
| build       | checks the types and builds the react project for consumption |
| preview     | after the build is done you can preview the app with this     |
| lint:fix    | fixes all the eslint errors                                   |
| lint:format | fixes all the prettier errors                                 |
| lint        | fixes all the prettier & eslint errors                        |
| type-check  | typescript tyoecheck                                          |
| validate    | pre-commit hook to run on staged files                        |
| prepare     | runs pre-commit hook for prettier                             |

## Style Guide

When you work with large projects, it's important that you remain consistent throughout the codebase and follow the best practices. To guarantee the quality of your codebase, you need to analyze different levels of the applications code.

### Clean Code

This is the most abstract level of code standardization. It's related to the implementations independent of the programming language. It will help the readability of your code.

[Clean Code Javascript](https://github.com/ryanmcdermott/clean-code-javascript)

### Naming

One of the most important points of the Clean Code is how you name your functions, variables, components, etc. Use this amazing guide to understand how to write better variable names.

[Naming Cheatsheet](https://github.com/kettanaito/naming-cheatsheet)

## Error Handling

### In App Errors

We have added a ErrorBoundary to handle the in app programming errors.

### API Errors

Set up an interceptor for handling errors. You can use it to fire a notification toast to notify users that something went wrong, log out unauthorized users, or send new requests for refreshing tokens.

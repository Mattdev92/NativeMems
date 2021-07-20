# MEM

It's a React Native android app for Mems viewing and voting. I made this project to practise few technologies:
 - React Native
 - Typescript
 - communication with datoCMS using Apollo library for graphQl api
 - modern React including React memo funcionality to minimaze quantity of renders
 - modern hooks including useMemo, useState, useEffect
 - redux Toolkit with modern hooks including useDispatch, useSelector
 - simulating team work on Github - task branches with pull requests on Develop branch
 - atomic design

Project was created on Expo configuration. 
Debugging: Android studio phones emulators/expo app on phisical phone and React Native Debuger set on port 19000

## How it works
![](nativeMem.gif)

## Getting Started
1. "git clone" 
2. "npm install"
3. "expo start --android" - run the project on android emulator or phisical phone
- Android emulator: you need to install Android Studio and turn on phone Emulator
- Phisical phone: you need to install expo app and scan QR code to run the application
4. In case of lack of the key for datoCMS you will see the information about anavailable database

After finishing this orders you can display app on your device

Used technologies:
 1. React Native and React with modern hooks including useState, useEffect, useMemo
 2. Typescript
 3. Redux Toolkit using slices with hooks and asyn communication - as a state management
 4. React Navigation - for routing
 5. Apollo - for communication with graphQl api
 6. React-native-dotenv with custom babel configuration for storing keys

Implemented solutions

 1. Routes /hot, /regular, /home
 2. Live filtering for mems (upvote - downvote > 5 ):
 HOT (upvote - downvote >= 5)
 REGULAR (upvote - downvote < 5)
 FAVOURITE - fav icon signed
 3. Simple menu for switching between sections
 3. Upvotes and downvotes stored in Redux toolkit store
 4. List of Mem components in flatList view - with scroll funcionality
 5. React Navigation funcionality 
 6. React memo funcionality for all Mem components to minimaze numbers of render

### Project architecture

Project is diveded on a few categories 
 1. .expo, .expo-shared - all initial expo configuration files
 2. components - atomic design of folder structere - smaller parts of code that build all the screen components 
 3. sclices - redux toolkit slices  
 4. screen - all views that you can switch in navigation component  
 5. store - redux toolkit store
 6. App.tsx - root file
 7. templates - components which are the template for all components in app
 7. configuration files: babel.config.js, config.ts, end.d.ts, tsconfig.json etc.
 8. helpers - all helper functions
 9. memCMS - functions for communication with datoCMS using Apollo

### How did I create this project?

Project was prepared based on expo configuration

## Plan for future dvelopment
Unit tests in progress...

## Prettier and Eslint configuration
Project has implemented static code formaters

## Authors

* **Mateusz Grzejszczyk** - *Initial work* -

## License

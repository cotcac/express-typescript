# Hello world Express with Typescript

# Quick start

```
npm i
```
## Development
```
npm run dev
```
Check on browser  
http://localhost:3000/  
hello world
## Build and Deploy
```
npm run build
npm run start
```
# Detail Setup

## Typescript compiler 
```
sudo npm i -g typescript
```

## Install Dev Dependencies

```
npm i -D typescript ts-node nodemon @types/node @types/express
```
## Typescript init config
```
tsc --init
//created a tsconfig.json file.
```
Uncomment key values below
```
"target": "es5",   
"outDir": "./dist", 
"rootDir": "./src", 
"moduleResolution": "node",  

```

## Package.json script
```
"start": "node dist/app.js",
"dev": "nodemon src/app.ts",
"build": "tsc -p ."
```

# Reference
https://www.youtube.com/watch?v=zRo2tvQpus8  
https://www.npmjs.com/package/ts-node
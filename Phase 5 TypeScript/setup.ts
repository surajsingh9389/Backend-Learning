// Step 1: Install Dependencies 

// npm init -y
// npm install --save-dev typescript @types/node

// Step 2: Configure TypeScript
// Create a tsconfig.json file to configure the TypeScript compiler options for your project. 

// npx tsc --init

// tsconfig.json
// {
//   "compilerOptions": {
//     "target": "es2020",
//     "module": "commonjs",
//     "outDir": "./dist",
//     "rootDir": "./src",
//     "strict": true,
//     "esModuleInterop": true,
//     "skipLibCheck": true,
//     "forceConsistentCasingInFileNames": true
//   },
//   "include": ["src/**/*"],
//   "exclude": ["node_modules"]
// }


// Compile and Run

// 1. Compile once: Run npx tsc.

// 2. Run code: Once compiled, run the output file using Node: node dist/index.js.

// or 

// package.json

// "scripts": {
//   "build": "tsc",
//   "start": "node dist/index.js",
//   "test": "echo \"Error: no test specified\" && exit 1"
// },
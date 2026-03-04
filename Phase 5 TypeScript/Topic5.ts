// TypeScript (.ts)
//    ↓ compile
// JavaScript (.js)
//    ↓
// Node.js runs it

// 1. because node do not understand the .ts file. first compile the .ts file to .js than node execute the .js file. 

// 2. outDir store the .js file which compile by .ts file.

// 3. the src store the expres which are in .ts. 


// 1. The Response type provides proper typing and autocomplete for response methods (res.json, res.status, res.send), preventing misuse and improving correctness.

// 2. Controllers don’t return values; they send HTTP responses. Therefore, their return type is void to reflect that responsibility.

// 3. TypeScript complains more in controllers because controllers directly interact with external, untyped input (req.body, req.params, req.query), while services usually work with well-defined internal data.
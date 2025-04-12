// Concepts
// Be able to clearly explain these in words (no coding):

// What is Big O notation, and why is it useful?
/**
 * Big O notation is a way to describe how an algorithm's performance changes as the input gets bigger.
 * It's like a speed rating for code.
 * 
 * It's useful because:
 * - It helps us compare different solutions to see which one is faster
 * - It helps us spot parts of our code that might slow things down
 * - It helps us choose the right algorithm based on how much data we need to handle
 * 
 * Common examples include O(1) (instant, no matter the size), O(log n) (very efficient, like finding a word in a dictionary),
 * O(n) (scales directly with input size), and O(n²) (gets much slower as input grows). For frontend work, this helps when
 * dealing with long lists, complex UI updates, or processing lots of data.
 */

// What is the DOM?
/**
 * The DOM (Document Object Model) is basically a map of your webpage that JavaScript can interact with.
 * It turns your HTML into a tree of objects that you can manipulate with code.
 * 
 * Key things about the DOM:
 * - It represents your webpage as objects that can be changed
 * - It connects your HTML/CSS to JavaScript, so your page can respond to user actions
 * - Different programming languages can use it, but most commonly JavaScript
 * 
 * With the DOM, you can add or remove elements, respond to clicks or other events, and change content or styles
 * on the fly. It's fundamental to frontend development because it's how we make webpages interactive.
 */

// What is the event loop?
/**
 * The event loop is JavaScript's way of handling multiple tasks even though it can only do one thing at a time.
 * Think of it like a chef who can only cook one dish at a time, but can set timers and handle multiple orders.
 * 
 * Here's how it works:
 * 1. It runs your regular code first
 * 2. When it hits tasks that take time (like fetching data), it sets them aside
 * 3. Once the main code is done, it checks if any of those set-aside tasks are ready to run
 * 
 * The event loop handles two main types of tasks:
 * - Bigger tasks (setTimeout, AJAX calls, user clicks)
 * - Smaller, quick tasks (Promises), which it prioritizes
 * 
 * Understanding the event loop helps you write code that stays responsive and doesn't freeze up the browser
 * when doing complex or time-consuming operations.
 */

// What is a closure?
/**
 * A closure is when a function remembers and can access variables from where it was created, even after
 * that outer function has finished running. It's like the function carries a backpack of information with it.
 * 
 * Main things about closures:
 * - Functions can "remember" variables even when the function that created them is done
 * - They let you create private variables that can't be accessed from outside
 * - They remember the environment they were created in
 * 
 * We use closures for:
 * - Creating functions that generate other functions
 * - Keeping data private
 * - Managing callbacks and event handlers
 * - Storing state between function calls
 * 
 * In React, hooks like useState are based on closures - they remember your data between renders.
 */

// How does prototypal inheritance work, and how is it different from classical inheritance? (this is not a useful question IMO, but a lot of people like to ask it)
/**
 * Prototypal inheritance in JavaScript is where objects can inherit features directly from other objects.
 * Every object has a hidden link to a "prototype" object. When you try to access a property, JavaScript
 * first looks on the object itself, and if it can't find it, it checks the prototype, and so on.
 * 
 * Key points:
 * - Objects inherit directly from other objects
 * - Object.create() lets you make a new object based on an existing one
 * - The __proto__ property is the link to an object's prototype
 * - This chain of prototypes eventually ends at Object.prototype
 * 
 * Compared to classical inheritance (like in Java or C++):
 * - Classical: Uses blueprints (classes) to create objects
 * - Prototypal: Objects inherit directly from other objects
 * - Classical: Structure is fixed when code is compiled
 * - Prototypal: Relationships can be changed on the fly
 * 
 * Even though JavaScript now has classes (added in ES6), under the hood it's still using prototypes.
 */

// How does this work?
/**
 * The 'this' keyword in JavaScript points to different things depending on how a function is called,
 * not where it's defined. It's like a variable that changes based on context.
 * 
 * Here's how it gets set:
 * 
 * 1. In the global scope: 'this' refers to the window or global object
 *    Example: console.log(this); // Points to window in browsers
 * 
 * 2. In an object method: 'this' refers to the object that owns the method
 *    Example: user.sayHi(); // 'this' points to user
 * 
 * 3. In a constructor with 'new': 'this' refers to the newly created object
 *    Example: new User(); // 'this' points to the new user being created
 * 
 * 4. With call/apply/bind: 'this' is whatever you tell it to be
 *    Example: func.call(someObject); // 'this' becomes someObject
 * 
 * 5. In arrow functions: 'this' is inherited from the surrounding code
 *    Example: () => { console.log(this); } // 'this' is whatever it was outside
 * 
 * Understanding 'this' is essential for writing object-oriented JavaScript and for fixing
 * common bugs where 'this' isn't what you expected.
 */

// What is event bubbling and how does it work? (this is also a bad question IMO, but a lot of people like to ask it too)
/**
 * Event bubbling is when a user event (like a click) on a nested element triggers the same event on all
 * its parent elements, one after another. It's like dropping a rock in water and watching the ripples move outward.
 * 
 * Events in the browser happen in three stages:
 * 1. Capture phase: Event travels down from the window to the target element
 * 2. Target phase: Event reaches the element you interacted with
 * 3. Bubbling phase: Event bubbles back up from the target to the window
 * 
 * Important things to know:
 * - Most events bubble by default, but not all (focus events don't)
 * - You can stop bubbling with event.stopPropagation()
 * - event.stopImmediatePropagation() stops other handlers on the same element too
 * 
 * Event bubbling enables a useful pattern called event delegation, where instead of adding click handlers
 * to 100 buttons, you add one handler to their parent. This is more efficient and works even when
 * elements are added or removed later.
 * 
 * Example of event delegation in a real-world scenario:
 * ```javascript
 * // A common real-world example: handling clicks in a todo list
 * 
 * // Instead of this (inefficient for large lists, doesn't work for new items):
 * document.querySelectorAll('.todo-item').forEach(item => {
 *   item.querySelector('.delete-btn').addEventListener('click', handleDelete);
 *   item.querySelector('.edit-btn').addEventListener('click', handleEdit);
 *   item.querySelector('.complete-btn').addEventListener('click', handleComplete);
 * });
 * 
 * // We use event delegation (efficient, works when adding new todo items):
 * document.querySelector('.todo-list').addEventListener('click', (event) => {
 *   const todoItem = event.target.closest('.todo-item');
 *   
 *   if (!todoItem) return; // Click wasn't on a todo item
 *   
 *   if (event.target.matches('.delete-btn')) {
 *     handleDelete(todoItem.dataset.id);
 *   } else if (event.target.matches('.edit-btn')) {
 *     handleEdit(todoItem.dataset.id);
 *   } else if (event.target.matches('.complete-btn')) {
 *     handleComplete(todoItem.dataset.id);
 *   }
 * });
 * ```
 * 
 * Understanding `event.target.closest('.todo-item')`:
 * - `event.target` is the element that was actually clicked (could be a button, text, or any element)
 * - The `.closest()` method traverses up the DOM tree from the event.target
 * - It searches for the nearest ancestor element (or itself) that matches the selector '.todo-item'
 * - This is crucial in event delegation because we often need to:
 *   1. Know which item in a list was interacted with (the todo item containing the clicked button)
 *   2. Handle clicks that might happen on nested elements (like an icon inside a button)
 * 
 * For example, if our HTML structure is:
 * ```html
 * <ul class="todo-list">
 *   <li class="todo-item" data-id="123">
 *     <span>Buy groceries</span>
 *     <button class="edit-btn"><i class="icon-edit"></i></button>
 *     <button class="delete-btn">Delete</button>
 *   </li>
 * </ul>
 * ```
 * 
 * If a user clicks on the icon inside the edit button:
 * - event.target = the <i> element
 * - event.target.closest('.todo-item') = the <li> element, which is what we need
 * 
 * This is very common in modern web development, especially with dynamic lists, tables, 
 * or any UI where elements are frequently added or removed (like in e-commerce product lists,
 * social media feeds, or admin dashboards). Frameworks like React even use a similar pattern
 * internally for their event systems.
 */

// Describe a few ways to communicate between a server and a client. Describe how a few network protocols work at a high level (IP, TCP, HTTP/S/2, UDP, RTC, DNS, etc.)
/**
 * Ways Clients and Servers Talk:
 * 
 * 1. HTTP Requests: Client asks, server answers (like ordering at a restaurant)
 * 2. WebSockets: Ongoing two-way conversation (like a phone call)
 * 3. Server-Sent Events: Server sends updates when it has news (like notifications)
 * 4. WebRTC: Direct connection between browsers (like talking directly to someone)
 * 5. Long Polling: Client asks and waits until server has something to say
 * 
 * Main Network Protocols:
 * 
 * - IP: The addressing system that helps data find its way (like postal addresses)
 * - TCP: Makes sure all data arrives correctly and in order (like certified mail)
 * - HTTP: Rules for how browsers and servers exchange information (like conversation etiquette)
 * - HTTPS: Secure HTTP with encryption (like a private conversation)
 * - HTTP/2: Faster HTTP that can send multiple things at once (like a more efficient conversation)
 * - UDP: Fast but doesn't guarantee delivery (like throwing a message in a bottle)
 * - DNS: Translates website names to IP addresses (like a phone book)
 * 
 * Different situations call for different protocols - sometimes you need reliability, sometimes
 * speed, sometimes security. Modern web apps often use several of these together.
 */

// What is REST, and why do people use it?
/**
 * REST is a set of rules for designing web APIs that are simple and work well with HTTP.
 * It treats server data as "resources" that you can interact with through URLs.
 * 
 * Main ideas of REST:
 * - Everything is a resource with its own URL
 * - Use standard HTTP methods (GET to retrieve, POST to create, etc.)
 * - Each request stands alone (no sessions required)
 * - Standard way of interacting with different resources
 * - Data can be returned in different formats (usually JSON)
 * 
 * People use REST because:
 * - It's straightforward and easy to understand
 * - It uses HTTP which is already everywhere
 * - It scales well for busy applications
 * - It separates frontend and backend concerns
 * - It works across different programming languages
 * - It plays well with caching for better performance
 * 
 * While there are newer alternatives like GraphQL, REST is still very popular
 * because it's simple and fits well with how the web already works.
 */

// My website is slow. Walk me through diagnosing and fixing it. What are some performance optimizations people use, and when should they be used?
/**
 * To fix a slow website, I'd follow these steps:
 * 
 * Finding the problems:
 * 1. Use tools like Lighthouse or Chrome DevTools to measure performance:
 *    - Lighthouse: Scores your site on Performance, Accessibility, Best Practices, SEO
 *    - DevTools Performance panel: Records and analyzes runtime performance
 *    - Network panel: Shows request waterfall, timing, and size information
 *    - WebPageTest: Provides detailed performance analysis from different locations
 * 
 * 2. Focus on Core Web Vitals and key metrics:
 *    - LCP (Largest Contentful Paint): Should be < 2.5s - measures loading performance
 *    - FID (First Input Delay): Should be < 100ms - measures interactivity
 *    - CLS (Cumulative Layout Shift): Should be < 0.1 - measures visual stability
 *    - TTFB (Time To First Byte): Initial server response time
 *    - FCP (First Contentful Paint): When first content appears
 *    - TTI (Time To Interactive): When the page becomes fully interactive
 * 
 * 3. Identify specific bottlenecks:
 *    - Large resources (images, JS bundles, CSS files)
 *    - Render-blocking resources preventing page display
 *    - Long tasks blocking the main thread (JavaScript execution > 50ms)
 *    - Multiple round trips to the server
 *    - Third-party scripts impact
 *    - Slow API responses or database queries
 * 
 * Common fixes:
 * 
 * - For image optimization:
 *   * Use modern formats (WebP, AVIF) with fallbacks for older browsers
 *   * Implement responsive images with srcset and sizes attributes
 *   * Lazy load images below the fold (loading="lazy" attribute or Intersection Observer)
 *   * Properly size images (avoid serving 2000px images in 200px containers)
 *   * Use image CDNs with on-the-fly optimization (Cloudinary, Imgix)
 *   * For critical images, consider CSS background or inline SVG
 *   * Example: An e-commerce site reduced page load time by 2s by optimizing product images
 * 
 * - For JavaScript optimization:
 *   * Code-split large bundles into smaller chunks (using dynamic import() in webpack/rollup)
 *     - Webpack vs Rollup comparison - these are different bundlers with different strengths:
 *       * Webpack:
 *         - Feature-rich bundler with extensive plugin ecosystem
 *         - Better for complex applications with many asset types (CSS, images, fonts)
 *         - Supports Hot Module Replacement for development
 *         - Built for applications with many dependencies
 *         - Better dev tooling (source maps, dev server)
 *         - Uses a module wrapping approach where each module is encapsulated in a function:
 *           ```javascript
 *           // Simplified Webpack output example
 *           (function(modules) {
 *             // Module cache and webpack runtime logic
 *             function __webpack_require__(moduleId) {
 *               // Logic to load modules
 *             }
 *             // Load entry module
 *             return __webpack_require__(0);
 *           })([
 *             // Module 0
 *             function(module, exports, __webpack_require__) {
 *               const helper = __webpack_require__(1);
 *               // Module code
 *             },
 *             // Module 1
 *             function(module, exports) {
 *               // Helper module code
 *             }
 *           ]);
 *           ```
 *         - This approach supports all module formats (CommonJS, AMD, ES modules)
 *         - Creates larger bundle overhead but offers more advanced features
 * 
 *       * Rollup:
 *         - Focused on ES modules and tree-shaking
 *         - Produces smaller, cleaner bundles without extra wrapping code
 *         - Better for libraries and packages
 *         - More efficient output for modern browsers
 *         - Uses a scope hoisting approach that concatenates modules together:
 *           ```javascript
 *           // Simplified Rollup output example
 *           // Module 1
 *           function helper() {
 *             return 'helping';
 *           }
 *           
 *           // Module 0 (entry)
 *           const result = helper();
 *           console.log(result);
 *           ```
 *         - This approach produces more readable code with less overhead
 *         - But primarily works with ES modules (though plugins can help with CommonJS)
 *         - Creates more optimized output but has less built-in functionality than Webpack
 * 
 *       * When to choose which:
 *         - Webpack: Large applications, especially with many non-JS assets
 *         - Rollup: Libraries, packages, or smaller apps where bundle size is critical
 *         - Modern meta-bundlers like Vite: Use Rollup for production, dev server for development
 *   * Use tree-shaking to eliminate dead code:
 *     - Tree-shaking is a technique/process in modern build optimization, not a specific tool
 *     - It's an optimization technique implemented by bundlers like Webpack, Rollup, and esbuild
 *     - The name comes from the concept of "shaking a tree to remove dead leaves" - where unused code is the "dead leaves"
 *     - How ES module static analysis works in depth:
 *       1. Analyzes the static structure of ES module imports/exports
 *          - ES modules are statically analyzable because:
 *            * Imports and exports must be at the top level (not in conditional blocks)
 *            * Import/export statements can't be generated dynamically at runtime
 *            * Module structure is determined at compile time, not runtime
 *            * Example of statically analyzable code:
 *              ```javascript
 *              // Bundlers can easily determine what's being imported and from where
 *              import { Button, Card } from 'ui-library';
 *              
 *              // And can see these exports are used
 *              export function App() {
 *                return <Button>Click me</Button>;
 *              }
 *              ```
 *            * The static nature is why CommonJS modules (with dynamic requires) are harder to tree-shake:
 *              ```javascript
 *              // Not statically analyzable - dynamic path
 *              const componentName = condition ? 'Button' : 'Card';
 *              const Component = require(`ui-library/${componentName}`);
 *              ```
 * 
 *       2. Builds a dependency graph of your code
 *          - The bundler creates a complete map showing:
 *            * Which modules depend on which other modules
 *            * Which exports from each module are used by other modules
 *            * Example: If module A imports function X from module B, and nothing imports
 *              function Y from module B, then function Y can be removed
 *          - This graph analysis is recursive, so if a function is only used by another unused
 *            function, both can be eliminated
 * 
 *       3. Identifies which exports are actually imported and used
 *          - The bundler marks code as "used" or "unused" by following imports from entry point
 *          - Side effects (code that runs without being imported) must be preserved
 *          - Pure functions without side effects can be safely removed if unused
 *          - "sideEffects: false" in package.json tells bundlers a module is pure and safe to tree-shake
 * 
 *       4. Eliminates any code that isn't being used (dead code)
 *          - In the final bundle, unused exports and their dependencies are excluded
 *          - This can cascade through the entire dependency tree
 *          - Modern minifiers like Terser perform additional tree-shaking during minification
 * 
 *     - Tree-shaking in Vite:
 *       * Vite uses different strategies for development and production:
 *         - Development: Leverages native ES modules in browsers with no bundling
 *           * No traditional tree-shaking during development (faster startup)
 *           * Browser only requests the modules that are actually imported
 *         - Production: Uses Rollup to bundle and optimize code
 *           * Full tree-shaking is applied during the production build phase
 *           * Pre-bundling dependencies with esbuild for better performance
 *       
 *       * How to optimize for Vite's tree-shaking:
 *         ```javascript
 *         // vite.config.js example to improve tree-shaking
 *         export default {
 *           build: {
 *             rollupOptions: {
 *               output: {
 *                 manualChunks: {
 *                   vendor: ['react', 'react-dom'],
 *                   // Other chunks as needed
 *                 }
 *               }
 *             }
 *           }
 *         }
 *         ```
 *       
 *       * Real project example with Vite:
 *         - A React dashboard migrated from Create React App to Vite
 *         - Initial bundle size: 2.1MB
 *         - After migration with proper tree-shaking: 780KB (63% reduction)
 *         - Key strategies that enabled better tree-shaking:
 *           1. Using dynamic imports for route-based code splitting
 *           2. Converting default imports to named imports for UI libraries
 *           3. Setting up proper manualChunks in Rollup config
 *           4. Using import.meta.glob for lazy-loading features
 * 
 *     - Real example: A project using lodash (100KB+) imported only specific functions instead of the entire library:
 *       ```javascript
 *       // Before (imports entire lodash, bloating bundle)
 *       import _ from 'lodash';
 *       _.map(array, fn);
 *       _.filter(array, fn);
 * 
 *       // After (tree-shakable, only imports what's needed)
 *       import { map, filter } from 'lodash-es';
 *       map(array, fn);
 *       filter(array, fn);
 *       ```
 *     - Real-world impact: One dashboard app reduced bundle size by 58% by:
 *       1. Converting CommonJS imports to ES modules
 *       2. Using named imports instead of namespace imports
 *       3. Setting sideEffects: false in package.json for pure modules
 *       4. Configuring webpack/rollup properly for production builds
 *     - Tree-shaking also works well with UI libraries like Material-UI and Ant Design:
 *       ```javascript
 *       // Before (imports entire component library)
 *       import Material from '@material-ui/core';
 *       <Material.Button />
 * 
 *       // After (tree-shakable)
 *       import Button from '@material-ui/core/Button';
 *       <Button />
 *       ```
 *     - When to use: Always in production builds, especially with large libraries or frameworks
 *   * Defer non-critical JavaScript with async/defer attributes
 *   * Optimize JavaScript execution by avoiding long tasks
 *   * Implement request prioritization (fetchpriority attribute)
 *   * Example: A news site improved TTI by 40% by deferring comments and social widgets
 * 
 * - For delivery optimization:
 *   * Set up proper cache-control headers (leverage browser caching)
 *   * Use cache busting for updated assets (filename hashing)
 *   * Implement a CDN for global distribution
 *   * Use HTTP/2 or HTTP/3 to reduce latency
 *   * Enable Brotli or Gzip compression
 *   * Optimize critical rendering path (inline critical CSS)
 *   * Example: An SPA reduced repeat view load times by 70% with proper caching
 * 
 * - For rendering performance:
 *   * Minimize DOM size and nesting levels
 *   * Avoid layout thrashing by batching read/write operations
 *   * Use CSS containment for independent components
 *   * Implement passive event listeners for scroll/touch events
 *   * Use transform/opacity for animations instead of properties that trigger layout
 *   * Virtualize long lists (only render visible items)
 *   * Example: A dashboard app reduced jank by 90% by implementing windowing for large tables
 * 
 * - For application architecture:
 *   * Implement client-side caching with service workers
 *   * Consider server-side rendering or static site generation for content-heavy sites
 *   * Use edge computing for dynamic content (Cloudflare Workers, Vercel Edge Functions)
 *   * Optimize API responses (GraphQL, BFF pattern, pagination)
 *   * Implement stale-while-revalidate patterns for data freshness
 *   * Example: A travel site improved perceived performance by 60% with optimistic UI updates
 * 
 * Real-world optimization workflow example:
 * 1. An e-commerce site was slow on mobile devices (5.2s LCP)
 * 2. Lighthouse identified unoptimized images and render-blocking JS as main issues
 * 3. Implemented responsive images and WebP format, reducing image payload by 62%
 * 4. Code-split the bundle and deferred non-critical scripts
 * 5. Added resource hints (preconnect) for critical third parties
 * 6. Result: LCP improved to 1.8s, conversion rate increased by 15%
 * 
 * The most important principle is to measure, optimize the biggest bottlenecks first,
 * then measure again. Focus on user-centric metrics that impact actual experience, not
 * just technical metrics.
 */

// What frameworks have you used? What are the pros and cons of each? Why do people use frameworks? What kinds of problems do frameworks solve?
/**
 * Frameworks I've Used:
 * 
 * React:
 * Pros:
 * - Lets you build UIs from reusable components
 * - Uses virtual DOM for better performance
 * - Makes state management more predictable
 * - Huge community with lots of ready-made components
 * - Skills transfer to React Native for mobile apps
 * 
 * Cons:
 * - Needs extra libraries for routing, state management
 * - JSX and hooks can be confusing at first
 * - Sometimes requires complex setup
 * - Large apps need careful performance optimization
 * 
 * Vue:
 * Pros:
 * - Easy to learn with familiar HTML-like templates
 * - Can be adopted gradually in projects
 * - Includes built-in solutions for common needs
 * - Great documentation that's easy to follow
 * 
 * Cons:
 * - Fewer third-party libraries than React
 * - Not as many job opportunities in some areas
 * - Some advanced features aren't as mature
 * 
 * Angular:
 * Pros:
 * - All-in-one solution with everything included
 * - Built-in TypeScript for catching errors early
 * - Great for large teams with its standardized approach
 * - Consistent project structure
 * 
 * Cons:
 * - Takes longer to learn
 * - Too heavy for simple applications
 * - More code required compared to React/Vue
 * 
 * Why People Use Frameworks:
 * - Save time by not reinventing the wheel
 * - Keep code organized in larger projects
 * - Get performance benefits automatically
 * - Access to community solutions and plugins
 * - Easier to find developers who know the framework
 * 
 * Problems Frameworks Solve:
 * - Make DOM manipulation simpler
 * - Help manage application state
 * - Organize code into reusable components
 * - Handle browser differences automatically
 * - Optimize rendering performance
 * - Handle navigation between screens
 * - Make forms easier to work with
 * 
 * No framework is best for everything - each has strengths depending on your project's
 * needs, your team's experience, and what you'll need to maintain long-term.
 */

// what is your experience using webpack?
/**
 webpack is a module bundler, so we basically use it to put several javascript files 
 into single one that used to be necessary.
 webpack will bundle all that file, and will parse all of them and based on the imports and exports
 and put them all together into a single file. and we can apply different optimizations to that file.
 I worked a lot with webpack in the past, basically setting up projects from scratch and 
 doing all kinds of configurations.
 */

 // are you familiar with the term "tree-shaking"?
 /**
  * Yes, I'm familiar with the term "tree-shaking".
  *  tree shaking as in webpack is basically what webpack will do when we ship our boundles
  * to production, and it will basically try to  get rid of all the dead code. so we can
  * reduce the size of the bundle. and we get the best performance. 
  * 
  * example: 
  * every time we import a module, webpack will analyze the imports and exports of that module
  * and if it sees that a function is not being used, it will remove it from the bundle.
  * it only works with ES6 static imports and exports. if we use dynamic imports with require, it will not work.
  * so webpack will do tree shaking by default. 
  * 
  * 
  * import { Button, Card } from 'ui-library';
  * 
  * export function App() {
  *   return <Button>Click me</Button>;
  * }
  * 
  */

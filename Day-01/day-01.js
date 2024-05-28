//? WHAT IS REACT ?
/*
 * REACT IS A JAVASCRIPT LIBRARY/FRAMEWORK FOR BUILDING USER INTERFACES. IT WAS CREATED BY FACEBOOK.
 * WEBSITES UI'S ARE LOOKED AT IN TERMS OF COMPONENTS.
 * REACT IS CURRENTLY THE MOST POPULAR OUT OF THE MAJOR FRONT-END FRAMEWORKS
 */

//? WHY REACT ?
/*
 * REACT ALLOWS US TO BUILD VERY DYNAMIC AND INTERACTIVE WEBSITES AND USER INTERFACES.
 * VERY FAST, ESPACIALLY WITH THE NEW COMPILER.
 * THERE IS A HUGE ECOSYSTEM FROM NEXT.JS TO REACT NATIVE.
 * BEST FRAMEWORK TO LEARN TO GET A JOB.
 */

//? COMPONENTS
/*
 * RE-USABLE PIECE OF CODE THAT CAN BE USED TO BUILD ELEMENTS ON THE PAGE.
 * ALLOWS US TO BREAK DOWN COMPLEX UI'S, WHICH MAKES THEM EASIER TO MAINTAIN AND SCALE.
 * COMPONENTS CAN GET //?PROPS(ARGUMENTS OR ATTRIBUTES)
 * PASSED IN AND CAN HOLD THIER OWN STATE/DATA.
 * THERE IS A CLASS AND FUNCTIONAL COMPONENT, BUT CLASS COMPONENT IS AN OLD WAY.
 * WE WILL USE FUNCTIONAL COMPONENT.
 */

//? STATE
/*
 * STATE REPRESENTS THE DATA THAT A COMPONENT MANAGES INTERNALLY.
 * IT IS USED FOR DATA THAT WILL CHANGE WITH TIME.
 * THIS COULD BE FORM INPUT DATA, FETCHED DATA, UI-RELATED DATA LIKE IF A MODAL IS OPEN/CLOSE.
 * TO DEFINE STATE IN A FUNCTIONAL COMPONENT WE CAN USE A USE STATE HOOK WHICH IS A BUILT-IN REACT HOOK
 * IT WILL RETURN AN ARRAY WITH TWO ELEMENTS (THE CUURENT STATE VALUE, AND THE FUNCTION TO UPDATE THAT STATE)
 *THERE IS ALSO GLOBAL STATE WHICH RELATES TO THE APP AS A WHOLE AND NOT A SINGLE COMPONENT
 */

//? HOOKS
/*
 * REACT HOOKS ARE FUNTIONS THAT ENABLE FUNCTIONAL COMPONENTS TO USE STATE AND OTHER REACT FEATURES WITHOUT WRITING A CLASS
 * REACT COMPONENTS USED TO BE CLASS AND THEY USED TO HAVE SOMETHING CALLED LIFE CYCLE METHODS, WHICH WERE METHODS THAT RAN AT SPECIFIC TIMES DURING THE COMPONENT RENDERING PROCESS.
 * FUNCTIONAL COMPONENTS DON'T HAVE LIFE CYCLE METHODS BECAUSE THEY ARE NOT A CLASS, SO HOOK ALLOW US TO DO THE SAME STUFF THAT WE COULD DO WITH IN CLASS COMPONENTS SUCH AS SET STATE, PERFORM EFFECTS.
 * THE MAIN HOOKS WE NEED TO KNOW IS USE STATE AND USE EFFECT.
 */

//* COMPONENT IS LIKE AN HTML SECTION WHERE WE CREATE DIFFERENT ELEMENTS AND PASSED ATTRIBUTES, PARAMETERS AND DATA
//* BUT IT USES A STRUCTURE CALLED JSX, WHICH IS AN HTML LIKE STRUCTURE IN JAVASCRIPT.

//* WE CAN CREATE DIFFERENT TYPES OF WEBSITES USING REACT, SOME OF THESE EXAMPLES ARE:

//? SPA (SINGLE PAGE APP)
/*
 * LOAD A SINGLE HTML FILE AND JAVASCRIPT LOADS THE ENTIRE UI INCLUDING ROUTES.
 */

//? SSR (SERVER-SIDE RENDERED)
/*
 * SERVER SENDS FULLY RENDERED PAGE TO CLIENT. YOU CAN FETCH DATA AND LOAD IT AS WELL
 */
//? SSG (STATIC SITE GENERATION)
/*
 * REACT GENERATES STATIC HTML FILES AT BUILD TIME. THESE ARE VERY FAST.
 */

//* THERE ARE FEW WAYS TO GET STARTED WITH REACT

//? VITE
/*
 * VITE IS A SUPER FAST FRONT-END TOOLKIT THAT CAN BE USED FOR ALL KINDS OF JS PROJECTS INCLUDING REACT.
 * IT IS BUILT ON TOP ESBUILD, WHICH IS A VERY FAST JS BUNDLER.
 * FAST DEVELOPMENT SERVER WITH HOT-RELAOD.
 * INSTALLED WITH NPM CREATE VITE@LATEST
 */

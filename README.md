# simpleCalculatorPlayWrightJS

PlayWright test suite on basic web calculator app functionality (various arithmetic operations(addition/subtraction/multiplication/division), memory functions). The test suite captures screenshots at the end of test case run (for logging purposes). The PlayWright also generates HTML reports at the end of each test run (to limit test suite run for a single test only, add after describe or test keyword "only" (ex. test.only / test.describe.only))

#Tech Requirements:
 
 1.Node.js (20.x and above)

 2.PlayWright 1.54 or above
 
 3.IntelliJ IDEA (or another IDE)
    
 4. ESLint 9.x

#Setup

1. Clone this repository into IntelliJ (or other IDE) workspace folder (or wherever the project can be launched by the IDE).
2. Open the IDE and open the project folder.
3. Install Node.js.
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure PlayWright (enter in IDE terminal: npm init playwright@latest).
6. Install ESLint with cmd in IDE terminal: npm install --save-dev eslint eslint-plugin-playwright globals or npm init @eslint/config@latest
7. Run the test suite (in-terminal) on the IDE with npx playwright test (to run ESLint input in the terminal: npx eslint)

## Test Case List

//Valid Calculation Operations

//Addition Operations

1.	// Test 001 -> two numbers addition test
2.	// Test 001a -> two decimal numbers addition test
3.	// Test 001b -> multiple numbers addition test

//Subtraction Operations

1.	// Test 002 -> two numbers subtraction test
2.	// Test 002a -> two decimal numbers subtraction test
3.	// Test 002b -> two numbers subtraction test (with negative result)
4.	// Test 002c -> multiple numbers subtraction test

//Multiplication Operations

1.	// Test 003 -> two numbers multiplication test
2.	// Test 003a -> two decimal numbers multiplication test
3.	// Test 003b -> multiple numbers multiplication test

//Division Operations

1.	// Test 004 -> two numbers division test
2.	// Test 004a -> two decimal numbers division test
3.	// Test 004b -> multiple numbers division test

//Modulus Operations

1.	// Test 005 -> number modulus calculation test
2.	// Test 005a -> decimal number modulus calculation test

//Complex Arithmetic Operation

1.	// Test 006 -> complex arithmetic operation test

//Invalid Calculation Operations

1.	// Test 007 -> invalid two numbers division (division by zero) test
2.	// Test 007a -> two decimal point insertion test

//Additional Operations (Memory)

1.	// Test 008 -> memory indicator operation test (the memory indicator click retrieves "developed by text" instead of stored value, test has failed)
2.	// Test 008a -> memory store/clear (with 'C' button)/recall operation test
3.	// Test 008b -> memory clear operation test


import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(15000);

test.describe("Valid Calculation Operations", () => {

    test.describe("Addition Operations", () => {

        // Test 001 -> two numbers addition test
        test("Two Numbers Addition Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //two numbers addition test
            await testMethods.addTwoNumbersTest(page);
        });

        // Test 001a -> two decimal numbers addition test
        test("Two Decimal Numbers Addition Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //two decimal numbers addition test
            await testMethods.addTwoDecimalNumbersTest(page);
        });

        // Test 001b -> multiple numbers addition test
        test("Multiple Numbers Addition Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //multiple numbers addition test
            await testMethods.addMultipleNumbersTest(page);
        });

    });

    test.describe("Subtraction Operations", () => {

        // Test 002 -> two numbers subtraction test
        test("Two Numbers Subtraction Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //two numbers subtraction test
            await testMethods.subtractTwoNumbersTest(page);
        });

        // Test 002a -> two decimal numbers subtraction test
        test("Two Decimal Numbers Subtraction Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //two decimal numbers subtraction test
            await testMethods.subtractTwoDecimalNumbersTest(page);
        });

        // Test 002b -> two numbers subtraction test (with negative result)
        test("Two Numbers Subtraction Test (With Negative Result)", async ({page}) => {
            //launch the page
            await page.goto('/');
            //two numbers subtraction test (with negative result)
            await testMethods.subtractTwoNumbersNegativeResultTest(page);
        });

        // Test 002c -> multiple numbers subtraction test
        test("Multiple Numbers Subtraction Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //multiple numbers subtraction test
            await testMethods.subtractMultipleNumbersTest(page);
        });

    });

    test.describe("Multiplication Operations", () => {

        // Test 003 -> two numbers multiplication test
        test("Two Numbers Multiplication Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //two numbers multiplication test
            await testMethods.multiplyTwoNumbersTest(page);
        });

        // Test 003a -> two decimal numbers multiplication test
        test("Two Decimal Numbers Multiplication Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //two decimal numbers multiplication test
            await testMethods.multiplyTwoDecimalNumbersTest(page);
        });

        // Test 003b -> multiple numbers multiplication test
        test("Multiple Numbers Multiplication Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //multiple numbers multiplication test
            await testMethods.multiplyMultipleNumbersTest(page);
        });

    });

    test.describe("Division Operations", () => {

        // Test 004 -> two numbers division test
        test("Two Numbers Division Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //two numbers division test
            await testMethods.divideTwoNumbersTest(page);
        });

        // Test 004a -> two decimal numbers division test
        test("Two Decimal Numbers Division Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //two decimal numbers division test
            await testMethods.divideTwoDecimalNumbersTest(page);
        });

        // Test 004b -> multiple numbers division test
        test("Multiple Numbers Division Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //multiple numbers division test
            await testMethods.divideMultipleNumbersTest(page);
        });

    });

    test.describe("Modulus Operations", () => {

        // Test 005 -> number modulus calculation test
        test("Number Modulus Calculation Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //number modulus calculation test
            await testMethods.numberModulusCalculationTest(page);
        });

        // Test 005a -> decimal number modulus calculation test
        test("Decimal Number Modulus Calculation Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //decimal number modulus calculation test
            await testMethods.decimalNumberModulusCalculationTest(page);
        });

    });

    test.describe("Complex Arithmetic Operation", () => {

        // Test 006 -> complex arithmetic operation test
        test("Complex Arithmetic Operation Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //complex arithmetic operation test
            await testMethods.complexArithmeticOperationTest(page);
        });

    });

});

test.describe("Invalid Calculation Operations", () => {

    test.describe("Invalid Division Operation", () => {

        // Test 007 -> invalid two numbers division (division by zero) test
        test("Invalid Two Numbers Division (Division By Zero) Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //invalid two numbers division (division by zero) test
            await testMethods.divideByZeroTest(page);
        });

    });

    test.describe("Invalid Arithmetic Operation", () => {

        // Test 007a -> two decimal point insertion test
        test("Two Decimal Point Insertion Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //two decimal point insertion test
            await testMethods.twoDecimalPointInsertionTest(page);
        });

    });

});

test.describe("Additional Operations (Memory)", () => {

    test.describe("Memory Operations", () => {

        // Test 008 -> memory indicator operation test (the memory indicator click retrieves "developed by text" instead of stored value, test has failed)
        test("Memory Indicator Operation Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //memory indicator operation test
            await testMethods.memoryIndicatorTest(page);
        });

        // Test 008a -> memory store/clear (with 'C' button)/recall operation test
        test("Memory Store/Clear/Recall Operation Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //memory store/clear (with 'C' button)/recall operation test
            await testMethods.memoryStoreRecallTest(page);
        });

        // Test 008b -> memory clear operation test
        test("Memory Clear Operation Test", async ({page}) => {
            //launch the page
            await page.goto('/');
            //memory store/clear (with 'C' button)/recall operation test
            await testMethods.memoryStoreRecallTest(page);
            //memory clear operation test
            await testMethods.memoryClearTest(page);
        });

    });

});
"use strict"

import {HomePage} from "../../pages/home.page.mjs";

import {HomePageWebElementAssert} from "../web-element-asserts/home.page.web.element.assert.mjs";
import {HomePageTextElementAssert} from "../text-element-asserts/home.page.text.element.assert.mjs";
import {HomePageDataLoggers} from "../data-loggers/home.page.data.loggers.mjs";

import {expect} from "@playwright/test";

class TestMethods{

    //basic arithmetic ops tests

    //addition

    //two numbers addition test method
    async addTwoNumbersTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //click '+' button
        await homePage.clickSetNumpadBtn(3);
        //click '5' button
        await homePage.clickSetNumpadBtn(9);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (add two numbers)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Add Two Numbers).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const addNumOne = 7;
        const addNumTwo = 5;
        const expectedResult = String(addNumOne + addNumTwo);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Two Numbers Test Result.png", fullPage: true });
    }

    //two decimal numbers addition test method
    async addTwoDecimalNumbersTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '4' button
        await homePage.clickSetNumpadBtn(8);
        //click '.' button
        await homePage.clickSetNumpadBtn(16);
        //click '5' button
        await homePage.clickSetNumpadBtn(9);
        //click '+' button
        await homePage.clickSetNumpadBtn(3);
        //click '9' button
        await homePage.clickSetNumpadBtn(6);
        //click '.' button
        await homePage.clickSetNumpadBtn(16);
        //click '9' button
        await homePage.clickSetNumpadBtn(6);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (add two decimal numbers)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Add Two Decimal Numbers).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const addDecimalNumOne = 4.5;
        const addDecimalNumTwo = 9.9;
        const expectedResult = String(addDecimalNumOne + addDecimalNumTwo);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Two Decimal Numbers Test Result.png", fullPage: true });
    }

    //multiple numbers addition test method
    async addMultipleNumbersTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //click '+' button
        await homePage.clickSetNumpadBtn(3);
        //click '8' button
        await homePage.clickSetNumpadBtn(5);
        //click '5' button
        await homePage.clickSetNumpadBtn(9);
        //click '+' button
        await homePage.clickSetNumpadBtn(3);
        //click '4' button
        await homePage.clickSetNumpadBtn(8);
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //click '+' button
        await homePage.clickSetNumpadBtn(3);
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (add two numbers)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Add Two Numbers).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const addNumOne = 71;
        const addNumTwo = 85;
        const addNumThree = 42;
        const addNumFour = 31;
        const expectedResult = String(addNumOne + addNumTwo + addNumThree + addNumFour);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Multiple Numbers Test Result.png", fullPage: true });
    }

    //subtraction

    //two numbers subtraction test method
    async subtractTwoNumbersTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '9' button
        await homePage.clickSetNumpadBtn(6);
        //click '-' button
        await homePage.clickSetNumpadBtn(15);
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (subtract two numbers)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Subtract Two Numbers).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const subtractNumOne = 9;
        const subtractNumTwo = 3;
        const expectedResult = String(subtractNumOne - subtractNumTwo);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Subtract Two Numbers Test Result.png", fullPage: true });
    }

    //two decimal numbers subtraction test method
    async subtractTwoDecimalNumbersTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //click '9' button
        await homePage.clickSetNumpadBtn(6);
        //click '.' button
        await homePage.clickSetNumpadBtn(16);
        //click '9' button
        await homePage.clickSetNumpadBtn(6);
        //click '-' button
        await homePage.clickSetNumpadBtn(15);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //click '.' button
        await homePage.clickSetNumpadBtn(16);
        //click '8' button
        await homePage.clickSetNumpadBtn(5);
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (subtract two decimal numbers)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Subtract Two Decimal Numbers).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const subtractDecimalNumOne = 29.9;
        const subtractDecimalNumTwo = 13.87;
        const expectedResult = String(subtractDecimalNumOne - subtractDecimalNumTwo);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Subtract Two Decimal Numbers Test Result.png", fullPage: true });
    }

    //two numbers subtraction (with negative result) test method
    async subtractTwoNumbersNegativeResultTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //click '-' button
        await homePage.clickSetNumpadBtn(15);
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (subtract two numbers -> with negative result)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Subtract Two Numbers (With Negative Result)).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const subtractNumOne = 3;
        const subtractNumTwo = 7;
        const expectedResult = String(subtractNumOne - subtractNumTwo);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Subtract Two Numbers (With Negative Output) Test Result.png", fullPage: true });
    }

    //multiple numbers subtraction test method
    async subtractMultipleNumbersTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //click '-' button
        await homePage.clickSetNumpadBtn(15);
        //click '5' button
        await homePage.clickSetNumpadBtn(9);
        //click '-' button
        await homePage.clickSetNumpadBtn(15);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //click '6' button
        await homePage.clickSetNumpadBtn(10);
        //click '-' button
        await homePage.clickSetNumpadBtn(15);
        //click '8' button
        await homePage.clickSetNumpadBtn(5);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (add two numbers)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Add Two Numbers).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const subtractNumOne = 37;
        const subtractNumTwo = 5;
        const subtractNumThree = 16;
        const subtractNumFour = 8;
        const expectedResult = String(subtractNumOne - subtractNumTwo - subtractNumThree - subtractNumFour);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Subtract Multiple Numbers Test Result.png", fullPage: true });
    }

    //multiplication

    //two numbers multiplication test method
    async multiplyTwoNumbersTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //click '*' button
        await homePage.clickSetNumpadBtn(11);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (multiply two numbers)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Multiply Two Numbers).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const multiplyNumOne = 3;
        const multiplyNumTwo = 17;
        const expectedResult = String(multiplyNumOne * multiplyNumTwo);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Multiply Two Numbers Test Result.png", fullPage: true });
    }

    //two decimal numbers multiplication test method
    async multiplyTwoDecimalNumbersTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //click '.' button
        await homePage.clickSetNumpadBtn(16);
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //click '5' button
        await homePage.clickSetNumpadBtn(9);
        //click '4' button
        await homePage.clickSetNumpadBtn(8);
        //click '9' button
        await homePage.clickSetNumpadBtn(6);
        //click '*' button
        await homePage.clickSetNumpadBtn(11);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //click '.' button
        await homePage.clickSetNumpadBtn(16);
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //click '8' button
        await homePage.clickSetNumpadBtn(5);
        //click '0' button
        await homePage.clickSetNumpadBtn(17);
        //click '0' button
        await homePage.clickSetNumpadBtn(17);
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //click '8' button
        await homePage.clickSetNumpadBtn(5);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (multiply two decimal numbers)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Multiply Two Decimal Numbers).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const multiplyNumOne = 31.72549;
        const multiplyNumTwo = 1.7380038;
        const expectedResult = String(multiplyNumOne * multiplyNumTwo);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Multiply Two Decimal Numbers Test Result.png", fullPage: true });
    }

    //multiple numbers multiplication test method
    async multiplyMultipleNumbersTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //click '*' button
        await homePage.clickSetNumpadBtn(11);
        //click '5' button
        await homePage.clickSetNumpadBtn(9);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //click '*' button
        await homePage.clickSetNumpadBtn(11);
        //click '4' button
        await homePage.clickSetNumpadBtn(8);
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //click '*' button
        await homePage.clickSetNumpadBtn(11);
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (add two numbers)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Add Two Numbers).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const multiplyNumOne = 71;
        const multiplyNumTwo = 51;
        const multiplyNumThree = 47;
        const multiplyNumFour = 27;
        const expectedResult = String(multiplyNumOne * multiplyNumTwo * multiplyNumThree * multiplyNumFour);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Multiply Multiple Numbers Test Result.png", fullPage: true });
    }

    //division

    //two numbers division test method
    async divideTwoNumbersTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '8' button
        await homePage.clickSetNumpadBtn(5);
        //click '/' button
        await homePage.clickSetNumpadBtn(7);
        //click '5' button
        await homePage.clickSetNumpadBtn(9);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (divide two numbers)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Divide Two Numbers).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const divideNumOne = 8;
        const divideNumTwo = 5;
        const expectedResult = String(divideNumOne / divideNumTwo);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Divide Two Numbers Test Result.png", fullPage: true });
    }

    //two decimal numbers division test method
    async divideTwoDecimalNumbersTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '8' button
        await homePage.clickSetNumpadBtn(5);
        //click '.' button
        await homePage.clickSetNumpadBtn(16);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //click '6' button
        await homePage.clickSetNumpadBtn(10);
        //click '/' button
        await homePage.clickSetNumpadBtn(7);
        //click '5' button
        await homePage.clickSetNumpadBtn(9);
        //click '.' button
        await homePage.clickSetNumpadBtn(16);
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (divide two decimal numbers)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Divide Two Decimal Numbers).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const divideDecimalNumOne = 8.16;
        const divideDecimalNumTwo = 5.72;
        const expectedResult = String(divideDecimalNumOne / divideDecimalNumTwo);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Divide Two Decimal Numbers Test Result.png", fullPage: true });
    }

    //multiple numbers division test method
    async divideMultipleNumbersTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //click '6' button
        await homePage.clickSetNumpadBtn(10);
        //click '6' button
        await homePage.clickSetNumpadBtn(10);
        //click '/' button
        await homePage.clickSetNumpadBtn(7);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //click '/' button
        await homePage.clickSetNumpadBtn(7);;
        //click '4' button
        await homePage.clickSetNumpadBtn(8);
        //click '/' button
        await homePage.clickSetNumpadBtn(7);
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (add two numbers)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Add Two Numbers).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const divideNumOne = 366;
        const divideNumTwo = 12;
        const divideNumThree = 4;
        const divideNumFour = 2;
        const expectedResult = String(divideNumOne / divideNumTwo / divideNumThree / divideNumFour);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Divide Multiple Numbers Test Result.png", fullPage: true });
    }

    //modulus calculation

    //number modulus calculation test method
    async numberModulusCalculationTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (number modulus calculation)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Number Modulus Calculation).png", fullPage: true });
        //click '%' button
        await homePage.clickSetNumpadBtn(18);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const numOne = 2;
        const expectedResult = String(numOne / 100);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Two Numbers Modulus Calculation Test Result.png", fullPage: true });
    }

    //decimal number modulus calculation test method
    async decimalNumberModulusCalculationTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //click '.' button
        await homePage.clickSetNumpadBtn(16);
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //click '5' button
        await homePage.clickSetNumpadBtn(9);
        //click '4' button
        await homePage.clickSetNumpadBtn(8);
        //click '9' button
        await homePage.clickSetNumpadBtn(6);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (decimal number modulus calculation)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Decimal Number Modulus Calculation).png", fullPage: true });
        //click '%' button
        await homePage.clickSetNumpadBtn(18);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const decimalNumOne = 31.7549;
        const expectedResult = String(decimalNumOne / 100);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Decimal Number Modulus Calculation Test Result.png", fullPage: true });
    }

    //complex operation

    //complex operation (all five arithmetic operations combined) test method
    async complexArithmeticOperationTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //click '5' button
        await homePage.clickSetNumpadBtn(9);
        //click '+' button
        await homePage.clickSetNumpadBtn(3);
        //click '4' button
        await homePage.clickSetNumpadBtn(8);
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //click '.' button
        await homePage.clickSetNumpadBtn(16);
        //click '8' button
        await homePage.clickSetNumpadBtn(5);
        //click '-' button
        await homePage.clickSetNumpadBtn(15);
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //click '8' button
        await homePage.clickSetNumpadBtn(5);
        //click '*' button
        await homePage.clickSetNumpadBtn(11);
        //click '9' button
        await homePage.clickSetNumpadBtn(6);
        //click '/' button
        await homePage.clickSetNumpadBtn(7);
        //click '4' button
        await homePage.clickSetNumpadBtn(8);
        //click '%' button
        await homePage.clickSetNumpadBtn(18);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (complex arithmetic operation)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Complex Arithmetic Operation).png", fullPage: true });
        //click '%' button
        await homePage.clickSetNumpadBtn(18);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const numOne = 25;
        const numTwo = 47.8;
        const numThree = 28;
        const numFour = 9;
        const numFive = 4;
        const expectedResult = String((numOne + numTwo - numThree * numFour / numFive) / 100);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Complex Arithmetic Operation Calculation Test Result.png", fullPage: true });
    }

    //invalid calculation operations test

    //invalid two numbers division (by zero) test method
    async divideByZeroTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '8' button
        await homePage.clickSetNumpadBtn(5);
        //click '5' button
        await homePage.clickSetNumpadBtn(9);
        //click '/' button
        await homePage.clickSetNumpadBtn(7);
        //click '0' button
        await homePage.clickSetNumpadBtn(17);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after invalid data input (divide by zero)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Invalid Data Input (Divide By Zero).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the actual result to the expected result
        const expectedResult = "Infinity";
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toBe(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Divide By Zero Test Result.png", fullPage: true });
    }

    //two decimal point insertion test method
    async twoDecimalPointInsertionTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '8' button
        await homePage.clickSetNumpadBtn(5);
        //click '5' button
        await homePage.clickSetNumpadBtn(9);
        //click '.' button
        await homePage.clickSetNumpadBtn(16);
        //click '0' button
        await homePage.clickSetNumpadBtn(17);
        //click '.' button
        await homePage.clickSetNumpadBtn(16);
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //click '6' button
        await homePage.clickSetNumpadBtn(10);
        //click '+' button
        await homePage.clickSetNumpadBtn(3);
        //click '1' button
        await homePage.clickSetNumpadBtn(12);
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after invalid data input (two decimal point insertion)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Invalid Data Input (Two Decimal Point Insertion).png", fullPage: true });
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //compare the user gets an expected error
        const expectedResult = "Error";
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toBe(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Two Decimal Point Insertion Test Result.png", fullPage: true });
    }

    //additional operations (memory) tests

    //memory indicator operation test method
    async memoryIndicatorTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //assert the correct input is displayed
        const expectedInput = "72";
        const actualInput = await homePage.getHomePageInput();
        expect(expectedInput).toEqual(actualInput);
        //capture screenshot of the home page (calculator app) after the value has been input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Value Input.png", fullPage: true });
        //click 'M+' (memory add) button
        await homePage.clickSetNumpadBtn(23);
        //click 'C' (clear) button
        await homePage.clickSetNumpadBtn(0);
        //capture screenshot of the home page (calculator app) after input has been cleared
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Input Cleared (With 'C' Button)).png", fullPage: true });
        //click 'M' (memory indicator) button
        await homePage.clickSetNumpadBtn(19);
        //log home page (calculator app) displayed input data
        await homePageDataLoggers.logHomePageInputData(page);
        //if the user sees a developed by text instead of added value, throw an error
        const recalledInput = await homePage.getHomePageInput();
        if(recalledInput === "Developed by Minnu"){
            await page.screenshot({ path: "src/tests/screenshots/Memory Indicator Test Result.png", fullPage: true });
            throw new Error("The memory indicator function seems to be non-operational, test has failed.");
        }
    }

    //memory store/recall test method
    async memoryStoreRecallTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input.png", fullPage: true });
        //click '7' button
        await homePage.clickSetNumpadBtn(4);
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //click '*' button
        await homePage.clickSetNumpadBtn(11);
        //click '3' button
        await homePage.clickSetNumpadBtn(14);
        //click '2' button
        await homePage.clickSetNumpadBtn(13);
        //click 'MS' (memory store) button
        await homePage.clickSetNumpadBtn(20);
        //assert the user received an expected message
        const expectedRecalledEquation = "Memory stored";
        const actualRecalledEquation = await homePage.getHomePageResult();
        expect(expectedRecalledEquation).toBe(actualRecalledEquation);
        //log home page (calculator app) displayed input data (to verify the message is logged back)
        await homePageDataLoggers.logHomePageInputData(page);
        //capture screenshot of the home page (calculator app) after data input (memory indicator)
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Before Memory Store).png", fullPage: true });
        //click 'C' (clear) button
        await homePage.clickSetNumpadBtn(0);
        //capture screenshot of the home page (calculator app) after the input has been cleared
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Input Cleared (With 'C' Button)).png", fullPage: true });
        //click 'MR' (memory recall) button
        await homePage.clickSetNumpadBtn(21);
        //capture screenshot of the home page (calculator app) after the input has been restored
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display (Equation Restored).png", fullPage: true });
        //log home page (calculator app) displayed output data
        await homePageDataLoggers.logHomePageOutputData(page);
        //click '=' button
        await homePage.clickSetNumpadBtn(2);
        //compare the actual result to the expected result
        const numOne = 72;
        const numTwo = 32;
        const expectedResult = String(numOne * numTwo);
        const actualResult = await homePage.getHomePageResult();
        expect(expectedResult).toEqual(actualResult);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Memory Store, Clear (With 'C' Button), Recall Test Result.png", fullPage: true });
    }

    //memory clear operation test
    async memoryClearTest(page){
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        //home page (calculator app) web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page (calculator app) text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page (calculator app) before data input clearing
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display Before Data Input Clear.png", fullPage: true });
        //click 'C' (clear) button
        await homePage.clickSetNumpadBtn(0);
        //capture screenshot of the home page (calculator app) after the input has been cleared
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display After Data Input (Input Cleared (With 'C' Button)).png", fullPage: true });
        //click 'MR' (memory recall) button
        await homePage.clickSetNumpadBtn(21);
        //capture screenshot of the home page (calculator app) after the input has been restored
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display (Equation Restored).png", fullPage: true });
        //click 'MC' (memory clear) button
        await homePage.clickSetNumpadBtn(22);
        //click 'MR' (memory recall) button
        await homePage.clickSetNumpadBtn(21);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Memory Clear Test Result.png", fullPage: true });
    }

}
export {TestMethods};
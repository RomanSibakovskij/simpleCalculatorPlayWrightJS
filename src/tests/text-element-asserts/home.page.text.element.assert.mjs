"use strict"

import {HomePage} from "../../pages/home.page.mjs";
import {expect} from "@playwright/test";

class HomePageTextElementAssert{

    //home page (calculator app) text element assert test method
    async isHomePageTextElementAsExpected(page){
        const homePage = new HomePage(page);
        //assert the home page (calculator app) title is as expected
        const homePageTitle = await homePage.getHomePageTitle();
        expect(homePageTitle).toBe("Simple Calculator");
        //numpad list elements
        const expectedNumpadBtnTexts = ["C", "CE", "=", "+", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-",  ".", "0", "%", "M", "MS", "MR", "MC", "M+"];
        const actualNumpadBtnTexts = await homePage.getHomePageNumpadBtnText();
        expect(expectedNumpadBtnTexts).toStrictEqual(actualNumpadBtnTexts);
    }


}
export {HomePageTextElementAssert};
"use strict"

import {HomePage} from "../../pages/home.page.mjs";
import {expect} from "@playwright/test";

class HomePageWebElementAssert{

    //home page web element assert test method
    async isHomePageWebElementVisible(page){
        const homePage = new HomePage(page);
        //assert the home page (calculator app) title is visible
        await expect(homePage.homePageTitle).toBeVisible();
        //main calculator app window
        //assert the home page (calculator app) display is visible
        await expect(homePage.homePageDisplay).toBeVisible();
        //assert the home page (calculator app) input window is visible
        await expect(homePage.homePageInputWindow).toBeVisible();
        //numpad (list elements)
        //assert the home page (calculator app) numpad buttons are visible (as a list)
        const homePageNumpadButtons = homePage.homePageNumpadBtn;
        const homePageNumpadBtnCount = await homePageNumpadButtons.count();
        for (let i = 0; i < homePageNumpadBtnCount; i++) {
            await expect(homePageNumpadButtons.nth(i)).toBeVisible();
        }
    }

}
export {HomePageWebElementAssert};
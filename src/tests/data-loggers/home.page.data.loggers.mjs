"use strict"

import {HomePage} from "../../pages/home.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class HomePageDataLoggers{

    //home page (calculator app) input data logger method
    async logHomePageInputData(page){
        const homePage = new HomePage(page);

        Logger.info("Current displayed calculator input (with operation): " + await homePage.getHomePageInput() + "\n");

    }

    //home page (calculator app) output data logger method
    async logHomePageOutputData(page){
        const homePage = new HomePage(page);

        Logger.info("Current displayed calculation result: " + await homePage.getHomePageResult() + "\n");

    }

}
export {HomePageDataLoggers};
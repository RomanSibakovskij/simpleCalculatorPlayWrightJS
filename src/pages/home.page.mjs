"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class HomePage extends BasePage{

    constructor(page) {
        super(page);


        this._homePageTitle = page.locator("//h1");
        //main calculator app window
        this._homePageDisplay = page.locator("//div[@class='display']");
        this._homePageInputWindow = page.locator("//div[@class='input-container']/input");
        this._homePageOutputWindow = page.locator("//div[@class='result']");
        //numpad (list elements)
        this._homePageNumpadBtnElements = page.locator("//div[@class='buttons']/button");

    }

    //click set numpad button method
    async clickSetNumpadBtn(index){await this._homePageNumpadBtnElements.nth(index).click();}

    //home page (calculator app) data getters
    async getHomePageInput(){return await this._homePageInputWindow.inputValue();}
    async getHomePageResult(){return await this._homePageOutputWindow.innerText();}

    //home page (calculator app) text element getter
    async getHomePageTitle(){return await this._homePageTitle.innerText();}

    //numpad (list elements)
    async getHomePageNumpadBtnText(){
        const elements = await this._homePageNumpadBtnElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //home page (calculator app) web element getters
    get homePageTitle(){return this._homePageTitle;}
    //main calculator app window
    get homePageDisplay(){return this._homePageDisplay;}
    get homePageInputWindow(){return this._homePageInputWindow;}
    //numpad (list elements)
    get homePageNumpadBtn(){return this._homePageNumpadBtnElements;}

}
export {HomePage};
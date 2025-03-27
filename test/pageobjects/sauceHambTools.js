import { $ } from '@wdio/globals'
import myPages from './sauceDemoMain.js';

class hambTest extends myPages {

//Selectors
    get hambMenu () {
        return $('.bm-burger-button');
    }
    get hambX () {
        return $('.bm-cross-button');
    }
    get hambAllItems () {
        return $('#inventory_sidebar_link');
    }
    get hambAbout () {
        return $('#about_sidebar_link');
    }
    get hambLogout () {
        return $('#logout_sidebar_link');
    }
    get hambResetAS () {
        return $('#reset_sidebar_link');
    }

//Clicking Selectors
    async openMenu () {
        await this.hambMenu.click();
    }
    async selectAll () {
        await this.hambAllItems.click();
    }
    async selectAbt () {
        await this.hambAbout.click();
    }
    async selectLogout () {
        await this.hambLogout.click();
    }
    async selectReset () {
        await this.hambResetAS.click();
    }
    async selectX () {
        await this.hambX.click()
    }

//Creating a simple loop
    async openClose () {
        await this.hambMenu.click();
        await this.hambX.click();
        await this.hambMenu.click();
        await this.hambX.click();
        await this.hambMenu.click();
        await this.hambX.click();
        await this.hambMenu.click();
        await this.hambX.click();
        await this.hambMenu.click();
        await this.hambX.click();
        await this.hambMenu.click();
        await this.hambX.click();
        await this.hambMenu.click();
        await this.hambX.click();
        await this.hambMenu.click();
        await this.hambX.click();
    }

//Creating a better loop
    async stressTestViewAllItems(times) {
        const viewAllItemsButton = await $('#react-burger-menu-btn'); // Select the menu button
        for (let i = 0; i < 10; i++) {
            await this.hambMenu.click();
            await this.hambX.click()
            console.log(`Click #${i + 1} completed`);
        }
    }
}

export default new hambTest();
import { expect } from '@wdio/globals'
import sauceLogin from '../pageobjects/sauceDemoLogin';
import sauceAssurance from '../pageobjects/sauceDemoAssurance';
import hambTest from '../pageobjects/sauceHambTools';
import cartTest from '../pageobjects/sauceCartTools';

describe('sauceDemo Basic Hamburger Test', () => {

    it('Logging in', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('standard_user', 'secret_sauce')
        await expect(sauceAssurance.rootAlert).toBeExisting()
        await expect(sauceAssurance.rootAlert).toHaveText(
            expect.stringContaining('Swag Labs'))
    })
   
    it('Checking if "All Items" works', async () => {
        await hambTest.openMenu()
        await hambTest.selectAll()
        await cartTest.selectProd()
        await hambTest.openMenu()
        await hambTest.selectAll()
        await expect(sauceAssurance.rootAlert).toBeExisting()
        await expect(sauceAssurance.rootAlert).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('Checking if "About" works', async () => {
        await hambTest.openMenu()
        await hambTest.selectAbt()
        await expect(sauceAssurance.aboutAlert).toBeExisting()
        await browser.back()
        await sauceLogin.open()
        await sauceLogin.login('standard_user', 'secret_sauce')
        await expect(sauceAssurance.rootAlert).toBeExisting()
        await expect(sauceAssurance.rootAlert).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('Checking if "Logout" works', async () => {
        await hambTest.openMenu()
        await hambTest.selectLogout()
        await sauceLogin.open()
        await sauceLogin.login('standard_user', 'secret_sauce')
        await expect(sauceAssurance.rootAlert).toBeExisting()
        await expect(sauceAssurance.rootAlert).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('Checking if "Reset App State" works', async () => {
        await cartTest.addToCartHome('bike-light')
        await cartTest.addToCartHome('backpack')
        await cartTest.addToCartHome('bolt-t-shirt')
        await cartTest.addToCartHome('fleece-jacket')
        await cartTest.addToCartHome('onesie')
        await cartTest.addShirtToCart()
        await expect(cartTest.cartBadge).toHaveText('6')
        await hambTest.openMenu()
        await hambTest.selectReset()
        await expect(cartTest.cartBadge).not.toBeExisting()
        await hambTest.selectX()
        
    })

    it('[Stress]Opening and Closing Hamburger Menu', async () => {
        //await hambTest.openClose();
        await hambTest.stressTestViewAllItems();
        await expect(sauceAssurance.rootAlert).toBeExisting()
        await expect(sauceAssurance.rootAlert).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

})
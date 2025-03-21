import { $ } from '@wdio/globals'
import myPages from './sauceDemoMain.js';

class cartTest extends myPages {

    get mainAddButton () {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    get mainRemoveButton () {
        return $('#remove-sauce-labs-backpack')
    }
    get productPageAddButton () {
        return $('#add-to-cart')
    }
    get productPageRemoveButton () {
        return $('#remove')
    }
    get selectProduct () {
        return $('#item_4_title_link')
    }
    get goToCart () {
        return $('.shopping_cart_link')
    }
    async selectProd () {
        await this.selectProduct.click();
    }

    async addToCartHome(itemName) {
        const addToCartButton = await $(`#add-to-cart-sauce-labs-${itemName}`);
        await addToCartButton.click();
    }
    async addShirtToCart() {
        const addShirtToCart = await $('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
        await addShirtToCart.click();
    }

    get cartBadge() {
        return $('[data-test="shopping-cart-badge"]');
    }

}



export default new cartTest;
import { browser } from '@wdio/globals'

export default class myPages {

    openSauce() {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
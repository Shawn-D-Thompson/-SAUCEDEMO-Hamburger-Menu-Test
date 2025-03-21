import { $ } from '@wdio/globals'
import myPages from './sauceDemoMain.js';


class sauceLogin extends myPages {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.openSauce();
    }
}

export default new sauceLogin();

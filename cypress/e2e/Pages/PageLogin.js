import BasePage from '../Base/BasePage';

class PageLogin extends BasePage {
    cssInputEmailLogin = 'input#email'
    cssInputPasswordLogin = 'input#password'
    xpathLoginLink = "//button[normalize-space(text())='Sign in']"

    loginFormulario(correo,password){
        this.typeTextByCss(this.cssInputEmailLogin, correo);
        this.typeTextByCss(this.cssInputPasswordLogin, password);
    }
    clickLoginUser(){
        this.getElementByXpath(this.xpathLoginLink).should('not.be.disabled');
        this.clickElementByXpath(this.xpathLoginLink)
    }
    //

}

export default new PageLogin()

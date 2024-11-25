import BasePage from '../Base/BasePage';

class PageLogout extends BasePage {
    cssInputEmailLogin = 'input#email'
    cssInputPasswordLogin = 'input#password'
    xpathLoginLink = "//button[normalize-space(text())='Sign in']"
    xpathDesplegarLink = "//img[@alt='Rengoku']"
    xpathLogoutLink = "//a[normalize-space(text())='Logout']"

    loginFormulario(correo,password){
        this.typeTextByCss(this.cssInputEmailLogin, correo);
        this.typeTextByCss(this.cssInputPasswordLogin, password);
    }
    clickLoginUser(){
        this.clickElementByXpath(this.xpathLoginLink)
    }
    //
    ClickDesplegar(){
        this.clickElementByXpath(this.xpathDesplegarLink)
    }
    ClickLogout(){
        this.clickElementByXpath(this.xpathLogoutLink)
    }

}

export default new PageLogout()
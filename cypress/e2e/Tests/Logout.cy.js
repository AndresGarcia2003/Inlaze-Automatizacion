import PageLogout from "../Pages/PageLogout";

describe('Test Login User', ()=>{
    it('El usuario se Logea  correctamente el usuario', ()=>{
       cy.log("Se inicia el Logeo....")
       PageLogout.loginFormulario("lopezsermientorafa@gmail.com", "Alemania23.")
       PageLogout.clickLoginUser()
       PageLogout.ClickDesplegar()
       PageLogout.ClickLogout()
    })
})
import PageLogout from "../Pages/PageLogout";

describe('Test Logout login', ()=>{
    it('El usuario cierra la sesion correctamente', ()=>{
       cy.log("Se inicia el Logout....")
       PageLogout.loginFormulario("lopezsermientorafa@gmail.com", "Alemania23.")
       PageLogout.clickLoginUser()
       PageLogout.ClickDesplegar()
       PageLogout.ClickLogout()
    })
})
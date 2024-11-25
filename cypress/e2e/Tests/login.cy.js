import PageLogin from "../Pages/PageLogin";

describe('Test Login User', ()=>{
    it('El usuario se Logea  correctamente el usuario', ()=>{
       cy.log("Se inicia el Logeo....")
       PageLogin.loginFormulario("lopezsermientorafa@gmail.com", "Alemania23.")
       PageLogin.clickLoginUser()
    })
}) 
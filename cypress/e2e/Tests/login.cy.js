import PageLogin from "../Pages/PageLogin";

describe('Test Login User', ()=>{
    it('El usuario se Logea  correctamente el usuario', ()=>{
       cy.log("Se inicia el Logeo....")
       PageLogin.loginFormulario("albertgomez@gmail.com", "Alemania2025*")
       PageLogin.clickLoginUser()
    })
}) 
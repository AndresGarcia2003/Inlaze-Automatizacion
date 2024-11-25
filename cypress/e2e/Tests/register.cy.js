import PageRegister from "../Pages/PageRegister";

describe('Test Register User', ()=>{
    it('El usuario se registra correctamente', ()=>{
       cy.log("Se inicia el Registro....")
       PageRegister.clickRegister() 
       PageRegister.registroFormulario("Alberto Fuentes Gomez", "albertgomez@gmail.com", "Alemania2025*")
       PageRegister.clickRegisterUser()
       PageRegister.textAlertVerify("Successful registration")
    })
})
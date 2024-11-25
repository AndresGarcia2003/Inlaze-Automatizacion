import PageRegister from "../Pages/PageRegister";

describe('Test Register User', ()=>{
    it('El usuario se registra correctamente', ()=>{
       cy.log("Se inicia el Registro....")
       PageRegister.clickRegister() 
       PageRegister.registroFormulario("Rafael Sarmiento Torres Lopez", "lopezsermientorafa@gmail.com", "Alemania23.")
       PageRegister.clickRegisterUser()
       PageRegister.textAlertVerify("Successful registration")
    })
})
import signup from '../pages/SignupPage'

describe('Signup', () => {

    beforeEach(function() {
        cy.fixture('deliver').then((item) => {
            this.deliver = item
        })
    });

    it('User should be deliver', function() {
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.modalContentShouldBe(expectedMessage)

    })

    it('Invalid document', function() {
        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Invalid email', function() {
        signup.go()
        signup.fillForm(this.deliver.email_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    it('Required fields', function() {
        signup.go()
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')        
    });
})

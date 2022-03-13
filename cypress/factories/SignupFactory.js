const { faker } = require('@faker-js/faker')
let cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        let name = faker.name.findName();

        let data = {
            name: name,
            cpf: cpf.generate(),
            email: faker.internet.email(name),
            whatsapp: '85987567618',
            address: {
                cep: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}
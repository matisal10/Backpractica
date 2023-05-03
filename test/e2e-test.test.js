const chai = require('chai')
const ChaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(ChaiHttp);

const url = 'http://localhost:3000'

describe('inserte el nombre y el precio', ()=>{
    it('eperamos un name y un price',(done)=>{
        chai.request(url)
            .post('/products')
            .send({name:'monitor',price:2000})
            .end((err,res)=>{
                console.log(res.body)
                expect(res).to.have.status(200)
                done()
            })
    })
})





// const app = require('../index').app

// describe('suite de pruebas e2e para el curso',()=>{
//     it('esperamos un hola',(done)=>{
//         chai.request('http://localhost:3000')
//             .get('/')
//             .end((err,res)=>{
//                 console.log('A')
//                 chai.assert.equal(res.text,"hola")
//                 done()
//             })
//         console.log('B')
//     })
// })
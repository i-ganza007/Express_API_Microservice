const swagger_jsdoc = require('swagger-jsdoc')
const swagger_ui = require('swagger-ui-express')

const options = {
    definition:{
        openapi:'0.70.0',
        info:{
            title:'Super App Documentation',
            description:'Backend Trello Clone using all microservices I know up until this point',
            version:'1.0.0'
        }
    },
    apis:['../router/*js']
}

const specs = swagger_jsdoc(options)

module.exports = {
    specs,
    swagger_ui
}
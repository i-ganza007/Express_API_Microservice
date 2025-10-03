const Joi = require('joi')
// TODO Wrap up the validator fields like dates and foreign keys   
const User = Joi.object({
    name:Joi.string().required(),
    username:Joi.string().required(),
    password:Joi.string().min(5).max(15).required(),
    email:Joi.string().email().required(),
    phoneNumber : Joi.string().min(5).required()
})

const UserLogin = Joi.object({
    password:Joi.string().min(5).max(15).required(),
    email:Joi.string().email().required(),
})

const Board = Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required(),
    userId: Joi.string().uuid().required()
})

const Task = Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required(),
    deadline:Joi.date().optional(),
    boardId: Joi.string().uuid().required()  
})

const SubTask = Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required(),
    taskId: Joi.string().uuid().required()
})

module.exports = {User,Board,Task,SubTask,UserLogin}
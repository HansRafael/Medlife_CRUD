const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');



/**
 *  @description Root Route
 *  @method GET /
 */
 route.get('/', services.homeRoutes);

 /**
  *  @description add users
  *  @method GET /add-user
  */
 route.get('/add-user', services.add_user)
 
 /**
  *  @description for update user
  *  @method GET /update-user
  */
 route.get('/update-user', services.update_user)

 /**
  *  @description for login auth
  *  @method GET /login_user
  */
 route.get('/login', services.login_user)

  /**
  *  @description method search a user by our cpf
  *  @method GET /searchCPF
  */
 route.get('/search',services.search_cpf)

 
 

 
 // API
 route.post('/api/users', controller.create);
 route.get('/api/users', controller.find);
 route.get('/api/user', controller.find_CPF);
 route.put('/api/users/:id', controller.update);
 route.delete('/api/users/:id', controller.delete);
 
 
 module.exports = route
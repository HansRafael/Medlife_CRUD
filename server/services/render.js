const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.survey_form = (req,res) => {
    axios.get('http://localhost:3000/api/video', {params : {id : req.query.id , video : req.query.video}})
    .then(function(userdata){
        res.render('survey_form', { urls : userdata.data})
    })
    .catch(err =>{
        res.render('searchCPF',{users : {url : ['1']}} );
    })
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.search_cpf = (req,res) => {
    axios.get('http://localhost:3000/api/user',{params : { id : req.query.id }})
    .then(function(userdata){
        res.render('searchCPF', { users : userdata.data})
    })
    .catch(err =>{
        res.render('searchCPF',{users : {url : ['1']}} );
    })
}

exports.login_user = (req, res) => {
    res.render('login', {params : 'Login', message: null});

}



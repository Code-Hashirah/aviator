const db = require('../../database/connect');

// dashboard
exports.adminDash=(req,res)=>{
    res.render('admin/dashboard')
}
// add route 
exports.adminAddRoute=(req,res)=>{
    res.render('admin/add-route')
}

exports.adminPostRoute=(req,res)=>{
const {location, destination, price}=req.body;
db.execute('INSERT INTO flights(location, destination, price) VALUES(?, ?, ?)', [location, destination, price]).then(result=>{
    res.redirect(302,'/admin-our-route')
})

}

// our routes code  
exports.ourRoutes=(req,res)=>{
    db.execute('SELECT * FROM flights').then(result=>{
        res.render('admin/our-Route',{flight:result[0]})
    })
    .catch(err=>{
        console.log(err)
    })
}

//  update route code 
exports.updateRoutes=(req,res)=>{
    let id =req.params.id
    db.execute('SELECT * FROM flights WHERE id=?', [id]).then(result=>{
        res.render('admin/update-Route', {Records:result[0]})
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.adminUpdateRoute=(req,res)=>{
    const {id,location, destination, price}=req.body;
    // let id=req.params.id
    db.execute('UPDATE flights SET location=?, destination=?, price=? WHERE id=?',  [location, destination, price, id]).then(result=>{
        res.redirect(302,'/admin-our-route')
    })
}

exports.deleteRoute=(req,res)=>{
    let {id}=req.body
    db.execute('DELETE FROM flights WHERE id=?', [id]).then(result=>{
        res.redirect(302, '/admin-our-route')
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.indexPage=(req,res)=>{
    db.execute('SELECT * FROM flights').then(result=>{
        res.render('index',{trip:result[0]})
    })
    .catch(err=>{
        console.log(err)
    })
}
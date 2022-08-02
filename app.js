var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://Nijat:gXIlfSzMfJdpsrxd@cluster0.7gksg.mongodb.net/UserDB?retryWrites=true&w=majority'

//MongoDB ye connect olmaq

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('Connection created...!')
//     db.close();
// })

//Collection yaratmaq

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     dbo.createCollection('users', (err, res) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('Collection created...!');
//         db.close();
//     })
// })

//InsertOne

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     var userObj = {
//         username: 'Nicat',
//         salary: 3000
//     }
//     var userObj2 = {
//         username: 'Leman',
//         salary: 10000
//     }
//     dbo.collection('users').insertOne(userObj2 , (err, res) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('1 User inserted...! ');
//         db.close();
//     })
// })

//InsertMany

MongoClient.connect(url, (err, db) => {
    if(err) {
        console.log(err);
    }
    var dbo = db.db('UserDB')
    var myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
      ];
    dbo.collection('users').insertMany(myobj , (err, res) => {
        if(err) {
            console.log(err);
        }
        console.log(`${res.insertedCount} User Inserted...!`);
        db.close();
    })
})

//finfOne

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     dbo.collection('users').findOne({}, (err, res) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log(res);
//         db.close();
//     })
// })

//find

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     dbo.collection('users').find({}).toArray(function(err, res) {
//         if(err) return err
//         console.log(res);
//         db.close();
//     })
// })

//query

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     var query = { address: "Park Lane 38" };
//     dbo.collection('users').find(query).toArray(function (err, res) {
//         if(err){
//             console.log(err);
//         }
//         console.log(res);
//         db.close();
//     })
// })

//query

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     var query = { address: /^S/ };
//     dbo.collection('users').find(query).toArray(function (err, res) {
//         if(err){
//             console.log(err);
//         }
//         console.log(res);
//         db.close();
//     })
// })

//Adlari a-z siralayan sort sorgusu

// MongoClient.connect(url, (err, db) => {
//     if(err){
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     var mySort = { name: 1}
//     dbo.collection('users').find().sort(mySort).toArray(function (err, res) {
//         if(err) {
//             console.log(err);
//         }
//         console.log(res);
//         db.close();
//     })
// })

//Adlari z-a siralayir

// MongoClient.connect(url, (err, db) => {
//     if(err){
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     var mySort = { name: -1}
//     dbo.collection('users').find().sort(mySort).toArray(function (err, res) {
//         if(err) {
//             console.log(err);
//         }
//         console.log(res);
//         db.close();
//     })
// })

//deleteOne ilk tapdigini silir

// MongoClient.connect(url , (err, db) => {
//     if(err) {
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     var myQuery = { address: 'Mountain 21' }
//     dbo.collection('users').deleteOne(myQuery, function (err, res) {
//         if(err) {
//             console.log(err);
//         }
//         console.log('1 document deleted...!');
//         db.close();
//     })
// })

//deleteMany

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     var dQuery = { name: /^S/}
//     dbo.collection('users').deleteMany(dQuery, function(err, res){
//         if(err){
//             console.log(err);
//         }
//         console.log(`${res.deletedCount} users deleted...!`);
//         db.close();
//     })
// })

//drop collection

// MongoClient.connect(url , (err, db) => {
//     if(err) {
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     dbo.collection('users').drop(function (err, res) {
//         if(err) {
//             console.log(err);
//         }
//         if(res) {
//             console.log('collection drop');
//         }
//         db.close();
//     })
// })

//dropCollection()

// MongoClient.connect(url, (err,db) => {
//     if(err){
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     dbo.dropCollection('users' , function (err, res) {
//         if(err){
//             console.log(err);
//         }
//         if(res){
//             console.log('user deleted');
//         }
//     })
// })

//updateOne()

// MongoClient.connect(url, (err,db) => {
//     if(err) {
//         console.log(err);
//     }
//     var dbo = db.db('UserDB')
//     var myQuery = { address: "Valley 345" }
//     var newValues = { $set: {name: 'Leman' , address: 'Zaqatala Tala k.'}}
//     dbo.collection('users').updateOne(myQuery, newValues, function(err,res){
//         if(err){
//             console.log(err);
//         }
//         console.log('1 document updated');
//         db.close();
//     })
// })

//limit()

MongoClient.connect(url , (err, db) => {
    if(err){
        console.log(err);
    }
    var dbo = db.db('UserDB')
    dbo.collection('users').find().limit(5).toArray(function(err, res) {
        if(err){
            console.log(err);
        }
        console.log(res);
        db.close();
    })
})




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

var mongo_DB = 'mongodb://localhost:27017/mydb';

mongoose.connect(mongo_DB, { useNewUrlParser: true }, function(err, response){
    if(err){console.log(err);}
    console.log('Successfully connected');
});

mongoose.Promise = global.Promise;
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

let CustomerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: String 
    },
    email: {
        type: String
    }
});

var Customer = mongoose.model('Customer', CustomerSchema);

router.route('/customers').get((req, res) => {
    Customer.find((err, customers) => {
        if (err)
            console.log(err);
        else
            res.json(customers);
    });
});

router.route('/customers/:id').get((req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
        if (err)
            console.log(err);
        else
            res.json(customer);
    })
});

router.route('/customers/add').post((req, res) => {
    let customer = new Customer(req.body);
    customer.save()
        .then(customer => {
            res.status(200).json({'customer': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/customers/update/:id').post((req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
        if (!customer)
            return next(new Error('Could not load Document'));
        else {
            customer.name = req.body.name;
            customer.age = req.body.age;
            customer.email = req.body.email;

            customer.save().then(customer => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/customers/delete/:id').get((req, res) => {
    Customer.findByIdAndRemove({_id: req.params.id}, (err, customer) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

app.use('/', router);
app.listen(4000, () => console.log('Express server running on port 4000'));

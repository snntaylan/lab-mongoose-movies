const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbtitle = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbtitle}`,{ useNewUrlParser: true });

const celebrities = [
    {
        name: 'Leonardo Di Caprio',
        occupation: 'actor',
        catchPhrase: 'whatever',
    },
    {
        name: 'Jennifer Lopez',
        occupation: 'singer',
        catchPhrase: 'unknown',
    },
    {
        name: 'Elvis Presley',
        occupation: 'singer',
        catchPhrase: 'handsome',
    }
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  });
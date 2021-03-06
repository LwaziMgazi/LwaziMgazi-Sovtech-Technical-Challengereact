const {DataStore}= require('notarealdb');

const store = new DataStore('./data');

module.exports={
    company: store.collection('company'),
    jobs: store.collection('jobs'),
    users: store.collection('users')
}
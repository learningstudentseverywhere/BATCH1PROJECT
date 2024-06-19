const cds = require('@sap/cds')
var schoolServiceFile = require('./Handler/schoolService');

module.exports = cds.service.impl(async function(){
    schoolServiceFile(this,cds);

});
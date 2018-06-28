'use strict';

module.exports = function(Doctor) {
  Doctor.average = function(id, cb) {
  	Doctor.find(function(err, items) {
	    items.forEach(function(item) {
		      console.log(' -', item);
		    });
	    console.log();
    	cb(null, items);
  	});
  };

  Doctor.remoteMethod('average', {
    http: {path: '/:id/average', verb: 'get'},
    accepts: {arg: 'id', type: 'string'},
    returns: {arg: 'average', type: 'object'},
    description: 'Returns average ratings',
  });
};

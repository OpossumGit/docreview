'use strict';

module.exports = function(Rating) {
  Rating.averagePerDoctor = function(doctorId, cb) {
  	Rating.find({where: {doctorId: doctorId}}, function(err, items) {
      let countExpertize = 0;
      let countPoliteness = 0;
      let countEthic = 0;
      let countStaff = 0;
      let sumExpertize = 0;
      let sumPoliteness = 0;
      let sumEthic = 0;
      let sumStaff = 0;
      items.forEach(function(item) {
        if (item.starsExpertize > 0) {
          countExpertize++;
          sumExpertize = sumExpertize + item.starsExpertize;
        };
        if (item.starsPoliteness > 0) {
          countPoliteness++;
          sumPoliteness = sumPoliteness + item.starsPoliteness;
        };
        if (item.starsEthic > 0) {
          countEthic++;
          sumEthic = sumEthic + item.starsEthic;
        };
        if (item.starsStaff > 0) {
          countStaff++;
          sumStaff = sumStaff + item.starsStaff;
        };
      });
      let avgExpertize, avgPoliteness, avgEthic, avgStaff;
      if (countExpertize > 0) {
        avgExpertize = (sumExpertize / countExpertize).toFixed(3);
      }
      if (countPoliteness > 0) {
        avgPoliteness = (sumPoliteness / countPoliteness).toFixed(3);
      }
      if (countEthic > 0) {
        avgEthic = (sumEthic / countEthic).toFixed(3);
      }
      if (countStaff > 0) {
        avgStaff = (sumStaff / countStaff).toFixed(3);
      }
      let jsonToReturn =
        {
          'countComments': items.length,
          'countExpertize': countExpertize,
          'countPoliteness': countPoliteness,
          'countEthic': countEthic,
          'countStaff': countStaff,
          'avgExpertize': avgExpertize,
          'avgPoliteness': avgPoliteness,
          'avgEthic': avgEthic,
          'avgStaff': avgStaff,
        };
      // console.log('- ' + jsonToReturn);
    	cb(null, jsonToReturn);
	  });
  };

  Rating.remoteMethod('averagePerDoctor', {
    http: {path: '/:doctorId/averagePerDoctor', verb: 'get'},
    accepts: {arg: 'doctorId', type: 'string'},
    returns: {arg: 'average', type: 'object'},
    description: 'Returns average ratings of single doctor',
  });

    // Rating.app.models.Doctor.find(function(err,doctors){console.log(doctors);}); ovo radi za kopanje po drugim modelima :)
  Rating.averagePerClinic = function(clinicId, cb) {
    Rating.app.models.Doctor.find({where: {clinicId: clinicId}, include: 'ratings'}, function(err, doctors) {
      let countComments = 0;
      let countExpertize = 0;
      let countPoliteness = 0;
      let countEthic = 0;
      let countStaff = 0;
      let sumExpertize = 0;
      let sumPoliteness = 0;
      let sumEthic = 0;
      let sumStaff = 0;
      doctors.forEach(function(doctor) {
        let parsedDoc = JSON.parse(JSON.stringify(doctor));
        parsedDoc.ratings.forEach(function(item) {
          countComments++;
          if (item.starsExpertize > 0) {
            countExpertize++;
            sumExpertize = sumExpertize + item.starsExpertize;
          };
          if (item.starsPoliteness > 0) {
            countPoliteness++;
            sumPoliteness = sumPoliteness + item.starsPoliteness;
          };
          if (item.starsEthic > 0) {
            countEthic++;
            sumEthic = sumEthic + item.starsEthic;
          };
          if (item.starsStaff > 0) {
            countStaff++;
            sumStaff = sumStaff + item.starsStaff;
          };
        });
      });
      let avgExpertize, avgPoliteness, avgEthic, avgStaff;
      if (countExpertize > 0) {
        avgExpertize = (sumExpertize / countExpertize).toFixed(3);
      }
      if (countPoliteness > 0) {
        avgPoliteness = (sumPoliteness / countPoliteness).toFixed(3);
      }
      if (countEthic > 0) {
        avgEthic = (sumEthic / countEthic).toFixed(3);
      }
      if (countStaff > 0) {
        avgStaff = (sumStaff / countStaff).toFixed(3);
      }
      let jsonToReturn =
        {
          'countComments': countComments,
          'countExpertize': countExpertize,
          'countPoliteness': countPoliteness,
          'countEthic': countEthic,
          'countStaff': countStaff,
          'avgExpertize': avgExpertize,
          'avgPoliteness': avgPoliteness,
          'avgEthic': avgEthic,
          'avgStaff': avgStaff,
        };
      // console.log('- ' + jsonToReturn);
      cb(null, jsonToReturn);
    });
  };

  Rating.remoteMethod('averagePerClinic', {
    http: {path: '/:clinicId/averagePerClinic', verb: 'get'},
    accepts: {arg: 'clinicId', type: 'string'},
    returns: {arg: 'average', type: 'object'},
    description: 'Returns average ratings of all doctors of single clinic',
  });
};

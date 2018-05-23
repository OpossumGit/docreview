
var app = new Vue({
  el: '#app',
  data: () => ({
      step:1,
      registration:{
        comment:'',
        clinic:{},
        doctor:{},
        stars:0,
        author:'anonymous'
      },
      clinics:[],
      doctors: [],
      ratings: [{"text": "Bez ocjene", "value":0},
      {"text": "nedovoljan (1)", "value":1},
      {"text": "dovoljan (2)", "value":2},
      {"text": "dobar (3)", "value":3},
      {"text": "vrlo dobar (4)", "value":4},
      {"text": "izvrstan (5)", "value":5}],
      validComment: false,
      requiredComment: [v =>!!v || 'Obavezan unos komentara']
  }),
  methods:{
    submit() {

      if (this.validComment) {

        let jsonToSubmit = 
        	{
  		  "stars": this.registration.stars,
  		  "comment": this.registration.comment,
  		  "author": this.registration.author,
  		  "doctorId": this.registration.doctor.id
    		};

    		this.$http.post('api/ratings',jsonToSubmit).then(response => {

    		this.step = 4;

    	  }, response => {
  	     // error callback
  	      console.log(response);
  	   });
      }
    },
    loadDoctors() {
    	this.step = 2;

    	this.$http.get('api/clinics/'+this.registration.clinic.id+'/doctors',{params: {"filter[order]":"name"}}).then(response => {

	    //console.log(response.body);
	    this.doctors = response.body;
	    document.getElementById("doctor").focus();

	  }, response => {
	    // error callback
	    console.log(response);
	  });
    },
    gotoComments() {
    	this.step = 3;
    	window.setTimeout(function (){
    		document.getElementById("comment").focus();
    	}, 0);
    },
    restart() {
    	location.reload();
    },
    readyToSubmit() {
    	document.getElementById("submitBtn").focus();
    }
  },
  created(){

  	window.onload = function(){ 
  		document.getElementById("loading").style.opacity = 0; 
  		setTimeout(function(){ document.getElementById("loading").style.display="none"; }, 1000);
  	} 

    this.$http.get('api/clinics',{params: {"filter[order]":"clinicname"}}).then(response => {

	    //console.log(response.body);
	    this.clinics = response.body;
	    document.getElementById("clinic").focus();

	  }, response => {
	    // error callback
	    console.log(response);
	  });
  }
});
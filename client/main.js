
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
      requiredComment: [v =>!!v || 'Obavezan unos komentara'],
      errorMsg: null,
      unauthenticated: true
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

    		this.$http.post('api/ratings',jsonToSubmit, {headers : {'Authorization': this.getCookie("access_token")}}).then(response => {

    		  this.step = 4;
          this.errorMsg = null;

          document.getElementById("logoutBtn").focus();

    	  }, response => {
  	     // error callback
  	      //console.log(response);
          this.errorMsg=response.bodyText;

  	   });
      }
    },
    loadDoctors() {
    	this.step = 2;

    	this.$http.get('api/clinics/'+this.registration.clinic.id+'/doctors',{params: {"filter[order]":"name"}, headers : {'Authorization': this.getCookie("access_token")}}).then(response => {

  	    //console.log(response.body);
  	    this.doctors = response.body;
  	    document.getElementById("doctor").focus();
        this.errorMsg=null;

  	  }, response => {
  	    // error callback
  	    //console.log(response);
        this.errorMsg=response.bodyText;
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
    },
    googleLogin() {
      window.open("auth/google", "_self");
    },
    getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
    },
    logout() {
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }

      this.unauthenticated = true;
    }
  },
  created(){

    if (this.getCookie("access_token") != "") this.unauthenticated=false;

  	window.onload = function(){ 
  		document.getElementById("loading").style.opacity = 0; 
  		setTimeout(function(){ document.getElementById("loading").style.display="none"; }, 1000);
  	} 

      if (!this.unauthenticated){

      this.$http.get('api/clinics',{params: {"filter[order]":"clinicname"}, headers : {'Authorization': this.getCookie("access_token")}}).then(response => {

  	    //console.log(response.body);
  	    this.clinics = response.body;
  	    document.getElementById("clinic").focus();
        this.errorMsg=null;

  	  }, response => {
  	    // error callback
  	    //console.log(response);
        this.errorMsg=response.bodyText;
  	  });
    }
  }
});
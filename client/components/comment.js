Vue.component('comment', {
  props: ['cmnt'],
  methods:{
  	getHRDate (date) {
     return moment(date).fromNow();
    }
  },
  template: `
	  <v-card tile hover class="mb-3 lime lighten-5">
        <v-card-text> 
        	<span class="body-2" style="font-style:italic" v-html="cmnt.comment"></span>
        	<br><br>

          <div v-if="cmnt.starsExpertize>0">
          	<div class="caption">Stručnost:</div> 
          		<span v-for="n in cmnt.starsExpertize"> <v-icon small color="red">fa-tint</v-icon>
          		</span>
          	<br><br>
          </div>

          <div v-if="cmnt.starsPoliteness>0">
          	<div class="caption">Ljubaznost:</div> 
          		<span v-for="n in cmnt.starsPoliteness"> <v-icon small color="red">fa-tint</v-icon>
          		</span>
          	<br><br>
          </div>

          <div v-if="cmnt.starsEthic>0">
          	<div class="caption">Etičnost:</div> 
          		<span v-for="n in cmnt.starsEthic"> <v-icon small color="red">fa-tint</v-icon>
          		</span>
          	<br><br>
          </div>

          <div v-if="cmnt.starsStaff>0">
          	<div class="caption">Osoblje:</div> 
          		<span v-for="n in cmnt.starsStaff"> <v-icon small color="red">fa-tint</v-icon>
          		</span>
          	<br><br>
          </div>

        	<div class="caption mb-0 text-xs-right">{{cmnt.author}}, {{getHRDate(cmnt.timestamp)}}</div> 
        </v-card-text>
      </v-card>
      `
})
Vue.component('comment', {
  props: ['cmnt'],
  methods:{
  	getHRDate (date) {
     return moment(date).fromNow();
    }
  },
  template: `
	  <v-card tile hover class="mb-3 blue lighten-5">
        <v-card-text> 
        	<span class="body-2" style="font-style:italic" v-html="cmnt.comment"></span>
        	<hr>

          <div v-if="cmnt.starsExpertize>0" class="caption">
          	Stručnost:<br>
          		<span v-for="n in cmnt.starsExpertize"> <v-icon small>fa-star</v-icon>
          		</span><br>
          </div>

          <div v-if="cmnt.starsPoliteness>0" class="caption">
          	Ljubaznost:<br>
          		<span v-for="n in cmnt.starsPoliteness"> <v-icon small>fa-star</v-icon>
          		</span><br>
          </div>

          <div v-if="cmnt.starsEthic>0" class="caption">
          	Etičnost:<br>
          		<span v-for="n in cmnt.starsEthic"> <v-icon small>fa-star</v-icon>
          		</span><br>
          </div>

          <div v-if="cmnt.starsStaff>0" class="caption">
          	Osoblje:<br> 
          		<span v-for="n in cmnt.starsStaff"> <v-icon small>fa-star</v-icon>
          		</span><br>
          </div>

        	<div class="caption mb-0 text-xs-right">{{cmnt.author}}, {{getHRDate(cmnt.timestamp)}}</div> 
        </v-card-text>
      </v-card>
      `
})
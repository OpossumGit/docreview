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
        	<span class="body-1" v-html="cmnt.comment"></span>
        	<br>
        	Ocjena: 
        		<span v-for="n in cmnt.stars"> <v-icon small color="red">fa-tint</v-icon>
        		</span>
        	<br>
        	<div class="caption mb-0 text-xs-right">{{cmnt.author}}, {{getHRDate(cmnt.timestamp)}}</div> 
        </v-card-text>
      </v-card>
      `
})
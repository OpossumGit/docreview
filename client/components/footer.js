Vue.component('footercomponent', {
  data: () => ({
  	dialogBrowsers: false,
  	}),
  template: `
  	 <v-footer height="auto">
      <v-card
        flat
        tile
        class="primary white--text text-xs-center"
      >
        <v-card-text>
        	Unosom podataka u ovoj aplikaciji pristajete da analiziramo i dijelimo saznanja sadržana u njima. Ne snosimo nikakvu odgovornost za posljedice koje sadržaj može izazvati. Svrha unosa podataka je analiza kvalitete usluge doktora i sakupljanje savjeta što očekivati od pojedinih doktora.
          Ukoliko se ne slažete s ovim uvjetima, ne unosite nikakve podatke.
        </v-card-text>

        <v-card-text>
          &copy;2018 — <strong>TM & <a id="linkNI" href="http://www.nainzulinu.com" color="white">Na inzulinu</a></strong>
        </v-card-text>

        <v-layout justify-end>
	        <v-dialog  v-model="dialogBrowsers" persistent max-width="290">
		      <v-btn slot="activator" color="primary" dark>Podržani preglednici</v-btn>
		      <v-card>
		         <v-container grid-list-md text-xs-center><v-layout row wrap>
	     		 	<v-flex xs6>
	     		 		<v-card color="success" class="white--text">
	          				<v-card-text>
	          					<v-icon color="white">fab fa-chrome</v-icon>
				    			Chrome
	          				</v-card-text>
	        			</v-card>
				    </v-flex>
				    <v-flex xs6>
	     		 		<v-card color="success"  class="white--text">
	          				<v-card-text>
	          					<v-icon color="white">fab fa-firefox</v-icon>
				    			Firefox
	          				</v-card-text>
	        			</v-card>
				    </v-flex>
				    <v-flex xs6>
	     		 		<v-card color="success" class="white--text">
	          				<v-card-text>
	          					<v-icon color="white">fab fa-edge</v-icon>
				    			Edge
	          				</v-card-text>
	        			</v-card>
				    </v-flex>
				    <v-flex xs6>
	     		 		<v-card color="success" class="white--text">
	          				<v-card-text>
	          					<v-icon color="white">fab fa-safari</v-icon>
				    			Safari 10+
	          				</v-card-text>
	        			</v-card>
				    </v-flex>
				    <v-flex xs6>
	     		 		<v-card color="error" class="white--text">
	          				<v-card-text>
	          					<v-icon color="white">fab fa-safari</v-icon>
				    			Safari 9
	          				</v-card-text>
	        			</v-card>
				    </v-flex>
				    <v-flex xs6>
	     		 		<v-card color="error" class="white--text">
	          				<v-card-text>
	          					<v-icon color="white">fab fa-internet-explorer</v-icon>
				    			IE
	          				</v-card-text>
	        			</v-card>
				    </v-flex>
				    <v-flex xs5 offset-xs7>
				    	<v-card-actions>
		          			<v-btn color="primary" flat @click.native="dialogBrowsers = false" >Zatvori</v-btn>
		        		</v-card-actions>
				    </v-flex>

		
				  </v-layout></v-container>
		       
		      </v-card>
		    </v-dialog>
		</v-layout>
     		



      </v-card>
    </v-footer>
    `
  
})
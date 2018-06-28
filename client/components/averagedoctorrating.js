Vue.component('averagedoctorrating', {
  props: ['average'],
  template: `
	  
      <v-container text-xs-center fluid>
        <v-layout wrap justify-space-around> 
          <v-flex v-if="average.avgExpertize" xs6 sm3>
              <div class="caption" style="color:blue">Stručnost:</div> 
              <v-tooltip bottom>
                <v-progress-circular slot="activator" :value="average.avgExpertize*20" :size="70" :width="10" :rotate="-90" color="primary"> {{average.avgExpertize}}</v-progress-circular>
                <span>Prosjek na temelju {{average.countExpertize}} ocjena</span>
            </v-tooltip>
             </v-flex>

          <v-flex v-if="average.avgPoliteness" xs6 sm3>
              <div class="caption" style="color:blue">Ljubaznost:</div> 
              <v-tooltip bottom>
                <v-progress-circular slot="activator" :value="average.avgPoliteness*20" :size="70" :width="10" :rotate="-90" color="primary"> {{average.avgPoliteness}}</v-progress-circular>
                <span>Prosjek na temelju {{average.countPoliteness}} ocjena</span>
            </v-tooltip>
          </v-flex>

          <v-flex v-if="average.avgEthic" xs6 sm3>
            <div class="caption" style="color:blue">Etičnost:</div> 
            <v-tooltip bottom>
              <v-progress-circular slot="activator" :value="average.avgEthic*20" :size="70" :width="10" :rotate="-90" color="primary"> {{average.avgEthic}}</v-progress-circular>
              <span>Prosjek na temelju {{average.countEthic}} ocjena</span>
            </v-tooltip>
          </v-flex>

          
          <v-flex v-if="average.avgStaff" xs6 sm3 slot="activator">
            <div class="caption" style="color:blue">Osoblje:</div> 
            <v-tooltip bottom>
              <v-progress-circular slot="activator" :value="average.avgStaff*20" :size="70" :width="10" :rotate="-90" color="primary"> {{average.avgStaff}}</v-progress-circular>
              <span>Prosjek na temelju {{average.countStaff}} ocjena</span>
            </v-tooltip>
          </v-flex>
            
        </v-layout>
      </v-container>
    
      `
})
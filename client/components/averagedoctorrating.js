Vue.component('averagedoctorrating', {
  props: ['average'],
  template: `
	  
      <v-container text-xs-center fluid>
        <v-layout wrap justify-space-around> 
          <v-flex v-if="average.avgExpertize" xs6 sm3>
              <div class="caption" style="color:blue">Stručnost:</div> 
              <v-progress-circular :value="average.avgExpertize*20" :size="70" :width="10" :rotate="-90" color="primary"> {{average.avgExpertize}}</v-progress-linear>
          </v-flex>

          <v-flex v-if="average.avgPoliteness" xs6 sm3>
              <div class="caption" style="color:blue">Ljubaznost:</div> 
              <v-progress-circular :value="average.avgPoliteness*20" :size="70" :width="10" :rotate="-90" color="primary"> {{average.avgPoliteness}}</v-progress-linear>
          </v-flex>

          <v-flex v-if="average.avgEthic" xs6 sm3>
            <div class="caption" style="color:blue">Etičnost:</div> 
            <v-progress-circular :value="average.avgEthic*20" :size="70" :width="10" :rotate="-90" color="primary"> {{average.avgEthic}}</v-progress-linear>
          </v-flex>

          <v-flex v-if="average.avgStaff" xs6 sm3>
            <div class="caption" style="color:blue">Osoblje:</div> 
            <v-progress-circular :value="average.avgStaff*20" :size="70" :width="10" :rotate="-90" color="primary"> {{average.avgStaff}}</v-progress-linear>
          </v-flex>
        </v-layout>
      </v-container>
    
      `
})
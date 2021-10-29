<template>
<div>
    <b-row  class="border" align-v="center">
        <b-col>
          <div class="mt-4 text-center"><h1>{{timeString}}</h1></div>
        <div class="text-center" style="font-size:55px"><b>{{timeclock}}</b></div>
        </b-col>
    <b-col cols="4" class="border-left">
       <b-row   class="mb-2 mt-4" >
                               <b-col   style="font-size: 1.25rem; height:50px" class="bg-light border shadow text-center ml-5 mb-3" md="9" >
                                  <div class="display">{{current || 'Enter Employee Pin'}}</div>
                               </b-col>
                           </b-row>
                               <b-row
     v-for="(row, n) in list"
    :key="`row${n}`"
    class="text-center center row container-fluid mb-2 mr-4"

  >
    <b-list-group horizontal="md" class="row px-md-2 flex-fill ml-1" >
      <b-list-group-item
        v-for="(item, key) in row"
        :key="`item${key}`"
        button
        class="col mr-1 ml-1 rounded border shadow"
        value={value}
                              >
        <template v-if="item.paynum">
          <div class="text-center" @click="append(item.number)"><h4>{{ item.paynum }}</h4></div>
                       </template>
        <span v-else> {{ item }} </span>
      </b-list-group-item>
    </b-list-group>
      </b-row>
      <b-row>
      </b-row>

       <b-row  class="mb-2 mt-1 mr-5 ml-4" >
           <b-button block size="lg" variant="info">Enter</b-button>
                                               </b-row>

    </b-col>
    <b-col cols="2"></b-col>
    </b-row>

</div>

</template>
<script>
export default {
  name: 'TimeStampHome.vue',
  data: () => ({
    timeString: '',
    timeclock: '',
    stopClock: false,

    list: [
      [
        { paynum: '1', type: 'number', number: '1' },
        { paynum: '2', type: 'number', number: '2' },
        { paynum: '3', type: 'number', number: '3' }
      ],
      [
        { paynum: '4', type: 'number', number: '4' },
        { paynum: '5', type: 'number', number: '5' },
        { paynum: '6', type: 'number', number: '6' }
      ],
      [
        { paynum: '7', type: 'number', number: '7' },
        { paynum: '8', type: 'number', number: '8' },
        { paynum: '9', type: 'number', number: '9' }
      ],
      [
        { paynum: '.', type: 'number', number: '.' },
        { paynum: '0', type: 'number', number: '0' },
        { paynum: 'X', type: 'text', number: 'clear' }
      ]
    ]
  }),
  mounted () {
    this.nowTime();
    this.nowclock();
  },
  methods: {
    nowTime () {
      this.timeString = new Date(Date.now()).toLocaleDateString('en-US',
        { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      if (!this.stopClock) {
        setTimeout(this.nowTime, 285);
      }
    },
    nowclock () {
      this.timeclock = new Date(Date.now()).toLocaleTimeString('en-US');
      if (!this.stopClock) {
        setTimeout(this.nowclock, 285);
      }
    }
  },
  beforeDestroy () {
    this.stopClock = true;
  }
};
</script>

<template>
    <div class="mt-1">
        <b-row>
         <div class="text-left"><b-btn @click="$router.push('/salesgrid')" variant="transparent"><font-awesome-icon size="1x" :icon="['fas', 'home']" /></b-btn></div>
        </b-row>
         <b-card no-body>
    <b-tabs card align="center">
      <b-tab title="Payment" active>
         <b-row>
        <b-col cols="6">
              <b-list-group horizontal="md" class="row rounded flex-fill ">
            <b-list-group-item button class="col-5 rounded border mr-2 shadow" variant="info" cols="1">
              <div class="text-center"><b>SHOW TENDERS</b></div>
                          </b-list-group-item>
              </b-list-group>
        </b-col>
        <b-col class="text-right">
                         <b-list-group horizontal="md" class="row rounded flex-fill ">
            <b-list-group-item button class="col-5 rounded border mr-2 shadow"  variant="info" cols="1">
              <div class="text-center"><b>SPLIT BY COVERS</b></div>
                          </b-list-group-item>
                           <b-list-group-item button class="col-5 rounded border mr-2 shadow" variant="info" cols="1">
              <div class="text-center"><b>SPLIT BY ITEM</b></div>
                          </b-list-group-item>
              </b-list-group>
        </b-col>
            </b-row>
            <b-row class="mt-4 mb-4">
                <b-col class="bg-light border-right shadow"  cols="10" md="4">
                    <div class="mt-2">AMOUNT DUE</div>
                    <div ><h3>0.00</h3></div>
                    <div class="mt-3">BASKET DISCOUNT</div>
                    <div ><h4>0.00</h4></div>
                    <div class="mt-3">CUSTOMER DISCOUNT</div>
                    <div ><h4>0.00</h4></div>
                    <div class="mt-3">CUSTOMER POINT SPEND</div>
                    <div><h4>0.00</h4></div>
                     </b-col>
                       <b-col>
                           <b-row>
                               <b-col style="font-size: 2.25rem;" class="bg-light border shadow text-right ml-3 mb-3" md="11" >
                                  <div class="display">{{current || '0.00'}}</div>
                               </b-col>
                           </b-row>
                               <b-row
     v-for="(row, n) in list"
    :key="`row${n}`"
    class="text-center center row container-fluid mb-2"

  >
    <b-list-group horizontal="md" class="row px-md-6 flex-fill ml-1" >
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
                </b-col>
            </b-row>
                <b-row>
                <b-col cols="8">
                         <b-list-group horizontal="md" class="row rounded flex-fill ">
            <b-list-group-item button class="col-5 rounded border mr-2 shadow" variant="info" cols="1">
              <div class="text-center"><b>POINTS [0/0.00]</b></div>
                          </b-list-group-item>

              <b-list-group-item v-b-modal.ChangeDue button class="col-3 rounded border mr-2 shadow" variant="info" cols="1">
              <div class="text-center"><b>CASH</b></div>
                          </b-list-group-item>

              <b-list-group-item button class="col-3 rounded border mr-2 shadow" variant="info" cols="1">
              <div class="text-center"><b>CARD</b></div>
                          </b-list-group-item>
              </b-list-group>
                </b-col>
                       <b-col>
                </b-col>
            </b-row>

              </b-tab>
      <b-tab title="Discount">
        <b-card-text>Feature Not Yet Available</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>
<script>
export default {
  name: 'SalesGridPay',
  methods: {
    append (number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      /* this will check if the number is 150  -this need tos change */
      if (number === 'clear') {
        /* if it is actually 150 , it will clear */
        this.current = '';
      } else {
        /* if its not it will print the number */
        this.current = `${this.current}${number}`;
      }
    },
    clear () {
      this.current = '';
    }
  },
  data: () => ({
    previous: null,
    current: '',
    operator: null,
    operatorClicked: false,

    list: [
      [
        { paynum: '1', type: 'number', number: '1' },
        { paynum: '2', type: 'number', number: '2' },
        { paynum: '3', type: 'number', number: '3' },
        { paynum: '$5', type: 'USD', number: '5' }
      ],
      [
        { paynum: '4', type: 'number', number: '4' },
        { paynum: '5', type: 'number', number: '5' },
        { paynum: '6', type: 'number', number: '6' },
        { paynum: '$10', type: 'USD', number: '10' }
      ],
      [
        { paynum: '7', type: 'number', number: '7' },
        { paynum: '8', type: 'number', number: '8' },
        { paynum: '9', type: 'number', number: '9' },
        { paynum: '$20', type: 'USD', number: '20' }
      ],
      [
        { paynum: '.', type: 'number', number: '.' },
        { paynum: '0', type: 'number', number: '0' },
        { paynum: 'X', type: 'text', number: 'clear' },
        { paynum: '$50', type: 'USD', number: '50' }
      ]
    ],
    numFormatted: 0.00
  })
};
</script>

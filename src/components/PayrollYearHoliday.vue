<template>
<b-modal id="PayrollYearHoliday" size="lg" centered title="Payroll Year & Holidays">
  <b-row class='mb-2'>
   <b-col class='text-right' cols="4"> Year</b-col> <!---Drop down--->
    <b-col cols="4"><b-input placeholder="2021"></b-input></b-col> <!---Drop down--->
  </b-row>
       <div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Pay Cycle Start Dates" active>
        <b-card-text>
          <b-row class="mb-2">
            <b-col class="text-center">
             <h6> Paycycle in Use</h6>
            </b-col>

            <b-col class="text-center">
              <h6>First pay date in year:</h6>
            </b-col>

            <b-col class="text-center">
             <h6> # of Cycles in year</h6>
            </b-col>
          </b-row>
          <!---Row 1--->
                 <b-row class="mb-2">
            <b-col>
                <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
     Monthly
    </b-form-checkbox>
            </b-col>

            <b-col>
               <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </b-col>

            <b-col>
              <b-input placeholder="12"/>
            </b-col>
          </b-row>
              <!---Row 2--->
                  <!---Row 1--->
                 <b-row class="mb-2">
            <b-col>
                <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
     Fort Nightly
    </b-form-checkbox>
            </b-col>

            <b-col>
               <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </b-col>

            <b-col>
              <b-input placeholder="26"/>
            </b-col>
          </b-row>
                   <!---Row 3--->
       <!---Row 1--->
                 <b-row class="mb-2">
            <b-col>
                <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
     Weekly
    </b-form-checkbox>
            </b-col>

            <b-col>
               <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </b-col>

            <b-col>
              <b-input placeholder="52"/>
            </b-col>
          </b-row>
                   <!---Row 4--->
         <!---Row 1--->
                 <b-row class="mb-2">
            <b-col>
                <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
     Bi-Monthly
    </b-form-checkbox>
            </b-col>

            <b-col>
               <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </b-col>

            <b-col>
              <b-input placeholder="24"/>
            </b-col>
          </b-row>
             </b-card-text>
      </b-tab>
      <!---TAB 2--->
      <b-tab title="2021 Holiday">
        <b-card-text>
            <b-row>
                  <b-col>
              <b-table striped hover :items="items" :fields="fields" :small="true"
                    class="Mx-4"
                    >

        </b-table>
    </b-col>

    <b-col md="auto">
      <b-calendar class="mb-1" v-model="value" @context="onContext" locale="en-US"></b-calendar>
        <div class="text-right"> <b-btn variant="transparent">Add Other Holiday</b-btn></div>
    </b-col>
  </b-row>

        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
 </b-modal>
</template>

<script>

export default {
  name: 'PayrollYearHoliday',
  data: () => ({
    Year: '2021',
    value: '',
    context: null,
    status: [],
    items: [
      { Holiday: 'New Years Day', Date: '' },
      { Holiday: 'Ash Wednesday', Date: '' },
      { Holiday: 'Good Friday', Date: '' },
      { Holiday: 'Easter Monday', Date: '' },
      { Holiday: 'Labour Day', Date: '' },
      { Holiday: 'Emancipation Day', Date: '' },
      { Holiday: 'Independence Day', Date: '' },
      { Holiday: 'Heroes Day', Date: '' },
      { Holiday: 'Christmas Day', Date: '' },
      { Holiday: 'Boxing Day', Date: '' }
    ],
    fields: [
      'Holiday', 'Date'
    ]
  }),
  methods: {
    onContext (ctx) {
      this.context = ctx;
    }
  }
};
</script>
<style scoped>

</style>

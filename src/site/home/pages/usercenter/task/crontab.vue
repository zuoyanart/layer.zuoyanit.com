<style lang="less" scoped>
#changeContab {
  margin: 20px;
  .language {
    position: absolute;
    right: 25px;
    z-index: 1;
  }
  .el-tabs {
    box-shadow: none;
  }
  .tabBody {
    .el-row {
      margin: 10px 0;
      .long {
        .el-select {
          width: 350px;
        }
      }
      .el-input-number {
        width: 110px;
      }
    }
  }
  .bottom {
    width: 100%;
    text-align: center;
    margin-top: 15px;
    position: relative;
    .value {
      font-size: 18px;
      vertical-align: middle;
    }
  }
}
</style>
<template>
  <div id="changeContab">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i> 秒
        </span>
        <div class="tabBody">
          <el-row>
            <el-radio v-model="second.cronEvery" label="1">每一秒</el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="second.cronEvery" label="2">
              每隔
              <el-input-number size="small" v-model="second.incrementIncrement" :min="1" :max="60"></el-input-number>秒执行
              <!-- ，从<el-input-number size="small" v-model="second.incrementStart" :min="0" :max="59"></el-input-number>秒开始 -->
            </el-radio>
          </el-row>
          <el-row>
            <el-radio class="long" v-model="second.cronEvery" label="3">
              具体秒数(可多选)
              <el-select size="small" multiple v-model="second.specificSpecific">
                <el-option v-for="val in 60" :key="val" :value="val-1">{{val-1}}</el-option>
              </el-select>
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="second.cronEvery" label="4">
              周期从
              <el-input-number size="small" v-model="second.rangeStart" :min="1" :max="60"></el-input-number>到
              <el-input-number size="small" v-model="second.rangeEnd" :min="0" :max="59"></el-input-number>秒
            </el-radio>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i>
          分
        </span>
        <div class="tabBody">
          <el-row>
            <el-radio v-model="minute.cronEvery" label="1">每一分钟</el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="minute.cronEvery" label="2">
              每隔
              <el-input-number size="small" v-model="minute.incrementIncrement" :min="1" :max="60"></el-input-number>分执行
              <!-- ，从<el-input-number size="small" v-model="minute.incrementStart" :min="0" :max="59"></el-input-number>分开始 -->
            </el-radio>
          </el-row>
          <el-row>
            <el-radio class="long" v-model="minute.cronEvery" label="3">
              具体分钟数(可多选)
              <el-select size="small" multiple v-model="minute.specificSpecific">
                <el-option v-for="val in 60" :key="val" :value="val-1">{{val-1}}</el-option>
              </el-select>
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="minute.cronEvery" label="4">
              周期从
              <el-input-number size="small" v-model="minute.rangeStart" :min="1" :max="60"></el-input-number>到
              <el-input-number size="small" v-model="minute.rangeEnd" :min="0" :max="59"></el-input-number>分
            </el-radio>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i>
          时
        </span>
        <div class="tabBody">
          <el-row>
            <el-radio v-model="hour.cronEvery" label="1">每一小时</el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="hour.cronEvery" label="2">
              每隔
              <el-input-number size="small" v-model="hour.incrementIncrement" :min="0" :max="23"></el-input-number>小时执行
              <!-- 从<el-input-number size="small" v-model="hour.incrementStart" :min="0" :max="23"></el-input-number>小时开始 -->
            </el-radio>
          </el-row>
          <el-row>
            <el-radio class="long" v-model="hour.cronEvery" label="3">
              具体小时数(可多选)
              <el-select size="small" multiple v-model="hour.specificSpecific">
                <el-option v-for="val in 24" :key="val" :value="val-1">{{val-1}}</el-option>
              </el-select>
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="hour.cronEvery" label="4">
              周期从
              <el-input-number size="small" v-model="hour.rangeStart" :min="0" :max="23"></el-input-number>到
              <el-input-number size="small" v-model="hour.rangeEnd" :min="0" :max="23"></el-input-number>小时
            </el-radio>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i>
          天
        </span>
        <div class="tabBody">
          <el-row>
            <el-radio v-model="day.cronEvery" label="1">每一天</el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="day.cronEvery" label="2">
              每隔
              <el-input-number size="small" v-model="week.incrementIncrement" :min="1" :max="7"></el-input-number>周执行
              <!-- ，从<el-select size="small" v-model="week.incrementStart">
                <el-option v-for="val in 7" :key="val" :label="Week[val-1]" :value="val"></el-option>
              </el-select>开始-->
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="day.cronEvery" label="3">
              每隔
              <el-input-number size="small" v-model="day.incrementIncrement" :min="1" :max="31"></el-input-number>天执行
              <!-- ，从<el-input-number size="small" v-model="day.incrementStart" :min="1" :max="31"></el-input-number>天开始 -->
            </el-radio>
          </el-row>
          <el-row>
            <el-radio class="long" v-model="day.cronEvery" label="4">
              具体星期几(可多选)
              <el-select size="small" multiple v-model="week.specificSpecific">
                <el-option
                  v-for="val in 7"
                  :key="val"
                  :label="Week[val-1]"
                  :value="['SUN','MON','TUE','WED','THU','FRI','SAT'][val-1]"
                ></el-option>
              </el-select>
            </el-radio>
          </el-row>
          <el-row>
            <el-radio class="long" v-model="day.cronEvery" label="5">
              具体天数(可多选)
              <el-select size="small" multiple v-model="day.specificSpecific">
                <el-option v-for="val in 31" :key="val" :value="val">{{val}}</el-option>
              </el-select>
            </el-radio>
          </el-row>
          <!-- <el-row>
            <el-radio v-model="day.cronEvery" label="6">{{text.Day.lastDay}}</el-radio>
          </el-row>-->
          <!-- <el-row>
            <el-radio v-model="day.cronEvery" label="7">{{text.Day.lastWeekday}}</el-radio>
          </el-row>-->
          <!-- <el-row>
            <el-radio v-model="day.cronEvery" label="8">
              {{text.Day.lastWeek[0]}}
              <el-select size="small" v-model="day.cronLastSpecificDomDay">
                <el-option v-for="val in 7" :key="val" :label="text.Week[val-1]" :value="val"></el-option>
              </el-select>
              {{text.Day.lastWeek[1]||''}}
            </el-radio>
          </el-row>-->
          <!-- <el-row>
            <el-radio v-model="day.cronEvery" label="9">
              <el-input-number size="small" v-model="day.cronDaysBeforeEomMinus" :min="1" :max="31"></el-input-number>
              {{text.Day.beforeEndMonth[0]}}
            </el-radio>
          </el-row>-->
          <!-- <el-row>
            <el-radio v-model="day.cronEvery" label="10">
              {{text.Day.nearestWeekday[0]}}
              <el-input-number size="small" v-model="day.cronDaysNearestWeekday" :min="1" :max="31"></el-input-number>
              {{text.Day.nearestWeekday[1]}}
            </el-radio>
          </el-row>-->
          <!-- <el-row>
            <el-radio v-model="day.cronEvery" label="11">
              {{text.Day.someWeekday[0]}}
              <el-input-number size="small" v-model="week.cronNthDayNth" :min="1" :max="5"></el-input-number>
              <el-select size="small" v-model="week.cronNthDayDay">
                <el-option v-for="val in 7" :key="val" :label="text.Week[val-1]" :value="val"></el-option>
              </el-select>
              {{text.Day.someWeekday[1]}}
            </el-radio>
          </el-row>-->
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i>
          月
        </span>
        <div class="tabBody">
          <el-row>
            <el-radio v-model="month.cronEvery" label="1">每一月</el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="month.cronEvery" label="2">
              每隔
              <el-input-number size="small" v-model="month.incrementIncrement" :min="0" :max="12"></el-input-number>月执行
              <!-- 从<el-input-number size="small" v-model="month.incrementStart" :min="0" :max="12"></el-input-number>月开始 -->
            </el-radio>
          </el-row>
          <el-row>
            <el-radio class="long" v-model="month.cronEvery" label="3">
              具体月数(可多选)
              <el-select size="small" multiple v-model="month.specificSpecific">
                <el-option v-for="val in 12" :key="val" :label="val" :value="val"></el-option>
              </el-select>
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="month.cronEvery" label="4">
              从
              <el-input-number size="small" v-model="month.rangeStart" :min="1" :max="12"></el-input-number>到
              <el-input-number size="small" v-model="month.rangeEnd" :min="1" :max="12"></el-input-number>月之间的每个月
            </el-radio>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="bottom">
      <span class="value">{{this.cron}}</span>
      <el-button type="primary" @click="change">保存</el-button>
      <el-button @click="close">关闭</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: '',
    layerid: ''
  },
  data() {
    return {
      Week: ['天', '一', '二', '三', '四', '五', '六'].map(val => '星期' + val),
      second: {
        cronEvery: '',
        incrementStart: '*',
        incrementIncrement: '5',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: [],
      },
      minute: {
        cronEvery: '',
        incrementStart: '*',
        incrementIncrement: '5',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: [],
      },
      hour: {
        cronEvery: '',
        incrementStart: '*',
        incrementIncrement: '5',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: [],
      },
      day: {
        cronEvery: '',
        incrementStart: '*',
        incrementIncrement: '1',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: [],
        cronLastSpecificDomDay: 1,
        cronDaysBeforeEomMinus: '',
        cronDaysNearestWeekday: '',
      },
      week: {
        cronEvery: '',
        incrementStart: '*',
        incrementIncrement: '1',
        specificSpecific: [],
        cronNthDayDay: 1,
        cronNthDayNth: '1',
      },
      month: {
        cronEvery: '',
        incrementStart: '*',
        incrementIncrement: '5',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: [],
      },
      year: {
        cronEvery: '',
        incrementStart: '2017',
        incrementIncrement: '1',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: [],
      },
      output: {
        second: '',
        minute: '',
        hour: '',
        day: '',
        month: '',
        Week: '',
        year: '',
      }
    }
  },
  watch: {
    data() {
      this.rest(this.$data);
    }
  },
  computed: {
    text() {
      // return Language[this.i18n || 'cn']
    },
    secondsText() {
      let seconds = '';
      let cronEvery = this.second.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
          seconds = '*';
          break;
        case '2':
          seconds = this.second.incrementStart + '/' + this.second.incrementIncrement;
          break;
        case '3':
          this.second.specificSpecific.map(val => {
            seconds += val + ','
          });
          seconds = seconds.slice(0, -1);
          break;
        case '4':
          seconds = this.second.rangeStart + '-' + this.second.rangeEnd;
          break;
      }
      return seconds;
    },
    minutesText() {
      let minutes = '';
      let cronEvery = this.minute.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
          minutes = '*';
          break;
        case '2':
          minutes = this.minute.incrementStart + '/' + this.minute.incrementIncrement;
          break;
        case '3':
          this.minute.specificSpecific.map(val => {
            minutes += val + ','
          });
          minutes = minutes.slice(0, -1);
          break;
        case '4':
          minutes = this.minute.rangeStart + '-' + this.minute.rangeEnd;
          break;
      }
      return minutes;
    },
    hoursText() {
      let hours = '';
      let cronEvery = this.hour.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
          hours = '*';
          break;
        case '2':
          hours = this.hour.incrementStart + '/' + this.hour.incrementIncrement;
          break;
        case '3':
          this.hour.specificSpecific.map(val => {
            hours += val + ','
          });
          hours = hours.slice(0, -1);
          break;
        case '4':
          hours = this.hour.rangeStart + '-' + this.hour.rangeEnd;
          break;
      }
      return hours;
    },
    daysText() {
      let days = '';
      let cronEvery = this.day.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
          break;
        case '2':
        case '4':
        case '11':
          days = '?';
          break;
        case '3':
          days = this.day.incrementStart + '/' + this.day.incrementIncrement;
          break;
        case '5':
          this.day.specificSpecific.map(val => {
            days += val + ','
          });
          days = days.slice(0, -1);
          break;
        case '6':
          days = "L";
          break;
        case '7':
          days = "LW";
          break;
        case '8':
          days = this.day.cronLastSpecificDomDay + 'L';
          break;
        case '9':
          days = 'L-' + this.day.cronDaysBeforeEomMinus;
          break;
        case '10':
          days = this.day.cronDaysNearestWeekday + "W";
          break
      }
      return days;
    },
    weeksText() {
      let weeks = '';
      let cronEvery = this.day.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
        case '3':
        case '5':
          weeks = '?';
          break;
        case '2':
          weeks = this.week.incrementStart + '/' + this.week.incrementIncrement;
          break;
        case '4':
          this.week.specificSpecific.map(val => {
            weeks += val + ','
          });
          weeks = weeks.slice(0, -1);
          break;
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
          weeks = "?";
          break;
        case '11':
          weeks = this.week.cronNthDayDay + "#" + this.week.cronNthDayNth;
          break;
      }
      return weeks;
    },
    monthsText() {
      let months = '';
      let cronEvery = this.month.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
          months = '*';
          break;
        case '2':
          months = this.month.incrementStart + '/' + this.month.incrementIncrement;
          break;
        case '3':
          this.month.specificSpecific.map(val => {
            months += val + ','
          });
          months = months.slice(0, -1);
          break;
        case '4':
          months = this.month.rangeStart + '-' + this.month.rangeEnd;
          break;
      }
      return months;
    },
    yearsText() {
      let years = '';
      let cronEvery = this.year.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
          years = '*';
          break;
        case '2':
          years = this.year.incrementStart + '/' + this.year.incrementIncrement;
          break;
        case '3':
          this.year.specificSpecific.map(val => {
            years += val + ','
          });
          years = years.slice(0, -1);
          break;
        case '4':
          years = this.year.rangeStart + '-' + this.year.rangeEnd;
          break;
      }
      return years;
    },
    cron() {
      return `${this.secondsText || '*'} ${this.minutesText || '*'} ${this.hoursText || '*'} ${this.daysText || '*'} ${this.monthsText || '*'} ${this.weeksText || '?'}`
    },
  },
  methods: {
    getValue() {
      return this.cron;
    },
    change() {
      this.$parent.$emit('change', this.cron);
      this.close();
    },
    close() {
      this.$layer.close(this.layerid);
    },
    rest(data) {
      for (let i in data) {
        if (data[i] instanceof Object) {
          this.rest(data[i])
        } else {
          switch (typeof data[i]) {
            case 'object': data[i] = []; break;
            case 'string': data[i] = ''; break;
          }
        }
      }
    }
  },
  mounted() {
  }
}</script>
<template>
  <div class="week-task-dashbaord">
    <div class="weeky-tasks">
      <div class="left-5">
        <div class="text-wrapper-9">Weekly Tasks</div>
        <div class="descripitive-points-2" />
      </div>
      <div class="descripitive-points-3">
        <div class="text-wrapper-10">Bonus! - 10 points</div>
        <div class="text-wrapper-11">Complete all weekly Tasks!</div>
      </div>
    </div>
    <div class="descripitive-points-wrapper">
      <div class="descripitive-points-4">
        <div class="text-wrapper-12">50 points</div>
        <p class="text-wrapper-13">Recycle 20 Aluminum Cans at the nearest X-Kiosk</p>
      </div>
    </div>
    <div class="descripitive-points-wrapper">
      <div class="descripitive-points-4">
        <div class="text-wrapper-12">45 points</div>
        <p class="text-wrapper-13">Recycle 20 Plastic Bags at the nearest X-Kiosk</p>
      </div>
    </div>
    <div class="descripitive-points-wrapper">
      <div class="descripitive-points-4">
        <div class="text-wrapper-12">40 points</div>
        <p class="text-wrapper-13">Travel 1 km by cycle.</p>
      </div>
    </div>
    <div class="descripitive-points-wrapper">
      <div class="descripitive-points-4">
        <div class="text-wrapper-12">20 points</div>
        <div class="text-wrapper-13">Charge your Electric Vehicle</div>
      </div>
    </div>
    <div class="descripitive-points-wrapper">
      <div class="descripitive-points-4">
        <div class="text-wrapper-12">15 points</div>
        <p class="text-wrapper-13">Claim Daily Bonus for 7 Days</p>
      </div>
    </div>
    <div class="weeky-tasks-2">
      <div class="descripitive-points-4">
        <div class="text-wrapper-12">Progress: 4/5</div>
      </div>
      <Bars value="two" />
    </div>
  </div>
</template>

<script>
import Bars from "../../../components/Bars.vue";

export default {
  name: "WeekTaskDashbaord",
  components: {
    Bars,
  },
};
</script>

<style>
.week-task-dashbaord {
  align-items: center;
  background-color: #ffffff;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  left: 25px;
  padding: 9px 6px;
  position: absolute;
  top: 317px;
  width: 379px;
}

.week-task-dashbaord .weeky-tasks {
  align-items: center;
  align-self: stretch;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px -4px 4px #00000040, 0px 4px 4px #00000040;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  padding: 10px 4px;
  position: relative;
  width: 100%;
}

.week-task-dashbaord .left-5 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 6px;
  position: relative;
}

.week-task-dashbaord .text-wrapper-9 {
  color: #000000;
  font-family: "Montserrat", Helvetica;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.week-task-dashbaord .descripitive-points-2 {
  flex: 0 0 auto;
  margin-right: -42px;
  position: relative;
}

.week-task-dashbaord .descripitive-points-3 {
  align-items: flex-end;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 0px 1px;
  position: relative;
}

.week-task-dashbaord .text-wrapper-10 {
  color: #000000;
  font-family: "Montserrat", Helvetica;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

.week-task-dashbaord .text-wrapper-11 {
  color: #000000;
  font-family: "Montserrat", Helvetica;
  font-size: 6px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

.week-task-dashbaord .descripitive-points-wrapper {
  align-items: center;
  align-self: stretch;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0px -4px 4px #00000040, 0px 4px 4px #00000040;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  padding: 4px;
  position: relative;
  width: 100%;
}

.week-task-dashbaord .descripitive-points-4 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 0px 1px;
  position: relative;
}

.week-task-dashbaord .text-wrapper-12 {
  color: #000000;
  font-family: "Montserrat", Helvetica;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.week-task-dashbaord .text-wrapper-13 {
  color: #000000;
  font-family: "Montserrat", Helvetica;
  font-size: 6px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.week-task-dashbaord .weeky-tasks-2 {
  align-items: center;
  align-self: stretch;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0px -4px 4px #00000040, 0px 4px 4px #00000040;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  padding: 4px;
  position: relative;
  width: 100%;
}
</style>
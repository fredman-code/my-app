<template>
  <div class="daily-task">
    <div class="left-2">
      <div class="text-wrapper-4">Daily Task:</div>
      <div class="descripitive-points">
        <div class="text-wrapper-5">20 points</div>
        <p class="p">Recycle 5 Plastic Bags at the nearest X-Kiosk</p>
      </div>
    </div>
    <div class="redeem-2">
      <div class="text-wrapper-6">Redeem</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DailyTask",
};
</script>

<style>
.daily-task {
  align-items: center;
  background-color: #32cd32;
  border-radius: 13px;
  display: flex;
  gap: 10px;
  left: 25px;
  padding: 10px 4px;
  position: absolute;
  top: 258px;
  width: 379px;
}

.daily-task .left-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
  position: relative;
}

.daily-task .text-wrapper-4 {
  color: #000000;
  font-family: "Montserrat", Helvetica;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.daily-task .descripitive-points {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 0px 1px;
  position: relative;
}

.daily-task .text-wrapper-5 {
  color: #000000;
  font-family: "Montserrat", Helvetica;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.daily-task .p {
  color: #000000;
  font-family: "Montserrat", Helvetica;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.daily-task .redeem-2 {
  align-items: center;
  align-self: stretch;
  background-color: #ffc107;
  border-radius: 7px;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 10px;
  justify-content: center;
  padding: 3px 7px;
  position: relative;
}

.daily-task .text-wrapper-6 {
  color: #ffffff;
  font-family: "Montserrat", Helvetica;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>

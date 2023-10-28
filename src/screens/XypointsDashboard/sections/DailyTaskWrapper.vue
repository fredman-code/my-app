<template>
  <div class="daily-task-wrapper">
    <div class="left-3">
      <div class="text-wrapper-7">Redeem your points</div>
    </div>
    <div class="redeem-3">
      <div class="text-wrapper-7">Go to the Shop</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DailyTaskWrapper",
};
</script>

<style>
.daily-task-wrapper {
  align-items: center;
  background-color: #32cd32;
  border-radius: 13px;
  display: flex;
  justify-content: space-between;
  left: 25px;
  padding: 10px 13px;
  position: absolute;
  top: 573px;
  width: 379px;
}

.daily-task-wrapper .left-3 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
  position: relative;
}

.daily-task-wrapper .text-wrapper-7 {
  color: #ffffff;
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

.daily-task-wrapper .redeem-3 {
  align-items: center;
  align-self: stretch;
  background-color: #ffc107;
  border-radius: 7px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 3px 7px;
  position: relative;
}
</style>

<template>
  <div class="div-wrapper">
    <div class="left-4">
      <div class="text-wrapper-8">Earn points by Recycling!</div>
    </div>
    <div class="redeem-4">
      <div class="text-wrapper-8">Open Calculator</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivWrapper",
};
</script>

<style>
.div-wrapper {
  align-items: center;
  background-color: #32cd32;
  border-radius: 13px;
  display: flex;
  justify-content: space-between;
  left: 25px;
  padding: 10px 13px;
  position: absolute;
  top: 630px;
  width: 379px;
}

.div-wrapper .left-4 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
  position: relative;
}

.div-wrapper .text-wrapper-8 {
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

.div-wrapper .redeem-4 {
  align-items: center;
  align-self: stretch;
  background-color: #ffc107;
  border-radius: 7px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 3px 2px;
  position: relative;
}
</style>

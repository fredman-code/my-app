<template>
  <div class="overlap">
    <div class="group">
      <div class="overlap-group-2">
        <div class="ellipse" />
        <img
          class="element"
          alt="Element"
          src="/img/34d5dfea-7f5a-4b99-b5e2-4c2e3d2e3686-removebg-preview-1.png"
        />
      </div>
    </div>
    <div class="daily-task-2">
      <div class="left">
        <div class="text-wrapper">Find nearest Xiosks</div>
      </div>
      <div class="redeem">
        <div class="text-wrapper">Open Locator</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overlap",
};
</script>

<style>
.overlap {
  height: 490px;
  left: -5px;
  position: absolute;
  top: 687px;
  width: 440px;
}

.overlap .group {
  height: 447px;
  left: 0;
  position: absolute;
  top: 43px;
  width: 440px;
}

.overlap .overlap-group-2 {
  height: 447px;
  position: relative;
}

.overlap .ellipse {
  background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(0, 255, 56.1, 0) 100%);
  border-radius: 220.21px;
  height: 440px;
  left: 0;
  position: absolute;
  top: 7px;
  width: 440px;
}

.overlap .element {
  height: 202px;
  left: 40px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 359px;
}

.overlap .daily-task-2 {
  align-items: center;
  background-color: #32cd32;
  border-radius: 13px;
  display: flex;
  justify-content: space-between;
  left: 30px;
  padding: 10px 13px;
  position: absolute;
  top: 0;
  width: 379px;
}

.overlap .left {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
  position: relative;
}

.overlap .text-wrapper {
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

.overlap .redeem {
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

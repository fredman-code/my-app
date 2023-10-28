<template>
  <div class="streak">
    <img
      class="pngtree-fire-logo"
      alt="Pngtree fire logo"
      src="/img/pngtree-fire-logo-icon-design-template-vector-png-image-705402-r.png"
    />
    <div class="text-wrapper-14">5 Day Streak!</div>
  </div>
</template>

<script>
export default {
  name: "Streak",
};
</script>

<style>
.streak {
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(255, 0, 0, 0.7) 0%,
    rgba(250, 146, 31, 0.7) 50%,
    rgba(251, 221, 38, 0.7) 100%
  );
  display: flex;
  height: 69px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 158px;
  width: 430px;
}

.streak .pngtree-fire-logo {
  height: 83px;
  margin-bottom: -7px;
  margin-top: -7px;
  object-fit: cover;
  position: relative;
  width: 83px;
}

.streak .text-wrapper-14 {
  color: #ffffff;
  font-family: "Montserrat", Helvetica;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}
</style>

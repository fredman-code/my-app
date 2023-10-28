<template>
  <div class="bars">
    <div :class="['rectangle', value]" />
    <div :class="['div', 'value-' + value]" />
    <div :class="['rectangle-2', 'value-0-' + value]" />
    <div :class="['rectangle-3', 'value-1-' + value]" />
    <div :class="['rectangle-4', 'value-2-' + value]" />
  </div>
</template>

<script>
export default {
  name: "Bars",
  props: {
    value: {
      type: String,
      validator: function (value) {
        return ["zero", "two", "three", "one", "four", "five"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style>
.bars {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 3px 0px;
  position: relative;
  width: 242px;
}

.bars .rectangle {
  border-radius: 19px;
  height: 8px;
  position: relative;
  width: 46px;
}

.bars .div {
  border-radius: 19px;
  height: 8px;
  position: relative;
  width: 46px;
}

.bars .rectangle-2 {
  border-radius: 19px;
  height: 8px;
  position: relative;
  width: 46px;
}

.bars .rectangle-3 {
  border-radius: 19px;
  height: 8px;
  position: relative;
  width: 46px;
}

.bars .rectangle-4 {
  border-radius: 19px;
  height: 8px;
  position: relative;
  width: 46px;
}

.bars .five {
  background-color: #00b2ff;
}

.bars .one {
  background-color: #00b2ff;
}

.bars .zero {
  background-color: #a4a4a4;
}

.bars .three {
  background-color: #00b2ff;
}

.bars .four {
  background-color: #00b2ff;
}

.bars .two {
  background-color: #00b2ff;
}

.bars .value-five {
  background-color: #00b2ff;
}

.bars .value-one {
  background-color: #a4a4a4;
}

.bars .value-zero {
  background-color: #a4a4a4;
}

.bars .value-three {
  background-color: #00b2ff;
}

.bars .value-four {
  background-color: #00b2ff;
}

.bars .value-two {
  background-color: #00b2ff;
}

.bars .value-0-five {
  background-color: #00b2ff;
}

.bars .value-0-one {
  background-color: #a4a4a4;
}

.bars .value-0-zero {
  background-color: #a4a4a4;
}

.bars .value-0-three {
  background-color: #00b2ff;
}

.bars .value-0-four {
  background-color: #00b2ff;
}

.bars .value-0-two {
  background-color: #a4a4a4;
}

.bars .value-1-five {
  background-color: #00b2ff;
}

.bars .value-1-one {
  background-color: #a4a4a4;
}

.bars .value-1-zero {
  background-color: #a4a4a4;
}

.bars .value-1-three {
  background-color: #a4a4a4;
}

.bars .value-1-four {
  background-color: #00b2ff;
}

.bars .value-1-two {
  background-color: #a4a4a4;
}

.bars .value-2-five {
  background-color: #00b2ff;
}

.bars .value-2-one {
  background-color: #a4a4a4;
}

.bars .value-2-zero {
  background-color: #a4a4a4;
}

.bars .value-2-three {
  background-color: #a4a4a4;
}

.bars .value-2-four {
  background-color: #a4a4a4;
}

.bars .value-2-two {
  background-color: #a4a4a4;
}
</style>

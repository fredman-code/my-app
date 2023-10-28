<template>
  <div class="xypoints-dashboard">
    <div class="div-2">
      <Overlap />
      <OverlapGroup />
      <DailyTask />
      <DailyTaskWrapper />
      <DivWrapper />
      <WeekTaskDashbaord />
      <Streak />
    </div>
  </div>
</template>

<script>
import Overlap from "./XypointsDashboard/sections/Overlap.vue";
import OverlapGroup from "./XypointsDashboard/sections/OverlapGroup.vue";
import DailyTask from "./XypointsDashboard/sections/DailyTask.vue";
import DailyTaskWrapper from "./XypointsDashboard/sections/DailyTaskWrapper.vue";
import DivWrapper from "./XypointsDashboard/sections/DivWrapper.vue";
import WeekTaskDashbaord from "./XypointsDashboard/sections/WeekTaskDashbaord.vue";
import Streak from "./XypointsDashboard/sections/Streak.vue";

export default {
  name: "XypointsDashboard",
  components: {
    Overlap,
    OverlapGroup,
    DailyTask,
    DailyTaskWrapper,
    DivWrapper,
    WeekTaskDashbaord,
    Streak,
  },
};
</script>

<style>
.xypoints-dashboard {
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.xypoints-dashboard .div-2 {
  background-color: #000000;
  height: 932px;
  overflow: hidden;
  position: relative;
  width: 430px;
}
</style>
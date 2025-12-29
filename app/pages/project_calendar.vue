<template>
  <v-container style="height: 90vh">
    <v-toolbar>
      <v-btn class="ma-2" variant="text" icon @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" variant="text" icon @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-toolbar>
    <v-calendar
      ref="calendar"
      v-model="value"
      :events="events"
      type="month"
      event-color="color"
      event-name="name"
      event-overlap-mode="stack"
      :event-overlap-threshold="999"
    ></v-calendar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    value: "",
    events: [
      {
        name: "Project 1",
        start: "2025-12-05",
        end: "2025-12-10",
        category: "Work",
        color: "blue",
      },
      {
        name: "Project 2",
        start: "2025-12-11",
        end: "2025-12-21",
        category: "Work",
        color: "green",
      },
      {
        name: "Meeting",
        start: "2025-12-11",
        end: "2025-12-11",
        category: "Work",
        color: "red",
      },
    ],
  }),
};
</script>

<style></style>

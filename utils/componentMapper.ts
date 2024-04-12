import type { Component } from 'vue'
import NoComponent from "@/components/NoComponent.vue";
import Hero from "@/components/Hero.vue";
import ScheduleOverview from "@/components/ScheduleOverview.vue"
import Text from "@/components/Text.vue"

type Mapping = {
  [name: string]: Component
}

export const mapping: Mapping = { Hero, ScheduleOverview, Text };

export function getComponentForName(name: string) {
  return mapping[name] ?? NoComponent
}
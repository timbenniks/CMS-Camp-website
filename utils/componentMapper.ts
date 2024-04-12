import type { Component } from 'vue'
import NoComponent from "@/components/NoComponent.vue";
import Hero from "@/components/Hero.vue";
import ScheduleOverview from "@/components/ScheduleOverview.vue"
import Text from "@/components/Text.vue"
import TextMedia from "@/components/TextMedia.vue"

type Mapping = {
  [name: string]: Component
}

export const mapping: Mapping = { Hero, ScheduleOverview, Text, TextMedia };

export function getComponentForName(name: string) {
  return mapping[name] ?? NoComponent
}
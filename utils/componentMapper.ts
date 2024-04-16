import type { Component } from 'vue'
import NoComponent from "@/components/NoComponent.vue";
import Hero from "@/components/Hero.vue";
import ScheduleOverview from "@/components/ScheduleOverview.vue"
import Text from "@/components/Text.vue"
import TextMedia from "@/components/TextMedia.vue"
import ImageGallary from "@/components/ImageGallary.vue"
import Banner from "@/components/Banner.vue"
import List from "@/components/List.vue"
import Sponsor from "@/components/Sponsor.vue"

type Mapping = {
  [name: string]: Component
}

export const mapping: Mapping = { Hero, ScheduleOverview, Text, TextMedia, ImageGallary, Banner, List, Sponsor };

export function getComponentForName(name: string) {
  return mapping[name] ?? NoComponent
}
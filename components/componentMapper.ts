import type { Component } from 'vue'
import NoComponent from "./NoComponent.vue";

type Mapping = {
  [name: string]: Component
}

export const mapping: Mapping = {};

export function getComponentForName(name: string) {
  return mapping[name] ?? NoComponent
}
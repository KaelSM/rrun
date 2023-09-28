import {getCustomProperty, incrementCustomProperty, setCustomProperty} from "./updateCustomProperty.js";

const SPEED = .05;
const groundElems = document.querySelectorAll("[data-ground]");

export function setupGround() {
  setCustomProperty(groundElems[0], "--left", 0)
  setCustomProperty(groundElems[1], "--left", "300")
}

export function updateGround(delta, speedScale) {
  groundElems.forEach(ground => {
    incrementCustomProperty(ground, "--offset", "--left", delta * SPEED * -1)

    if (getCustomProperty(ground, "--offset") <= -300) {
      incrementCustomProperty(ground, "--left", 600)
    }
  })
}
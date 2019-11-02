import { observable, action, computed } from "mobx"

class BirdStore {
    @observable birds = [];
    @observable mogyi = "Nagyon szép lány a Mogyika, nagyon szeretem."
  
    @action addBird = bird => {
      this.birds.push(bird)
    }
  
    @computed get birdCount() {
      return this.birds.length
    }
  }

const store = new BirdStore()
export default store
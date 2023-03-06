import { appState } from "../AppState.js"
import { playersService } from "../Services/PlayersService.js"

export class PlayersController {
  constructor() {
    console.log(appState.players)
    this.drawPlayers()
  }

  drawPlayers() {
    let template = ''
    appState.players.forEach(p => template += p.PlayerTemplate)
    document.getElementById('players').innerHTML = template
  }

  addPlayer() {
    console.log('add player button working')
    try {
      window.event.preventDefault()
      const form = window.event.target
      let playerData = {
        // @ts-ignore
        name: form.name.value
      }
      playersService.addPlayer(playerData)
      // @ts-ignore
      form.reset()
      this.drawPlayers()
    } catch (error) {
      console.log('[ADDING PLAYER]', error)
    }
  }

  increaseScore(name) {
    playersService.increaseScore(name)
    this.drawPlayers()
  }

  decreaseScore(name) {
    playersService.decreaseScore(name)
    this.drawPlayers()
  }
}
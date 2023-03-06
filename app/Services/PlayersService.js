import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";

class PlayersService {
  addPlayer(playerData) {
    let newPlayer = new Player(playerData.name)
    console.log(newPlayer)
    appState.players.push(newPlayer)
  }

  increaseScore(name) {
    let player = appState.players.find(p => p.name == name)
    player.score++
    // console.log(player.score)
  }
  decreaseScore(name) {
    let player = appState.players.find(p => p.name == name)
    player.score--
    // console.log(player.score)
  }
}

export const playersService = new PlayersService();
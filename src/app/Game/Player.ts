import Move from './Move'
import GameState from './GameState'
export default abstract class Player{
    callback: (move: Move) => void
    bindPlayer(callback: (move: Move)=> void): void{
        this.callback = callback;
    }
    play(move: Move): void{
        this.callback(move)
    }
    abstract waitForPlay(gameState: GameState): void

    

    
}

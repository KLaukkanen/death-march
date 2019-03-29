export default interface Warrior{
    type: WarriorType, 
    support: number,
    facing: Direction


}
enum Direction {
    Left,
    Right
}
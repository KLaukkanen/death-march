export default interface Formation{
    positions: Array<PositionObject>
}
interface PositionObject{
    warrior: Warrior, 
    enemiesLeft: Array<Enemy>,
    enemiesRight: Array<Enemy>,
    terrainLeft: Array<Terrain>,
    terrainRight: Array<Terrain>

}
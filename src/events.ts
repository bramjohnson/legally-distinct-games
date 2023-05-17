// Player
type PlayerID = number

interface Player {
    playerID: PlayerID
    // PlayerID -> Relationship
    // Add relationship to self (self-esteem) for some special events
    relationships: Record<PlayerID, number>
}

enum Status {
    Dead,
    Alive,
    Missing,
}

interface Effects {
    
}






































interface StageEvent {

}

interface GameState {
    players: Player[],
    stageEvents: StageEvent[],
    seed: number, // Will be randomified by the RandomSeedifier
    seedIndex: number
}

interface History {
    sessions: Session[]
}

interface Session {
    // beforeGameState not necessary but it might make debugging easier???
    beforeGameState: GameState,
    eventRecords: EventRecord[],
    afterGameState: GameState,
}

interface EventRecord {
    event: Event,
    description: string,
}

interface Event {
    isPossible: (gameState: GameState) => boolean
    apply: (gameState: GameState) => [GameState, string]
    probability: number,
    playerHunters: PlayerHunter[]
    description: string
}

interface PlayerHunter {
    ratePlayer: (player: Player) => number
}
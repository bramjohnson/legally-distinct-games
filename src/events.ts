
interface Player {

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
    isPossible: (gameState: GameState) => boolean;
    apply: (gameState: GameState) => [GameState, string];
    ratePlayer: (player: Player) => number
    description: string;
}
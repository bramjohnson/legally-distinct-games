
interface Player {

}

interface StageEvent {

}

interface GameState {
    players: Player[],
    stageEvents: StageEvent[],
    seed: number,
    seedIndex: number
}

interface History {
    sessions: Session[]
}

interface Session {
    // beforeGameState might not be necessary but it might make debugging easier???
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
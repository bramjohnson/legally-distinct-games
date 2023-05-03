# legally-distinct-games

# Event/Player selection problem:
Want to select players for events for a given GameState
- Each event has a list of function objects that "hunt" for certain types of players
    - Basically take Player in and output score
- Each event also has a probability of being chosen
Multiply the probability by the "average" of the scores (might need to add bonus multipliers to avoid lots of single person events because of single averages or whatever)
- Then populate probability table with events and choose and restart process.

Only problem is how do we decide where players go in an event.
- Example: two players are tied for one PlayerHunter score, but one has a much higher score for another PlayerHunter
    - How do we ensure that the players get chosen to optimize score?
https://en.wikipedia.org/wiki/Assignment_problem
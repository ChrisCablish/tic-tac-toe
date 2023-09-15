you have to adjust this so that player 1 can chose to be either x or o
right now, player one is always x

I need two different modes of play

1. Against another human player
2. Against the CPU

What is the best way to do do this?

Playing option is selected by button a button in MainPanel --> MenuPanel

New game (vs CPU) -- button one
New Game (vS Player) -- button two

Depending on what button is clicked, we set a state isPlayingCPU - boolean value

if (isPLayingCPU) then we need to have a way for the O to be selected by the computer every time it is "p2" turn

This could be a function that fires at the end of the clikc event that fires when p1 makes their selection so.
p1 clicks a square and chooses where to put their x --> some things happen to make the ex appear -->

if (usPlayingCPU) { //at the end of clickHandler
cpuChoice()
}

how does cpuChoice work?

--3X3 grid is one array with another array of 3 nested inside

have to choose a number between 0 and 2 to select row at random
then a number between zero and two to select col of that row at random to get array[n][n] choice
once choice is made, reach into array framework and switch that cell to "p2" instead of null

X is always first up

If player1 picks x, then player one goes first and uses x to select

if player one picks o, then player 2 goes first with x

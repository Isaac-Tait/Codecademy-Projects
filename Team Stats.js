//create team object
const team = {
    //populate array with three players
    _players: [
    {firstName: "Pablo", lastName: 'Sanchez', age: 11},
    {firstName: 'Isaac', lastName: 'Tait', age: 35},
    {firstName: 'Tadashi', lastName: 'Tait', age: 2}
  ],
    //populate array with three games
    _games: [ 
    {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
    {opponent: 'Red Sox', teamPoints: 12, opponentPoints: 2},
    {opponent: 'Giants', teamPoints: 13, opponentPoints: 7}
  ],
  //create getter methods for _players & _games. There is no need to create setter methods becaus the values do not need to change
  get players() {
      return this._players;
  },
  get games() {
      return this._games;
  },
  addPlayer(firstName, lastName, age){
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
    this._players.push(player);
    },

    addGame(opp, myPts, oppPts) {
        const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
        };
    this._games.push(game);
    },
  };

  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);

  console.log(team.players);

  team.addGame('Angels', 8, 12);
  team.addGame('Saints', 34, 12);
  team.addGame('Ducks', 9, 12);

  console.log(team.games);
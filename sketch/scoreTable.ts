class ScoreTable {

    private scoreTable: Array<Player>
    private listItemInPlayerTable: string

    constructor() {
        this.listItemInPlayerTable = ''
        if (localStorage.getItem('scoretable') === null) {
            this.scoreTable = new Array
        } else {
            this.scoreTable = JSON.parse(localStorage.getItem('scoretable') as string)
        }
        this.playerTable()
    }

    public draw() {

        fill('white')
        text(this.listItemInPlayerTable, (width * 0.15), (height / 2))
        textSize(25)
        fill('green')
        if (localStorage.getItem('scoretable') !== null) {
            text('Highest Score', (width * 0.15), (height / 3 + 10))
        }
    }

    public addPlayer(name: string, score: number) {
        let player = new Player(name, score)
        this.scoreTable.push(player)
    }

    public saveScoreTable() {
        localStorage.setItem('scoretable', JSON.stringify(this.scoreTable))
    }

    public playerTable() {
        const sortedListOfPlayers = this.scoreTable.sort((player1: Player, player2: Player) => {
            return player2.playerScore - player1.playerScore
        });

        this.listItemInPlayerTable = ''
        let placeInList = 1
        for (let player of sortedListOfPlayers) {
            if (placeInList <= 5) {
                this.listItemInPlayerTable += placeInList + '. ' + player.playerName + ' : ' + player.playerScore + '\n'
                placeInList++
            }
        }
    }
}

class Player {
    playerName: string
    playerScore: number

    constructor(name: string, score: number) {
        this.playerName = name,
            this.playerScore = score
    }
}


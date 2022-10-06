class Block {
    constructor(timestamp, lastHash, currHash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.currHash = currHash;
        this.data = data;
    }

    toString(){
        return `Block - 
        Timestamp   : ${this.timestamp}
        Last Hash   : ${this.lastHash.substring(0,10)}
        Current Hash: ${this.currHash.substring(0,10)}
        Data        : ${this.data}`;
    }

    static genesis(){
        return new this('Genesis time', '--------', 'fir57-h45h', [])
    }
}

module.exports = Block;
const artist = function() {
        console.log(this);
        return `I'm a fan of ${ artist } ` ;
}

console.log(artist('Homeshake'));



const artistArrow = ( artist => ({
    fan() { 
        console.log(this);
        return `I'm a fan of ${ artist } ` ;}
}))('Homeshake');

console.log(artistArrow.fan());

const bar = () => {};
console.log(bar.hasOwnProperty('prototype')); // => false 


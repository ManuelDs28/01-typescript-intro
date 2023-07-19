interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details
}

interface Details {
  author: string;
  year: number;
}


const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: 'Ed Sheeran',
    year: 2015
  }
}
const song = 'New Song';

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const {author} = details

// console.log('SONG', anotherSong );
// console.log('DURATION', duration);
// console.log('AUTHOR', author);


// WITHOUT DESTRUCTURING
// console.log('SONG', audioPlayer.song);
// console.log('SONG', audioPlayer.songDuration);
// console.log('SONG', audioPlayer.details.author);


const [, , trunks = 'Not Found']: string[] = ['Goku', 'Vegeta','Trunks']
console.log('Personaje 3:', trunks);
export {};

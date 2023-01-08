//get values
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var play = document.querySelector("#play");
var progress = document.querySelector("#progress");
var album = document.querySelector(".album");
var audio = document.querySelector("#audio");
var body = document.body;
var counter = 0;
const imgPlay = document.querySelector('.img-play')
const imgStop = document.querySelector('.img-stop')
var playCount = 0;
play.addEventListener('click', ()=>{
  if(playCount == 0){
    imgStop.style.display = 'flex'
    imgPlay.style.display = 'none'
    
    playCount++
  }else{
    imgPlay.style.display = 'flex'
    imgStop.style.display = 'none'
    playCount--
  }
  
})
prev.addEventListener('click', ()=>{
  imgPlay.style.display = 'none'
  imgStop.style.display = 'flex'

  playCount++
})
next.addEventListener('click', ()=>{
  imgPlay.style.display = 'none'
  imgStop.style.display = 'flex'
  playCount++
})
//object contains song info
var songs = [
  {
    name: 'Driving Home For Christmas',
    artist: 'Chris Rea',
    bg: 'img/1.jpg',
    src: 'music/Driving-Home-For-Christmas.mp3'
  },
  {
    name: 'Lonely',
    artist: 'Aekon',
    bg: 'https://cdns-images.dzcdn.net/images/cover/64254601e58daf6e82ecd3c7b18985ce/500x500.jpg',
    src: 'music/01 Akon - Lonely (Old Version).mp3'
  },
  {
    name: 'Hier Encore',
    artist: 'Charles Aznavour',
    bg: 'img/2.jpg',
    src: 'music/Hier-Encore.mp3'
  },
  
  {
    name: 'Проститься',
    artist: 'Uma2rman',
    bg: 'img/3.jfif',
    src: 'music/Forgiven.mp3'
  },
  
  {
    name: "Alone again (Naturally)",
    artist: "Gilbert O'Sullivan",
    bg: 'https://i.scdn.co/image/ab67616d0000b273ade58fd19577f4a5608eeef7',
    src: 'music/AloneAgain.mp3'
  },
  {
    name: 'Venecia Sin Ti',
    artist: 'Charles Aznavour',
    bg: 'https://i.scdn.co/image/ab67616d0000b273f47c955ab2b03b34e9631ed2',
    src: 'music/Venecia-sin.mp3'
  },
  {
    name: "Can't take my eyes off you",
    artist: 'Frankie Valli',
    bg: 'https://i.scdn.co/image/ab67616d0000b273328ba1034774366865d78ac1',
    src: 'music/Cant-Take-My-Eyes-off-You.mp3'
  },
  
  {
    name: 'Rapp Snitch Knishes(Instrumental)',
    artist: 'OMA',
    bg: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/75/e3/cd/75e3cd11-fca7-8a6f-3a1e-56e10091247b/artwork.jpg/1200x1200bf-60.jpg',
    src: 'music/Rapp-Snitch-Knishes-(Live-Instrumental)-(Cover).mp3'
  },
  
  {
    name: 'Last Christmas',
    artist: 'Wham!',
    bg: 'https://i.scdn.co/image/ab67616d0000b273f2d2adaa21ad616df6241e7d',
    src: 'music/Last-Christmas.mp3'
  },
  
  {
    name: 'You Know How We Do It',
    artist: 'Ice Cube',
    bg: 'https://cdns-images.dzcdn.net/images/cover/b51ef0a0f51e1a47eb8d232950d55a61/500x500.jpg',
    src: 'music/You-Know-How-We-Do-It-Remastered).mp3'
  },
  
  {
    name: 'Прасковья',
    artist: 'Uma2rman',
    bg: 'https://i.scdn.co/image/ab67616d0000b27300f4550e5ad84f55ddc9340d',
    src: 'music/Прасковья.mp3'
  },
  {
    name: "Da Ya Think I'm Sexy",
    artist: 'Rod Swewart',
    bg: 'https://i.scdn.co/image/ab67616d0000b273843e6e9fe4544fd294d47b4d',
    src: 'music/Da-Ya-Think-I-m-Sexy.mp3'
  },
  
  {
    name: 'Somebody-To-Love',
    artist: 'Queen',
    bg: 'https://www.udiscovermusic.com/wp-content/uploads/2021/05/Queen-Somebody-To-Love-copy.jpg',
    src: 'music/Somebody-To-Love.mp3'
  },
  {
    name: 'Raindrops keep falling on my had',
    artist: 'Engelbert Humperdinck',
    bg: 'https://images.genius.com/616532559e105242345df60c1f60fa03.640x638x1.jpg',
    src: 'music/Raindrops.mp3'
  },
  {
    name: 'time to say goodbye',
    artist: 'Andrea Bocelli, Sarah Brightman',
    bg: 'https://m.media-amazon.com/images/I/91C9s8-ihwL._SL1500_.jpg',
    src: 'music/timetosaygoodbye.mp3'
  },
  {
    name: 'Layla',
    artist: 'Eric Clapton',
    bg: 'https://images.genius.com/70a75aba4336efa16f5f84a4bb73b684.500x500x1.jpg',
    src: 'music/Layla(Live).mp3'
  },
  {
    name: 'Killer Queen',
    artist: 'Queen',
    bg: 'https://progrography.com/wp-content/uploads/2020/09/killerqueen.jpg',
    src: 'music/Killer-Queen.mp3'
  },
  {
    name: 'Jesus to a Child',
    artist: 'George Michael',
    bg: 'https://m.media-amazon.com/images/M/MV5BMzU5YzA1ZWMtYjE3Zi00OWI2LTkxNGMtZGJhOWQ5NjJhNDYxXkEyXkFqcGdeQXVyMTM2MzAwOA@@._V1_.jpg',
    src: 'music/Killer-Queen.mp3'
  },
];


play.addEventListener('click', function(){
  if(audio.paused){
    audio.play();
    play.setAttribute("name", "pause-circle");
  } else {
    audio.pause();
    play.setAttribute("name", "play-circle");
  }
});

next.addEventListener('click', function(){
  if(counter < songs.length-1)
    {
      counter++;
      audio.setAttribute("src", songs[counter].src);
      album.setAttribute("style", "background-image: url(" + songs[counter].bg + ")");
      h.innerHTML = songs[counter].name;
      p.innerHTML = songs[counter].artist;
      body.setAttribute("style", "background-image: url(" + songs[counter].bg + ")");
    } else {
      audio.setAttribute("src", songs[0].src);
      album.setAttribute("style", "background-image: url(" + songs[0].bg + ")");
      h.innerHTML = songs[0].name;
      p.innerHTML = songs[0].artist;
      body.setAttribute("style", "background-image: url(" + songs[0].bg + ")");
    }
});

prev.addEventListener('click', function(){
  if(counter == 0)
    {
      audio.setAttribute("src", songs[0].src);
      album.setAttribute("style", "background-image: url(" + songs[0].bg + ")");
      h.innerHTML = songs[0].name;
      p.innerHTML = songs[0].artist;
      body.setAttribute("style", "background-image: url(" + songs[0].bg + ")");
    } else {
      counter--;
      audio.setAttribute("src", songs[counter].src);
      album.setAttribute("style", "background-image: url(" + songs[counter].bg + ")");
      h.innerHTML = songs[counter].name;
      p.innerHTML = songs[counter].artist;
      body.setAttribute("style", "background-image: url(" + songs[counter].bg + ")");
    }
});


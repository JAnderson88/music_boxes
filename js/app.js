//Variable definitions
var keys = document.querySelectorAll('.key')
var notes = {
  cKey: document.querySelector('#cAudio'),
  dKey: document.querySelector('#dAudio'),
  eKey: document.querySelector('#eAudio'),
  fKey: document.querySelector('#fAudio'),
  gKey: document.querySelector('#gAudio'),
  aKey: document.querySelector('#aAudio'),
  bKey: document.querySelector('#bAudio'),
}



//Function Defintions
function playNote(letter){
  notes[letter].currentTime = 0
  notes[letter].play()
}




//Calling functions / Add Event Listeners
keys.forEach(function(key){
  key.addEventListener('mousedown', function(){
    playNote(key.id)
  })
})

document.addEventListener('keydown', function(event){
  // console.log(event)
  if(event.key == 'a'){
    playNote("cKey")
  }
})


//Global Variables 
let doorImage1 = document.getElementById(door1);

let doorImage2 = document.getElementById(door2);

let doorImage3 = document.getElementById(door3);

let startButton = document.getElementById(start);

let numClosedDoors = 3;

let openDoor1;

let openDoor2;

let openDoor3;

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

//Local Variables
const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true
  } else {
    return false
  }
};

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false
  } else {
    return true
  }
};

  const playDoor = (door) => {
    numClosedDoors--
    if (numClosedDoor === 0) {
      gameOver('win')
    }
  };

const randomChoreDoorGenerator = () => {
choreDoor = Math.floor(Math.random() * numClosedDoors)
    if (choreDoor === 0) {
      openDoor1 = botDoorPath
      openDoor2 = beachDoorPath
      openDoor3 = spaceDoorPath

    } else if (choreDoor === 1) {
      openDoor2 = botDoorPath
      openDoor1 = beachDoorPath
      openDoor3 = spaceDoorPath

    } else {
      openDoor3 = botDoorPath
      openDoor2 = beachDoorPath
      openDoor1 = spaceDoorPath
  }
};

// Door clicked functionality
doorImage1.onclick = () => {
  //if(!isClicked(doorImage1)) {
  doorImage1.src = openDoor1
  playDoor()
  //}
};

doorImage2.onclick = () => {
  //if(!isClicked(doorImage2)) {
  doorImage2.src = openDoor2
  playDoor()
  //}
};

doorImage3.onclick = () => {
  //if(!isClicked(doorImage3)) {
  doorImage3.src = openDoor3
  playDoor()
  //}
};

const gameOver = (status) => {
  if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?'
    }
  };


randomChoreDoorGenerator();
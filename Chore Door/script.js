var doorImage1 = document.getElementById('door1');

var doorImage2 = document.getElementById('door2');

var doorImage3 = document.getElementById('door3');

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

doorImage1.onclick = () => {
  doorImage1.src=botDoorPath
};

doorImage2.onclick = () => {
  doorImage2.src=beachDoorPath
};

doorImage3.onclick = () => {
  doorImage3.src=spaceDoorPath
};

const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors)
    if(choreDoor === 0) {
      else if (choreDoor === 1){
        else (choreDoor === 2)
      }
    }
  } 
  
  numCLosedDoors = 3;
  let openDoor1 = ();
  let openDoor2 = ();
  let openDoor3 = ();
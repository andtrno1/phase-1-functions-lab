// Code your solution in this file!
function distanceFromHqInBlocks(number){
    if (number > 42){
        var blockDistance = number -42;
    }
    else{
        var blockDistance = 42 - number;
    }
    return blockDistance;

}


function distanceFromHqInFeet(number){
    var feetDistance = distanceFromHqInBlocks(number) * 264;
    return feetDistance;
}

function distanceTravelledInFeet(start, destination){
    var totalDistance = (distanceFromHqInBlocks(destination) - distanceFromHqInBlocks(start)) * 264;
    return totalDistance;
}

function calculatesFarePrice(start, destination){
    const traveled = distanceTravelledInFeet(start, destination);
    if (traveled > 400 && traveled < 2000){
        console.log(traveled)
        return (traveled - 400) * 0.02;
  } else if (traveled > 2000 && traveled < 2500) {
    return 25;
  } else if (traveled < 400) {
    return 0;
  } else if (traveled > 2500) {
    return "cannot travel that far";
  }

}

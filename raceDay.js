let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegistered = false;
let runnerAge = 20;
if(runnerAge > 18 && runnerRegistered){
  raceNumber += 1000;
}
if (runnerAge > 18 && runnerRegistered){
  console.log(`You will start your race at 9.30am with race number: ${raceNumber}`);
}
else if(runnerAge > 18 && !runnerRegistered){
  console.log(`You will start your race at 11.00am with race number: ${raceNumber}`);
}
else if (runnerAge < 18 ){
  console.log(`You will start your race at 12.30pm with race number: ${raceNumber}`);
}
else {
  console.log('Please go to the registration desk for more information');
}

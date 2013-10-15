var el = document.getElementById("ywardrobe").addEventListener('click', FoundWat);

function FoundWat() {

  var dropPrefix = new Array(7);
  dropPrefix[0] = "the Old";
  dropPrefix[1] = "the Usual";
  dropPrefix[2] = "the Nondimensional";
  dropPrefix[3] = "the Stinky";
  dropPrefix[4] = "the Neighboring";
  dropPrefix[5] = "the Useless";
  dropPrefix[6] = "the Coloured";

  var dropItem = new Array(7);
  dropItem[0] = " Kokoshnik";
  dropItem[1] = " Sheepskin Coat";
  dropItem[2] = " Sock";
  dropItem[3] = " Kalpak";
  dropItem[4] = " Condome";
  dropItem[5] = " Patty";
  dropItem[6] = " Cuke";

  var dropSuffix = new Array(8);
  dropSuffix[0] = " of Loyalty.";
  dropSuffix[1] = " of Greed.";
  dropSuffix[2] = " of Mondial Sorrow.";
  dropSuffix[3] = " of Humility.";
  dropSuffix[4] = " of Lust.";
  dropSuffix[5] = " of Earth Power.";
  dropSuffix[6] = ", better put it back until the owner does not suddenly remembered of it.";
  dropSuffix[7] = ", eeack!";
  var dice = getRandom(0, 10);
  var founded;
  switch (dice) {
    case 3:
      founded = "Wardrobe: You found the Lonely Sock. Beware, the second one is somewhere close!";
      break;
    case 4:
      founded = "Wardrobe: Hurray! Treasure! .. ... Oh, no, it's just someone's half-eaten sushka.";
      break;
    case 5:
      founded = "Wardrobe: Great! For how long it is not being cleaned there? Seems like you have found an old pizza.";
      break;
    case 6:
      founded = "Wardrobe: Oh look at this thing! By the way what is it?";
      break;

    case 7:
      founded = "Wardrobe: Narnia is in the other Wardrobe";
      break;
    case 8:
      founded = "Nothing there, you miserable insignificant kewpie!";
      break;
    case 9:
      founded = "Wardrobe: Among the rags and remnants of food you discover a dusty incomprehensible crap. "
      dice = getRandom(0, 6);
      founded = founded + " Having considered this find closely, you realize that you holding " + dropPrefix[dice];

      dice = getRandom(0, 6);
      founded = founded + dropItem[dice];
      dice = getRandom(0, 7);
      founded = founded + dropSuffix[dice];
      break;

    default:
      founded = "Wardrobe: Nothing here. Try again.";
  }


  //alert(founded);

  $(".success").text(founded);
  $(".success").show();

}

function getRandom(min, max) {
  if (min > max) {
    return -1;
  }

  if (min == max) {
    return min;
  }

  var r;

  do {
    r = Math.random();
  }
  while (r == 1.0);

  return min + parseInt(r * (max - min + 1));
}
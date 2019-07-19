

var truths = ["What was the last thing you searched for on your phone?", "What app on your phone do you waste the most time on?", "Do you own a pair of footie pajamas?", "Have you ever farted in an elevator?", "Have you ever tasted a booger?", "What are some things you think about when sitting on the toilet?", "Do you ever talk to yourself in the mirror?", "Have you ever walked into a wall?", "Who is your secret crush?", "What was the last thing you texted?",
"Would you trade your sibling in for a million dollars?", "Would you rather live with no internet or no A/C or heating?", "If you could only hear one song for the rest of your life, what would it be?", "If you were reborn, what decade would you want to be born in?",
"If you could suddenly become invisible, what would you do?", "Do you pee in the shower?", "What is your biggest fear?", "How far would you go to land the guy or girl of your dreams?", "Do you sleep with a stuffed animal?", "If you could marry any celebrity, who would it be?", "Describe your dream career.",
"You have to give up one makeup item for the rest of your life. What is it?", "What's the most useless piece of knowledge you know?", "What's one food that you will never order at a restaurant?"];

var truthButton = $('.truthButton');
  truthButton.on('click', printTruth);

var truthOutPut = $(".truthh3");
function printTruth() {
  var firstNumber = Math.random();
  var multipliedNumber = firstNumber * truths.length;
  var roundedNumber = Math.floor(multipliedNumber);
  var randomTruth = truths[roundedNumber];
  truthOutPut.text(randomTruth);
  // console.log(randomTruth);
}

var dares = ["Go Outside And Dance Like A Cowboy", "Do A Model Runway Walk Outside On The Sidewalk",  "Stand In You Front Yard, Wave And Say ‘Hi!’ To Everyone You See", "Call Your Crush And Explain The Rules Of Monopoly To Him/Her",
"For The Duration Of The Game You Must Yell Out Exclamations Randomly", "Everything You Say For The Next 15 Minutes Must Be Sung To The Tune Of “Happy Birthday”", "Smell The Feet Of Everyone In The Room And Rank Them From Best To Worst",
"Pretend That You Are Underwater For The Next 10 Minutes", "Talk Without Closing Your Mouth", "Take An Embarrassing Selfie And Post It As Your Profile Picture", "Make A Hand Puppet By Drawing A Face On Your Hand, And Use Your Hand To Say What You Want To Say",
"Sing Like An Opera Singer"]

var dareButton = $('.dareButton');
  dareButton.on('click', printDare);

  var dareOutPut = $(".dareh3");
  function printDare() {
    var firstNumber = Math.random();
    var multipliedNumber = firstNumber * dares.length;
    var roundedNumber = Math.floor(multipliedNumber);
    var randomDare = dares[roundedNumber];
    dareOutPut.text(randomDare);
  }

var submitButton = $('.submitButton');
  submitButton.on('click', printSubmit);

  function printSubmit() {

      var userInput = $('.input').val();
      var inputPlace = $('.inputSelection');

      inputPlace.append(`
        <div class="commentBox">
          <p>${userInput}</p>

        </div>
        `);
  }

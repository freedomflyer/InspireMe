var alexa = require('alexa-app');
var alexaApp = new alexa.app('inspireme');

var quotes =
[
	"Every man is born as many men and dies as a single one. ~Martin Heidegger ",
	"Language is the house of the truth of Being. ~Martin Heidegger ",
	"Man acts as though he were the shaper and master of language, while in fact language remains the master of man. ~Martin Heidegger",
	"The most thought-provoking thing in our thought-provoking time is that we are still not thinking. ~Martin Heidegger ",
	"The possible ranks higher than the actual. ~Martin Heidegger",
	"Unless you change how you are, you will always have what you've got. ~Jim Rohn ",
	"A stumble may prevent a fall. ~English Proverb",
	"There's no limit to what a man can achieve, if he doesn't care who gets the credit. ~Laing Burns, Jr.",
	"Don't waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.~Ralph Waldo Emerson",
	"The most practical, beautiful, workable philosophy in the world won't work - if you won't. ~Zig Ziglar ",
	"I believe the greater the handicap, the greater the triumph. ~John H. Johnson ",
	"Life shrinks or expands in proportion to one's courage. ~Anais Nin",
	"We don’t see things as they are we see them as we are. ~Anais Nin",
	"You can't build a reputation on what you are going to do. ~Henry Ford",
	"People seem not to see that their opinion of the world is also a confession of character.  ~Ralph Waldo Emerson",
	"The most successful people are those who are good at plan B. ~James Yorke",
	"Opportunity is missed by most because it is dressed in overalls and looks like work. ~Thomas Alva Edison",
	"The universe is full of magical things, patiently waiting for our wits to grow sharper. ~Eden Phillpotts",
	"Experience is not what happens to a man, it is what a man does with what happens to him. ~Aldous Huxley",
	"Imagination rules the world. ~Napoleon Bonaparte",
	"Adversity has the effect of eliciting talents which, in prosperous circumstances, would have lain dormant. ~Horace",
	"It isn't that they can't see the solution, it's that they can't see the problem. ~G.K. Chesterton",
	"Facts are stubborn, but statistics are more pliable. ~Mark Twain ",
	"All truth goes through three steps:  First, it is ridiculed. Second, it is violently opposed.  Finally, it is accepted as self-evident. ~Arthur Schopenhauer ",
	"An invasion of armies can be resisted; an invasion of ideas cannot be resisted. ~Victor Hugo ",
	"Pain is inevitable but misery is optional. ~Barbara Johnson ",
	"Beware of defining as intelligent only those who share your opinions. ~Ugo Ojetti ",
	"If we knew what it was we were doing, it would not be called research, would it? ~Albert Einstein ",
	"To believe a thing is impossible is to make it so. ~French proverb",
	"Simplicity is the ultimate sophistication. ~Leonardo da Vinci ",
	"To be simple is to be great. ~Ralph Waldo Emerson ",
	"The trouble about man is twofold.  He cannot learn truths which are too complicated; he forgets truths which are too simple. ~Dame Rebecca West ",
	"Everything should be as simple as it is, but not simpler. ~Albert Einstein ",
	"Many of life's failures are people who did not realize how close they were to success when they gave up. ~Thomas Edison",
	"Hitch your wagon to a star. ~Ralph Waldo Emerson ",
	"If you knew how much work went into it, you wouldn't call it genius. ~Michelangelo",
	"I know God will not give me anything I can't handle. I just wish that He didn't trust me so much. ~Mother Teresa ",
	"If we did the things we are capable of, we would astound ourselves. ~Thomas Edison "
]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


alexaApp.intent('RandomQuoteIntent',
  {
    slots: {number:"NUMBER"},
    utterances: ["give me {1-100|number} random quotes"]
  },
  function(request,response) {
    var numquotes = request.slot('number');
    var quoteText = "";

    for(var i=0; i < numquotes; i++) {
        quoteText += quotes[getRandomInt(0, quotes.length-1)] + ". ";
    }

    response.say("Here are  " + numquotes + " quotes. " + quoteText);
  }
);

exports.quote = function(req, res) {

    alexaApp.request(req.body)        // connect express to alexa-app
        .then(function(response) { // alexa-app returns a promise with the response
            response.version = "1.0";
            res.json(response);      // stream it to express' output
    });


    // res.send({
    //     "version": "1.0",
    //     "response": {
    //         "outputSpeech": {
    //         "type": "PlainText",
    //         "text": quotes[getRandomInt(0, quotes.length-1)]
    //         },
    //         "shouldEndSession": true
    //     },

    // });
}



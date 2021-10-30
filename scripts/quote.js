const quoteSlide = document.getElementById("quoteSlide");
const newestQuote = document.getElementById("new-quote");

const quotes = [
  {
    quote: "You miss one hundred percent of the shots you don't take.",
    author: "-Wayne Gretzky"
  },
  {
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "-Zig Ziglar"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "-Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "-Steve Jobs"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "-Eleanor Roosevelt"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "-Oprah Winfrey"
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "-James Cameron"
  },
  {
    quote: "Sometimes people don’t want to hear the truth because they don’t want their illusions destroyed.",
    author: "-Friedrich Nietzsche"
  },
  {
    quote: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    author: "-Friedrich Nietzsche"
  },
  {
    quote: "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
    author: "-Friedrich Nietzsche"
  },
  {
    quote: "The higher we soar, the smaller we appear to those who cannot fly.",
    author: "-Friedrich Nietzsche"
  },
  {
    quote: "The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind.",
    author: "-Friedrich Nietzsche"
  },
  {
    quote: "I’m not upset that you lied to me, I’m upset that from now on I can’t believe you.",
    author: "-Friedrich Nietzsche"
  },
  {
    quote: "No one can construct for you the bridge upon which precisely you must cross the stream of life, no one but you yourself alone.",
    author: "-Friedrich Nietzsche"
  },
  {
    quote: "There are no beautiful surfaces without a terrible depth.",
    author: "-Friedrich Nietzsche"
  },
  {
    quote: "The lonely one offers his hand too quickly to whomever he encounters.",
    author: "-Friedrich Nietzsche"
  },
  {
    quote: "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.",
    author: "-Friedrich Nietzsche"
  },
  {
    quote: "There is always some madness in love. But there is also always some reason in madness.",
    author: "-Friedrich Nietzsche"
  },
  {
    quote: "Blessed are the forgetful, for they get the better even of their blunders.",
    author: "-Friedrich Nietzsche"
  },
  {
    quote: "A sense of humour is the only divine quality of man.",
    author: "-Arthur Schopenhauer"
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "-Mother Teresa"
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "-Franklin D. Roosevelt"
  },
  {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "-Margaret Mead"
  },
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "-Robert Louis Stevenson"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "-Eleanor Roosevelt"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "-Benjamin Franklin"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "-Helen Keller"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "-Aristotle"
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "-Anne Frank"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "-Ralph Waldo Emerson"
  },
  {
      quote: "Life isn’t about getting and having, it’s about giving and being.",
      author: "-Kevin Kruse"
  },
  {
      quote: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "-Napoleon Hill"
  },
  {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "-Albert Einstein"
  },
  {
      quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "-Robert Frost"
  },
  {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "-Florence Nightingale"
  },
  {
      quote: "You miss 100% of the shots you don’t take.",
      author: "-Wayne Gretzky"
  },
  {
      quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "-Amelia Earhart"
  },
  {
      quote: "Every strike brings me closer to the next home run.",
      author: "-Babe Ruth"
  },
  {
      quote: "Definiteness of purpose is the starting point of all achievement.",
      author: "-W. Clement Stone"
  },
  {
      quote: "We must balance conspicuous consumption with conscious capitalism.",
      author: "-Kevin Kruse"
  },
  {
      quote: "Life is what happens to you while you’re busy making other plans.",
      author: "-John Lennon"
  },
  {
      quote: "We become what we think about.",
      author: "-Earl Nightingale"
  },

  {
      quote: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "-Charles Swindoll"
  },
  {
      quote: "The most common way people give up their power is by thinking they don’t have any.",
      author: "-Alice Walker"
  },
  {
      quote: "The mind is everything. What you think you become.",
      author: "-Buddha"
  },
  {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "-Chinese Proverb"
  },
  {
      quote: "An unexamined life is not worth living.",
      author: "-Socrates"
  },
  {
      quote: "Eighty percent of success is showing up.",
      author: "-Woody Allen"
  },
  {
      quote: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "-Steve Jobs"
  },
  {
      quote: "Winning isn’t everything, but wanting to win is.",
      author: "-Vince Lombardi"
  },
  {
      quote: "I am not a product of my circumstances. I am a product of my decisions.",
      author: "-Stephen Covey"
  },
  {
      quote: "Every child is an artist.  The problem is how to remain an artist once he grows up.",
      author: "-Pablo Picasso"
  },
  {
      quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "-Christopher Columbus"
  },
  {
      quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "-Maya Angelou"
  },
  {
      quote: "Either you run the day, or the day runs you.",
      author: "-Jim Rohn"
  },
  {
      quote: "Whether you think you can or you think you can’t, you’re right.",
      author: "-Henry Ford"
  },
  {
      quote: "The two most important days in your life are the day you are born and the day you find out why.",
      author: "-Mark Twain"
  },
  {
      quote: "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
      author: "-Johann Wolfgang von Goethe"
  },
  {
      quote: "The best revenge is massive success.",
      author: "-Frank Sinatra"
  },
  {
      quote: "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
      author: "-Zig Ziglar"
  },
  {
      quote: "Life shrinks or expands in proportion to one’s courage.",
      author: "-Anais Nin"
  },
  {
      quote: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
      author: "-Vincent Van Gogh"
  },
  {
      quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
      author: "-Aristotle"
  },
  {
      quote: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
      author: "-Jesus"
  },
  {
      quote: "The only person you are destined to become is the person you decide to be.",
      author: "-Ralph Waldo Emerson"
  },
  {
      quote: "Go confidently in the direction of your dreams.  Live the life you have imagined.",
      author: "-Henry David Thoreau"
  },
  {
      quote: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
      author: "-Erma Bombeck"
  },
  {
      quote: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
      author: "-Booker T. Washington"
  },
  {
      quote: "Certain things catch your eye, but pursue only those that capture the heart.",
      author: "- Ancient Indian Proverb"
  },
  {
      quote: "Believe you can and you’re halfway there.",
      author: "-Theodore Roosevelt"
  },
  {
      quote: "Everything you’ve ever wanted is on the other side of fear.",
      author: "-George Addair"
  },
  {
      quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      author: "-Plato"
  },
  {
      quote: "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
      author: "-Maimonides"
  },
  {
      quote: "Start where you are. Use what you have.  Do what you can.",
      author: "-Arthur Ashe"
  },
  {
      quote: "Fall seven times and stand up eight.",
      author: "-Japanese Proverb"
  },
  {
      quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
      author: "-Helen Keller"
  },
  {
      quote: "Everything has beauty, but not everyone can see.",
      author: "-Confucius"
  },
  {
      quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
      author: "-Anne Frank"
  },
  {
      quote: "When I let go of what I am, I become what I might be.",
      author: "-Lao Tzu"
  },
  {
      quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      author: "-Maya Angelou"
  },
  {
      quote: "Happiness is not something readymade.  It comes from your own actions.",
      author: "-Dalai Lama"
  },
  {
      quote: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
      author: "-Sheryl Sandberg"
  },
  {
      quote: "If the wind will not serve, take to the oars.",
      author: "-Latin Proverb"
  },
  {
      quote: "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
      author: "-Unknown"
  },
  {
      quote: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
      author: "-Marie Curie"
  },
  {
      quote: "Too many of us are not living our dreams because we are living our fears.",
      author: "-Les Brown"
  },
  {
      quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      author: "-Joshua J. Marine"
  },
  {
      quote: "If you want to lift yourself up, lift up someone else.",
      author: "-Booker T. Washington"
  },
  {
      quote: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
      author: "-Leonardo da Vinci"
  },
  {
      quote: "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
      author: "-Jamie Paolinetti"
  },
  {
      quote: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
      author: "-Erica Jong"
  },
  {
      quote: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
      author: "-Bob Dylan"
  },
  {
      quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
      author: "-Benjamin Franklin"
  },
  {
      quote: "In order to succeed, your desire for success should be greater than your fear of failure.",
      author: "-Bill Cosby"
  },
  {
      quote: "A person who never made a mistake never tried anything new.",
      author: "- Albert Einstein"
  },
  {
      quote: "The person who says it cannot be done should not interrupt the person who is doing it.",
      author: "-Chinese Proverb"
  },
  {
      quote: "There are no traffic jams along the extra mile.",
      author: "-Roger Staubach"
  },
  {
      quote: "It is never too late to be what you might have been.",
      author: "-George Eliot"
  },
  {
      quote: "You become what you believe.",
      author: "-Oprah Winfrey"
  },
  {
      quote: "I would rather die of passion than of boredom.",
      author: "-Vincent van Gogh"
  },
  {
      quote: "A truly rich man is one whose children run into his arms when his hands are empty.",
      author: "-Unknown"
  },
  {
      quote: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
      author: "-Ann Landers"
  },
  {
      quote: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
      author: "-Abigail Van Buren"
  },
  {
      quote: "Build your own dreams, or someone else will hire you to build theirs.",
      author: "-Farrah Gray"
  },
  {
      quote: "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
      author: "-Jesse Owens"
  },
  {
      quote: "Education costs money. But then so does ignorance.",
      author: "-Sir Claus Moser"
  },
  {
      quote: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
      author: "-Rosa Parks"
  },
  {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "-Confucius"
  },
  {
      quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
      author: "-Oprah Winfrey"
  },
  {
      quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
      author: "-Dalai Lama"
  },
  {
      quote: "You can’t use up creativity. The more you use, the more you have.",
      author: "-Maya Angelou"
  },
  {
      quote: "Dream big and dare to fail.",
      author: "-Norman Vaughan"
  },
  {
      quote: "Our lives begin to end the day we become silent about things that matter.",
      author: "-Martin Luther King Jr."
  },
  {
      quote: "Do what you can, where you are, with what you have.",
      author: "-Teddy Roosevelt"
  },
  {
      quote: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
      author: "-Tony Robbins"
  },
  {
      quote: "Dreaming, after all, is a form of planning.",
      author: "-Gloria Steinem"
  },
  {
      quote: "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
      author: "-Mae Jemison"
  },
  {
      quote: "You may be disappointed if you fail, but you are doomed if you don’t try.",
      author: "-Beverly Sills"
  },
  {
      quote: "Remember no one can make you feel inferior without your consent.",
      author: "-Eleanor Roosevelt"
  },
  {
      quote: "Life is what we make it, always has been, always will be.",
      author: "-Grandma Moses"
  },
  {
      quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
      author: "-Ayn Rand"
  },
  {
      quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      author: "-Henry Ford"
  },
  {
      quote: "It’s not the years in your life that count. It’s the life in your years.",
      author: "-Abraham Lincoln"
  },
  {
      quote: "Change your thoughts and you change your world.",
      author: "-Norman Vincent Peale"
  },
  {
      quote: "Either write something worth reading or do something worth writing.",
      author: "-Benjamin Franklin"
  },
  {
      quote: "Nothing is impossible, the word itself says, “I’m possible!”",
      author: "-Audrey Hepburn"
  },
  {
      quote: "The only way to do great work is to love what you do.",
      author: "-Steve Jobs"
  },
  {
      quote: "If you can dream it, you can achieve it.",
      author: "-Zig Ziglar"
  }
];


window.onload = init;
function init() {
  generateQuote();
}

function generateQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuoteData = quotes[randomIndex]
  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="

  // Quote
  let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
  twitterLink += quoteInApiFormat;
  // Author
  let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
  twitterLink += authorInApiFormat;
  // let tumblrLink = "https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DZig%2BZiglar%26content%3DIf%2Byou%2Bcan%2Bdream%2Bit%252C%2Byou%2Bcan%2Bachieve%2Bit.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"



  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
  document.getElementById("tweet-quote").href = twitterLink;

}

// newestQuote.addEventListener("click", function() {
//   $('#book').animate({
//     opacity: 'hide', // animate slideUp
//     margin: 'hide',
//     padding: 'hide',
//     height: 'hide' // animate fadeOut
//   }, 'slow', 'linear', function() {
//     $(this).remove();
//   });
// })

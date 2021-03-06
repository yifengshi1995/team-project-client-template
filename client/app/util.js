/**
 * Converts Unix time (in ms since Jan 1 1970 UTC) to a string in the local time zone.
 */
export function unixTimeToString(time) {
  return new Date(time).toLocaleString();
}

export function currentTimeToString(){
	return new Date().toLocaleString();
}

export function hideElement(shouldHide) {
  if (shouldHide) {
    return 'hidden';
  } else {
    return '';
  }
}

export function randomQuote(){
   var quotes = [
           "A day without sunshine is like, you know, night.",
           "If you try to fail, and succeed, which have you done?",
           "If Britney Spears can make it through 2007, you can make it through the day",
           "A diamond is merely a lump of coal that did well under pressure",
           "Even if you are on the right track, you'll get run over if you just sit there",
           "Never put off until tomorrow what you can do the day after tomorrow",
           "People often say that motivation doesn't last.  Well, neither does bathing - that's why we recommend it daily",
           "If you think you are too small to make a difference, try sleeping with a mosquito",
           "If you're going to be able to look back on something and laugh about it, you might as well laugh about it now",
           "There are no traffic jams along the extra mile",
           "Life is lke photography.  You need the negatives to develop",
           "If you hit the target every time its too near or too big",
           "Life is a shipwreck but we must not forget to sng in the lifeboats",
           "I didn't fail the test.  I just found 100 ways to do it wrong"
   ]
   var names = [
	     "Steve Martin",
	     "George Carlin",
	     "The Internet",
	     "Unknown",
	     "Will Rodgers",
	     "Mark Twain",
	     "Zig Ziglar",
	     "Dalai Lama",
	     "Marie Osmond",
	     "Roger Staubach",
	     "Unknown",
	     "Tom Hirshfield",
	     "Voltaire",
	     "Benjamin Franklin"
   ]
      var index = Math.floor(Math.random() * quotes.length);
      var quote = quotes[index];
      var name = names[index];
	return "\""+quote+"\" - "+ name;
}

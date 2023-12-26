const story = `Once upon a time, in the peculiar universe created by Douglas Adams, there was an ordinary man named Arthur Dent. One Thursday, Arthur's life was turned upside down when he discovered that his house was about to be demolished to make way for a new bypass. Little did he know that this mundane concern was just the beginning of a wildly absurd and intergalactic adventure.As Arthur grappled with the impending destruction of his home, he was suddenly faced with an even more bizarre revelation: his best friend, Ford Prefect, was not an out-of-work actor, as he had always believed, but an alien researcher for a guidebook titled "The Hitchhiker's Guide to the Galaxy." Ford, realizing that Earth was about to be obliterated by an alien race called the Vogons to make room for a hyperspace expressway, whisked Arthur away just in the nick of time.Thrown into the chaos of the universe, Arthur found himself aboard the stolen spaceship of the two-headed, three-armed ex-President of the Galaxy, Zaphod Beeblebrox, along with Trillian, the only other human survivor of Earth's destruction, and Marvin, a morose and depressed robot. The group embarked on a journey that took them through space and time, encountering peculiar beings and navigating the intricacies of the universe. Along the way, they stumbled upon the enigmatic answer to the ultimate question of life, the universe, and everything: the number 42. However, the real challenge lay in discovering what the actual question was. This quest for meaning became a central theme, leading them to the planet Magrathea, where custom planets were created for wealthy clients. It was here that the cosmic puzzle began to unravel, revealing the interconnectedness of improbable events and the whimsical nature of existence.In the end, the story was not just about the answer but the journey itself — a cosmic, comical, and often nonsensical journey through a universe where the ordinary and the extraordinary collided in the most unexpected ways. And so, with a towel in hand and a sense of the absurd firmly intact, Arthur Dent continued to navigate the cosmos, forever changed by his unexpected adventure through the pages of "The Hitchhiker's Guide to the Galaxy."`;
const storyWords = story.split(" ");
const body = document.querySelector("body");
storyWords.forEach((word) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.style.setProperty("transition", "transform 2s, color 2s");
  body.append(span);
});

const spanWords = document.querySelectorAll("span");
spanWords.forEach((spanWord) => {
  spanWord.style.setProperty("position", "absolute");
  setInterval(() => {
    spanWord.style.setProperty(
      "transform",
      `translate(${Math.floor(
        Math.random() * window.innerWidth
      )}px, ${Math.floor(Math.random() * window.innerHeight)}px)`
    );
    spanWord.style.setProperty("color", `#${getRandomColor()}`);
  }, Math.floor(Math.random() * 2000));
});

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

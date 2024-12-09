const typedTextSpan = document.querySelector(".typed-text");

    const words = ["Hi,", "I", "Am", "Ooss", "T.", "Barnabas", "Your", "go-to", "Frontend", "Web", "Designer"];
    const typingDelay = 200;
    const newWordDelay = 700; // Delay before moving to the next word
    let index = 0;
    let charIndex = 0;

    document.addEventListener("DOMContentLoaded", () => {
      if (words.length) {
        setTimeout(type, typingDelay);
      }
    });

    function type() {
      if (charIndex < words[index].length) {
        typedTextSpan.innerHTML += words[index].charAt(charIndex); // Append character
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        // Check for words that need styling
        if (words[index] === "Ooss" || words[index] === "T." || words[index] === "Barnabas") {
          // Wrap styled words in a span with a class
          typedTextSpan.innerHTML = typedTextSpan.innerHTML.replace(
            new RegExp(`${words[index]}$`),
            `<span class="highlight">${words[index]}</span>`
          );
        }

        // Add a space after the word
        typedTextSpan.innerHTML += " ";

        // Add a line break after every third word
        if ((index + 1) % 3 === 0) {
          typedTextSpan.innerHTML += "<br>";
        }

        charIndex = 0;
        index++;

        if (index < words.length) {
          setTimeout(type, newWordDelay); // Proceed to the next word
        } else {
          // Typing completed
          typedTextSpan.innerHTML = typedTextSpan.innerHTML.trim() + "."; // Add a period and trim trailing space
        }
      }
    }



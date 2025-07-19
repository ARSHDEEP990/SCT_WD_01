
    const roles = [
      "Frontend Designer",
      "Web Designer",
      "UI / UX Designer",
      "Web Developer",
      "Software Tester"
    ];

    let index = 0;
    const animatedText = document.getElementById("animated-text");

    function updateText() {
      animatedText.textContent = roles[index];
      index = (index + 1) % roles.length;
    }

    setInterval(updateText, 3000);
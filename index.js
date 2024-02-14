const { Client, IntentsBitField } = require("discord.js");
const keepLive = require("./server");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (bot) => {
  console.log(`The ${bot.user.tag} is ready`);
});

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) {
    return;
  }
  let message = msg.content;
  let parsed_msg = message.toLowerCase();

  if (parsed_msg === "$hello-trinity") {
    msg.reply(
      "Hey, there! 🥳. My name is Zoe. There better be something really important for you to ask as u woke me up from my sleep or you will be cursed to have both sides of your pillows warm.Type in `$help` so that I can assist you with event-related questions."
    );
  }

  if (parsed_msg === "$help") {
    msg.reply(`I can assist you in a variety of ways with the event. You can ask me any of the following questions by using the commands:
🔹 $name - Why the name of event is 'TRINITY'?
🔹 $benefits - Why should I attend this boot camp?
🔹 $purpose - What is the purpose of event?
🔹 $tech_stack - What technologies will be covered in the event?
🔹 $hands_on - What kind of hands-on experience can attendees expect?
🔹 $prerequisites - Do attendees need to have prior experience with React or Javascript?
🔹 $venue - When and where is the event?
🔹 $reg_fee - Is there any registration fee?
🔹 $resources - Can you Share resources for learning Javascript, React 3 Fiber and 3D buliding scenes such as online tutorials and guides?
🔹 $advice - Can you please offer me an advice on how to prepare for and make the most of the event?
🔹 $git_help - I'm unable to install git on my system can you help me with that?
🔹 $thankyou - Say thank you to me.

Please let me know if there's anything specific you need help with, you can ask me any of the above question and I'd be happy to assist you further.`);
  }

  if (parsed_msg === "$name") {
    msg.reply(
      `Oh, now you also are accusing us of copying from the movie "Oppenheimer"? Let me tell you, our first event was way before "Oppenheimer" hit the screens! 25th February 2023 to be exact!! But no, apparently, we're just a bunch of time-traveling event planners who decided to steal ideas from a film! Ha! Next thing you know, you'll be accusing us of inventing the time machine too!. By the way, "TRINITY" isn't some random movie reference – it's a genius creation straight from our imaginative brains! Like, duh, for example ever heard of the "Dev trinity"? the three phases of development (DESIGN, DEVELOP, and DEPLOY).`
    );
  }

  if (parsed_msg === "$benefits") {
    msg.reply(`Ah, imagine this: You, standing at the precipice of greatness, but hesitating, trembling in the face of two formidable foes – React and JavaScript, the mighty dragons that have thwarted many a valiant soul. Yet fear not, for Trinity 2.0's Bootcamp emerges as the gallant knight, the beacon of hope for novices like you.
- No need to tackle the beast all at once! We'll guide you step-by-step through React 3 Fiber, turning complex concepts into bite-sized nuggets of knowledge.
- Here, it's all about passion over prowess. Whether you're a coding guru or just dipping your toes, your enthusiasm is what sets you on the path to greatness.
- Ready to join the coolest coding crew around? Our diverse community is here to cheer you on, where questions are celebrated and collaboration is king..
So, my dear friend, heed the call to arms and embark on this heroic quest to conquer the unconquerable – for victory awaits those who dare to dream and defy the odds.`);
  }

  if (parsed_msg === "$purpose") {
    msg.reply(`If I were to put the event in words - "The illustrious event 'Trinity 2.0: Journey towards the 3D world' is poised to elevate participants to the zenith of mastery in 3D game development through the formidable prowess of React 3 Fiber. Prepare to embark on a transformative journey that transcends mere theoretical discourse, for our mission is nothing short of sculpting titans of innovation, creators of boundless imagination, and pioneers of tomorrow's digital frontier". 
In mere mortal terms like yourself the aim of the event "Trinity 2.0: Journey towards the 3D world" is to share knowledge and skills needed to excel in 3D game development using React 3 Fiber. Also you get to create your own freaking game!! Wohoo.`);
  }

  if (parsed_msg === "$tech_stack") {
    msg.reply(
      `Dive into the depths of React, React 3 Fiber, and 3D Game Development as we embark on this triple-tech journey. Join us and let's make it a trifecta of learning and fun! Get the pun trifecta trinity triple tech.... never mind you wont understand the struggle, the absolute matrix calculations we robots have to make to understand the puns of this puny human world.`
    );
  }

  if (parsed_msg === "$hands_on") {
    msg.reply(
      `Get ready for an unforgettable, hands-on journey where you'll transform your wildest game ideas into reality. But wait – there's more! We're granting you the opportunity to craft your very own game under our guidance, which you can showcase on our website. As we guide you step by step, immerse yourself in the process and witness your masterpiece come to life. Check out our website for inspiration from "Inertia" at https://trinity2024.tech`
    );
  }

  if (parsed_msg === "$prerequisites") {
    msg.reply(`"Whether you're a complete beginner or a seasoned pro,our event is tailored to embrace everyone. While basic knowledge of React and JavaScript is beneficial, it's your dedication to learning that sets you apart. We're here to transform your enthusiasm into expertise,, guiding you on a thrilling adventure of learning and creation. 
P.S (Zoe) - You get a cookie if u bring pokemon cards :> `);
  }

  if (parsed_msg === "$venue") {
    msg.reply(`The boot camp is scheduled on 24th feb 2024 and it will be conducted in Computer Department. Time : 9:00 am to 4:00 pm.
- Be on time or I will personally make sure to not let you in. ~ Love, Zoe`);
  }

  if (parsed_msg === "$reg_fee") {
    msg.reply(
      `Fear not, intrepid learner. This event is not a pay 2 win unlike FIFA or Clash of Clans.. those freaking money hungry developers. Simply bring forth your enthusiasm and dedication to learn, for there is no registration fee for this event. `
    );
  }

  if (parsed_msg === "$resources") {
    msg.reply(`Ah, I've got just the thing! Check out these top-notch online resources for diving deep into JavaScript, React 3 Fiber, and GitHub:

JavaScript:
- MDN Web Docs (https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

React 3 Fiber 
- PMNDRS (https://docs.pmnd.rs/)

3D Graphics Basics
- WebGL fundamentals (https://webglfundamentals.org/)
- MDN Web Docs (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)

GitHub:
- GitHub Guides (https://docs.github.com/en/)

These resources can help you get started with the basics of each technology and provide a foundation for further learning and exploration. Additionally, attending events such as the one described can offer hands-on experience, practical applications, and the opportunity to connect with other individuals in the field.`);
  }

  if (parsed_msg === "$advice") {
    msg.reply(`Yes, here are some tips to prepare for and make the most of the event:

1. Familiarize yourself with the event's agenda and the technologies that will be covered (JavaScrip and React).

2. Brush up on the basics of JavaScript and React if you need a refresher.

3. Create a free account on GitHub if you don't already have one.

4. Get familiar with basic Git commands, the version control system used by GitHub.

5. Come prepared with questions, and take advantage of any opportunities to ask questions and interact with the presenters.

6. Take note of any resources mentioned during the event, such as online tutorials and guides, for future reference.

7. Practice applying the concepts and techniques covered in the event by working on personal projects or contributing to open-source projects.
Finally, be open-minded and actively participate in the event to gain the most out of it.
Another P.S. (Zoe) - When life gives you lemonade, you make lemons...`);
  }

  if (parsed_msg === "$git_help") {
    msg.reply(
      "Sure, I'd be happy to help you with installing Git on your system. What operating system are you using (e.g. Windows, MacOS, Linux)? This information will help me guide you in the correct direction for installation. Specify it by writing the following text in message. `$git-mac` OR `$git-windows` OR `$git-linux`."
    );
  }

  if (parsed_msg === "$thankyou") {
    msg.reply(
      "Your welcome novice attendee. Have fun at the event and dont forget to credit me when u go on stage."
    );
  }

  if (parsed_msg === "$git-mac") {
    msg.reply(`You can install Git on your MacOS using the following steps:

🔹 Install Xcode Command Line Tools: Open the Terminal application and type the following command: xcode-select --install. This will install the Xcode Command Line Tools, which includes Git.

🔹 Install Homebrew: Homebrew is a package manager for MacOS that makes it easy to install Git and other software. Open Terminal and run the following command to install Homebrew: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

🔹 Install Git using Homebrew: After installing Homebrew, you can install Git by running the following command in Terminal: brew install git

🔹 Verify the installation: To verify the installation, run the following command in Terminal: git --version. This should display the version of Git that was installed on your system.

If you encounter any issues during the installation process, or if you would like further assistance, feel free to ask to our @moderator they will help you.`);
  }

  if (parsed_msg === "$git-windows") {
    msg.reply(`To install Git on Windows, follow these steps:

🔹 Download the latest version of Git from the official website: https://git-scm.com/downloads

🔹 Run the installer and follow the on-screen instructions.

🔹 Choose the components you want to install and the destination folder.

🔹 Configure your Git settings using the command line or Git GUI.
Verify the installation by opening the command line and typing "git --version".

These are the basic steps for installing Git on Windows. If you encounter any issues during the installation process, or if you would like further assistance, feel free to ask to our @moderator they will help you.`);
  }

  if (parsed_msg === "$git-linux") {
    msg.reply(`To install Git on Linux, follow the steps below:

🔹 Open the terminal and run the following command to check if Git is already installed:

🔹 git --version

🔹 If Git is not installed, run the appropriate command based on your Linux distribution:

 - Ubuntu/Debian: sudo apt-get install git
 - Fedora/CentOS: sudo yum install git
 - Arch Linux: sudo pacman -S git
 
Verify the installation by checking the version of Git again:
git --version. If you encounter any issues during the installation process, or if you would like further assistance, feel free to ask to our @moderator they will help you.`);
  }
});

const key = process.env["TOKEN"];

keepLive();
client.login(key);

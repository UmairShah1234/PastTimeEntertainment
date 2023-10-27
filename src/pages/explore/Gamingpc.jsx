import React from "react";
import ProductPage from "../../components/ProductPage";
import img from '../../assets/1.png'

const Gamingpc = () => {
  const keypoints = [
    "Game Library: PC gaming boasts a vast and diverse game library. Gamers have access to a wide range of titles, including AAA games, indie games, retro classics, and emulators for older consoles.",
    "Graphics and Performance: PCs can provide superior graphics and performance compared to consoles. High-end GPUs and CPUs allow for high-quality visuals, high frame rates, and support for advanced graphical features like ray tracing.",
    "Online Multiplayer: Online multiplayer gaming is a significant part of PC gaming. Gamers can connect with others worldwide for competitive or cooperative gaming experiences. Online platforms like Steam and Discord facilitate this.",
    "Hardware Flexibility: PC gaming allows gamers to customize and upgrade their gaming hardware to meet their specific preferences and needs. Gamers can choose their CPU, GPU, RAM, storage, and peripherals, tailoring their system for optimal performance and experience.",
    "Esports and Competitive Gaming: PC gaming is at the forefront of competitive gaming, with many esports titles played professionally on PCs. Popular esports titles include League of Legends, Dota 2, Counter-Strike: Global Offensive, and Overwatch.",
  ];
  const about =
    "PC gaming, or personal computer gaming, refers to the activity of playing video games on a personal computer. It has been a popular form of gaming for decades and offers numerous advantages and features that set it apart from other gaming platforms.";

  const usageText =
    "The usage of a gaming PC is centered around playing video games on a personal computer optimized for gaming performance. However, gaming PCs can serve various other purposes and activities beyond gaming. Here are some common uses of a gaming PC:";

  const usage = [
    "Playing Video Games: The primary purpose of a gaming PC is to play video games. Gamers can enjoy a wide variety of titles, ranging from graphically demanding AAA games to indie games and classic retro titles.",
    "Platform Diversity: PC gaming is incredibly diverse and not limited to a single platform or manufacturer. Gamers can play on Windows-based PCs, Macs, or even Linux systems, depending on the game's compatibility.",
    "Single-Player and Storytelling: PC games are known for their strong single-player experiences and storytelling. Titles like The Witcher 3, Skyrim, and Mass Effect are celebrated for their immersive narratives and character development.",
    "Community and Forums: PC gaming communities are active and supportive, with dedicated forums, subreddits, and social media groups where gamers can share experiences, seek help, and discuss their favorite titles.",
    "Hardware Customization: PC gamers can build or customize their gaming rigs to suit their preferences and needs. This flexibility allows for a personalized gaming experience.",
  ];

  const faqs = [
    {
      number: "One",
      question: "What is PC gaming?",
      answer:
        "PC gaming refers to playing video games on a personal computer, including desktops and laptops. It encompasses a wide range of gaming genres and experiences.",
    },
    {
      number: "Two",
      question: "Do I need a powerful gaming PC to play games?",
      answer:
        "The level of PC performance required depends on the specific game you want to play. Some games can run on low-end hardware, while others demand high-end gaming rigs for optimal performance and graphics quality.",
    },
    {
      number: "Three",
      question:
        "What operating system is best for PC gaming?",
      answer:
        "Most PC games are designed for Windows operating systems (e.g., Windows 10 or Windows 11), but there are also games compatible with macOS and Linux. Windows is the most widely used OS for gaming due to its extensive game library.",
    },
    {
      number: "Four",
      question: "How can I join the PC gaming community and find gaming friends?",
      answer:
        "You can join online gaming communities, forums, and social media groups dedicated to PC gaming. Platforms like Steam and Discord also offer features for connecting with friends and finding gaming groups.",
    },
    {
      number: "Five",
      question:
        "What is the difference between PC gaming and console gaming?",
      answer:
        "PC gaming offers more hardware customization options, a wider game library, better graphics and performance potential, and a thriving modding community. Console gaming, on the other hand, provides a more standardized and user-friendly experience.",
    },
  ];
  return (
    <div>
      <ProductPage
        title={"Gaming PC"}
        keypoints={keypoints}
        about={about}
        usageText={usageText}
        usage={usage}
        faqs={faqs}
        img={img}
      />
    </div>
  );
};

export default Gamingpc;

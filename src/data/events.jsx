const events = {
  Ar_Sports: {
    img: [
      "/assets/Simply Gaming Event Galleria/AR Sports Experience/IMG20221120192100.jpg",
      "/assets/Simply Gaming Event Galleria/AR Sports Experience/IMG20221121120512.jpg",
    ],
    title: "AR Sports Experience",
    desc: "An AR (Augmented Reality) event experience is an immersive and interactive encounter that combines the physical world with digital elements to provide attendees with a unique and engaging event.",
    center:{ lat:19.074645, //Mumbai
      long:72.8772066
     }
  },

  Flight_Simulator: {
    img: [
      "/assets/Simply Gaming Event Galleria/Gaming PC Setup/IMG-20230901-WA0007.jpg",
      "/assets/Simply Gaming Event Galleria/AR Sports Experience/IMG20221120192100.jpg",
      "/assets/Simply Gaming Event Galleria/Gaming PC Setup/IMG-20220731-WA0005.jpg",
    ],
    title: "Flight Simulator",
    desc: " A flight simulator event experience combines the excitement of aviation with the interactive and immersive nature of flight simulators. These events are designed to provide participants with a realistic and memorable simulation of piloting an aircraft",
   center:{ lat:18.5203924,   //pune
    long:73.8566421
   }
  },
  // Gaming_PC: {
  //   img: [
  //     "/assets/Simply Gaming Event Galleria/Gaming PC Setup/IMG-20220713-WA0002.jpg",
  //     "/assets/Simply Gaming Event Galleria/Gaming PC Setup/IMG-20230901-WA0007.jpg",
  //     "/assets/Simply Gaming Event Galleria/Gaming PC Setup/IMG-20220731-WA0005.jpg",
  //     "/assets/Simply Gaming Event Galleria/Gaming PC Setup/IMG-20230901-WA0013.jpg",
  //     "/assets/Simply Gaming Event Galleria/Gaming PC Setup/IMG_20230618_004415.jpg",
  //   ],
  //   title: "Gaming PC Setup",
  //   desc: "A gaming PC event experience is an immersive gathering or exhibition centered around gaming, PC hardware, and the gaming community. These events can vary in scale from small local meetups to large conventions and provide attendees with opportunities to explore the latest gaming technologies, play video games, interact with industry professionals, and connect with fellow gamers",
  // },
  Mario_Kart: {
    img: [
      "/assets/Simply Gaming Event Galleria/PlayStation 4-5/IMG-20220407-WA0001.jpg",
      "/assets/Simply Gaming Event Galleria/Gaming PC Setup/IMG-20230901-WA0013.jpg",
      "/assets/Simply Gaming Event Galleria/Gaming PC Setup/IMG-20230901-WA0007.jpg",
      "/assets/Simply Gaming Event Galleria/Gaming PC Setup/IMG-20220731-WA0005.jpg",
    ],
    center:{ lat:12.9716448, //bangalorr
      long:77.594554
     },
    title: "Mario Kart Racing",
    desc: "A Mario Kart racing experience is an exciting and immersive event or attraction inspired by the popular Mario Kart video game series developed by Nintendo.",
  },
  PlayStation: {
    img: [
      "/assets/Simply Gaming Event Galleria/PlayStation 4-5/IMG-20220303-WA0024.jpg",
      "/assets/Simply Gaming Event Galleria/PlayStation 4-5/IMG-20220306-WA0012.jpg",
      "/assets/Simply Gaming Event Galleria/PlayStation 4-5/IMG-20220407-WA0001.jpg",
      "/assets/Simply Gaming Event Galleria/PlayStation 4-5/IMG-20220407-WA0003.jpg",
      "/assets/Simply Gaming Event Galleria/PlayStation 4-5/IMG_20211224_182632.jpg",
    ],
    title: "PlayStation 4/5",
    desc: "PlayStation events are gatherings or exhibitions organized by Sony Interactive Entertainment to showcase the latest developments, games, and hardware related to the PlayStation gaming platform.",
    center:{ lat:28.6862419, //delhi
      long:77.221145
     }
  },
  Racing_Simulator: {
    img: [
      "/assets/Simply Gaming Event Galleria/Racing Simulator/IMG_20230526_124125.jpg",
      "/assets/Simply Gaming Event Galleria/Racing Simulator/20230811_131650.jpg",
      "/assets/Simply Gaming Event Galleria/Racing Simulator/IMG-20230804-WA0014.jpg",
      "/assets/Simply Gaming Event Galleria/Racing Simulator/IMG-20230906-WA0000.jpg",
      "/assets/Simply Gaming Event Galleria/Racing Simulator/IMG_20220703_191203.jpg",
    ],
    center:{ lat:17.3850592, //Hyderabad
      long:78.4867188
     },
    title: "Racing Simulator",
    desc: "A racing simulator event experience is a gathering or exhibition that provides participants with an opportunity to immerse themselves in the world of motorsports and experience the thrill of racing through the use of high-quality racing simulators.",
  },
  Virtual_Reality: {
    img: [
      "/assets/Simply Gaming Event Galleria/Virtual Reality Experience/VR + Car Driving Experience/IMG-20230709-WA0005.jpg",
      "/assets/Simply Gaming Event Galleria/Virtual Reality Experience/VR Beat Saber/IMG-20230609-WA0006.jpg",
      "/assets/Simply Gaming Event Galleria/Virtual Reality Experience/VR Beat Saber/IMG-20230706-WA0002.jpg",
      "/assets/Simply Gaming Event Galleria/Virtual Reality Experience/VR Beat Saber/IMG_20230809_164434.jpg",
      "/assets/Simply Gaming Event Galleria/Virtual Reality Experience/VR Cricket Experience/IMG_20230617_165033.jpg",
      "/assets/Simply Gaming Event Galleria/Virtual Reality Experience/VR Rollercoaster Experience/IMG_20230121_151214.jpg",
      "/assets/Simply Gaming Event Galleria/Virtual Reality Experience/Walk the Plank Experience/IMG_20230809_164407.jpg",
      "/assets/Simply Gaming Event Galleria/Virtual Reality Experience/Walk the Plank Experience/IMG_20230809_164423.jpg",
    ],
    title: "Virtual Reality Experience",
    desc: "A VR (Virtual Reality) gaming event experience is a gathering or exhibition that allows participants to explore immersive and interactive virtual worlds using VR technology.",
    center:{ lat:23.0225215, //ahmedabad
      long:72.5713381
     }
  },
  // Retro_Gaming: {
  //   img: [
  //     "/assets/Simply Gaming Event Galleria/Racing Simulator/20230811_131650.jpg",
  //     "/assets/Simply Gaming Event Galleria/Racing Simulator/IMG-20230906-WA0000.jpg",
  //     "/assets/Simply Gaming Event Galleria/Racing Simulator/IMG-20230804-WA0014.jpg",
  //     "/assets/Simply Gaming Event Galleria/Virtual Reality Experience/VR Cricket Experience/IMG_20230617_165033.jpg",
  //     "/assets/Simply Gaming Event Galleria/Virtual Reality Experience/VR Rollercoaster Experience/IMG_20230121_151214.jpg",
  //     "/assets/Simply Gaming Event Galleria/Virtual Reality Experience/Walk the Plank Experience/IMG_20230809_164407.jpg",
  //     "/assets/Simply Gaming Event Galleria/Virtual Reality Experience/Walk the Plank Experience/IMG_20230809_164423.jpg",
  //   ],
  //   title: "Retro Gaming Exprience",
  //   desc: "A retro gaming event experience is a celebration of classic video games, consoles, and gaming culture from past decades. These events provide a nostalgic journey for attendees, offering the opportunity to play vintage games, explore gaming history, and connect with fellow retro gaming enthusiasts. ",
  // },
};
// const locations ={
//   Mumbai: {
//     lat:19.097836021741266,
//     long:72.87460290456298
//   },
//   Pune: {
//     lat:19.097836021741266,
//     long:72.87460290456298
//   },
//   Bangalore: {
//     lat:19.097836021741266,
//     long:72.87460290456298
//   },
// }
export default events;

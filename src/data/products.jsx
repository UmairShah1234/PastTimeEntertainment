// import box from "/dist/assets/VR Boxing 1V1.png";
// import race from "/dist/assets/AR RC Racing.png";
// import arcade from "/dist/assets/Arcade Gaming.png";
// import arsports from "/dist/assets/AR Sports.png";
// import F1simulator from "/dist/assets/F1 Simulator.png";
// import oculus from "/dist/assets/1.png";
// import retrogaming from "/dist/assets/Retro Gaming.png";
// import vrboxing from "/dist/assets/VR Boxing 1V1.png";
// import cricket from "/dist/assets/VR Cricket.png";
// import golf from "/dist/assets/VR Golf.png";
// import roller from "/dist/assets/VR Rollercoaster.png";
// import plank from "/dist/assets/VR Plank.png";
// import img from '/dist/assets/Flight Sim.png';

const products = [
  {
    id: 1,
    img: "/dist/assets/VR Cricket-05d4124d.png",
    title: "VR Cricket",
    path: "vrcricket",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",
  },
  {
    id: 2,
    img: "/dist/assets/F1 Simulator-4a2e4743.png",
    path: "F1simulator",
    title: "F1 Simulator VR",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",
  },
  {
    id: 3,
    img: "/dist/assets/Flight Sim-0a7178f4.png",
    title: "Flight Simulator",
    path: "Flightsimulator",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",
  },
  {
    id: 4,
    img: "/dist/assets/VR Plank-c02a698e.png",
    path: "Walktheplank",
    title: "Walk the Plank",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",
  },
  {
    id: 5,
    img: "/dist/assets/AR Sports-8fd9ae85.png",
    title: "AR Sports ",
    path: "arSports",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",
  },
  {
    id: 6,
    img: "/dist/assets/VR Rollercoaster-30db7f72.png",
    title: "VR Rollercoaster ",
    path: "Vrrollercoaster",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",
  },
  {
    id: 7,
    img: "/dist/assets/AR RC Racing-85c3ea18.png",
    title: "AR RC Racing",
    path: "ArRacing",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",
  },
  {
    id: 8,
    img: "/dist/assets/Arcade Gaming-33fc34fb.png",
    title: "Arcade Gaming",
    path: "Arcadegaming",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",
  },
  {
    id: 9,
    img: "/dist/assets/Retro Gaming-7622eac0.png",
    title: "Retro Gaming",
    path: "Retrogaming",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",
  },
  {
    id: 10,
    img: "/dist/assets/VR Boxing 1V1-75ef058b.png",
    title: "VR Boxing 1v1",
    path: "Vrboxing",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",
  },
  {
    id: 11,
    img: "/dist/assets/VR Golf-f76ce2ad.png",
    title: "VR Golf",
    path: "Vrgolf",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",
  },
  {
    id: 12,
    img: "/dist/assets/1-af889a08.png",
    title: "Gaming PC",
    path: "Gamingpc",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",
  },
  // {
  //   id: 13,
  //   img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   title: "Console Gaming",
  //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditatenihil illo incidunt officiis iusto! Excepturi vero nisi molestiae doloribus illum repudiandae, dolorem omnis, numquam reprehenderiteaque sed commodi voluptatem sit!",

  // },
];

export default products;

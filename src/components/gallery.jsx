// src/components/Gallery.jsx
import React from "react";
import { Link } from "react-router-dom";

// Full list of portfolio images with a 'slug' for URL routing
export const portfolioImages = [
  {
    src: "assets/icon/blood.png",
    name: "Red and White",
    slug: "aw_redandwhite",
    year: "2025",
    category: "Software Art",
    description:
      "“Red and White” is a critical software artwork that visually interprets the internal struggle of individuals with G6PD deficiency. It contrasts healthy red blood cells with their chaotic breakdown during hemolysis, a process triggered by oxidative stress. The piece transforms this invisible biological event into a dynamic visual experience, where ordered red particles burst into turbulent white and pale hues...",
  },
  {
    src: "assets/icon/liverguardian.png",
    name: "Liver Guardian - Paracetamol Overdose Challenge",
    slug: "aw_liverguardian",
    year: "2025",
    category: "Game Development",
    description:
      "A multiplayer online game created to help biomedical science students understand the concept of liver damage caused by paracetamol overdose. Players navigate a human factory environment, routing paracetamol metabolites to correct detoxification pathways like glucuronide or sulphate conjugation...",
  },
  {
    src: "assets/icon/encage.png",
    name: "Encage",
    slug: "aw_encage",
    year: "2025",
    category: "Software Art",
    description:
      "“Encage” is a critical software art created in p5.js that explores the emotions of those who have been illegally imprisoned and subjected to cruel treatment. They remain confined and unable to escape, even when freedom is just a single wall away. This confinement is not solely physical. It also reflects deep-seated psychological and systemic forces that continue to imprison them...",
  },
  {
    src: "assets/icon/plab.png",
    name: "Electronic Practical Lab Simulator Platform",
    slug: "aw_plab",
    year: "2024 – Ongoing",
    category: "Game Development",
    description:
      "The lab simulator is an e-learning platform designed for pharmacy students at The Chinese University of Hong Kong, specifically for the PHAR2212 - Dosage Form Science II course. This simulation game allows students to repeatedly practice key laboratory procedures at their convenience, enhancing learning efficiency...",
  },
  {
    src: "assets/icon/lostinthelife.png",
    name: "Lost in the Life",
    slug: "aw_lostinthelife",
    year: "2024",
    category: ["Software Art", "Interactive Art"],
    description:
      "“Lost in the Life” is a critical software art piece in p5.js that explores the unavoidable experience of losing direction or purpose throughout life. The work begins with particles forming a soul, symbolizing the start of life and referencing the butterfly effect and the ancient butterfly dream to convey impermanence...",
  },
  {
    src: "assets/icon/adaptiveworld.png",
    name: "Adaptive World",
    slug: "aw_adaptiveworld",
    year: "2024 – Ongoing",
    category: "Game Development",
    description:
      "Adaptive World is a 3D survival game project based on the concepts of adaptive radiation in evolutionary biology. Players control a Darwin’s finch, managing its health by collecting food to survive the challenging environment of the Galápagos Islands. The game teaches natural selection as players evolve their finch, gaining new abilities through special items that reflect how species adapt to challenges like food shortages and predators...",
  },
  {
    src: "assets/icon/karma.png",
    name: "Karma",
    slug: "aw_karma",
    year: "2024",
    category: "Microcinema",
    description:
      "A concise horror microcinema depicting the fatal consequences of a young man's consistently poor behavior. The story builds as his rude encounters, particularly with a mysterious woman who warns him of his bad character, escalate into increasingly ominous supernatural appearances...",
  },
  {
    src: "assets/icon/roboticheart.png",
    name: "Robotic Heart",
    slug: "aw_roboticheart",
    year: "2024",
    category: "Generative Art",
    description:
      "“Robotic Heart” is an intricate 3D interpretation of Piet Mondrian’s iconic “Composition with Red, Blue and Yellow.” This generative art merges the principles of Mondrian’s abstract style with science fiction themes, utilizing the subdivision algorithm to bring the piece to life, just like a robotic heart...",
  },
  {
    src: "assets/icon/whiteechoes.png",
    name: "White Echoes",
    slug: "aw_whiteechoes",
    year: "2023",
    category: ["Generative Art", "Interactive Art"],
    description:
      "An interactive music player that adopts generative art techniques in p5.js and p5.sound to create a dynamic visual experience synchronized with songs and audio. It includes user-controlled audio input and GUI functions for music track selection. The experience comprises two layers—a background of horizontal ellipses that acts as a reset, and an abstract foreground generated by analyzing audio frequencies via FFT...",
  },
  {
    src: "assets/icon/poisedperfection.png",
    name: "Poised Perfection",
    slug: "aw_poisedperfection",
    year: "2023",
    category: "Installation",
    description:
      "This temporary installation art piece is a self-stabilizing structure built without adhesive, relying instead on physical theory to balance its components. It repurposes everyday objects and kitchenware, along with a bar stool chair from a school workshop. Key elements include a modified bar stool combined with a wood board and wok shovel...",
  },
  {
    src: "assets/icon/namshanestate.png",
    name: "Nam Shan Estate",
    slug: "aw_namshanestate",
    year: "2023",
    category: "Computer Graphics",
    description:
      "A 3D computer graphic model of Nam Shan Estate was created as the cover page for one of the community maps developed for CityU's Servant Leadership Training Programme—Friendly Neighbour. During a one-year volunteer program, I conducted community site visits near CityU to build connections with local residents through various services...",
  },
  {
    src: "assets/icon/cmc.png",
    name: "CMC",
    slug: "aw_cmc",
    year: "2022",
    category: ["Animation", "Computer Graphics"],
    description:
      "“CMC” is a 3D computer graphics and animation project created for the SCM General Office to support school admission promotion. I modeled the CMC building's main gate as the environment, and I designed the SCM text to glow when the camera character activates the energy tank in the machine...",
  },
  {
    src: "assets/icon/woodlogcake.png",
    name: "Wood Log Cake",
    slug: "aw_woodlogcake",
    year: "2022",
    category: "Concept Art",
    description:
      "During the COVID-19 pandemic, this project shifted to a proposal format, focusing on creating a 3D model and scanned replica of a wood part. The core idea is to explore how the meaning of a work changes when replicated with new materials, specifically by creating a cake that imitates a wood log...",
  },
  {
    src: "assets/icon/evilqueen.png",
    name: "The Resurrection of Evil Queen",
    slug: "aw_evilqueen",
    year: "2022",
    category: "Animation",
    description:
      "This new scene continues the story of the Evil Queen from Snow White, whose fate after falling off a cliff remains uncertain due to her witchcraft and followers. After a period where tombstones are built in her memory, a clown wizard in the castle initiates a resurrection ceremony...",
  },
  {
    src: "assets/icon/neuroblocks.png",
    name: "Neuroblocks",
    slug: "aw_neuroblocks",
    year: "2022",
    category: "Concept Art",
    description:
      "An interactive installation concept which combines 3D printing and animation to create a data visualization artwork based on the concept from Han's book, 'Burnout Society' (2015). The device will instantly detect the participants’ heartbeats and print through the audience’s participation...",
  },
  {
    src: "assets/icon/aims.png",
    name: "A.I.M.S",
    slug: "aw_aims",
    year: "2022",
    category: "Animation",
    description:
      "The fictional station-ID animation sequence features an 'A'-shaped fighter jet landing, a robot phoenix disintegrating and reassembling into 'I' and 'M' IDs, and Daruma dolls propelling an 'S'-shaped element that combines to form the full AIMS ID...",
  },
  {
    src: "assets/icon/mappm.png",
    name: "MAPPM Program Leaflet",
    slug: "aw_mappm",
    year: "2021",
    category: ["Leaflet Design", "Computer Graphics"],
    description:
      "An abstract low-poly 3D model of an executive mansion was created using MEL scripting for the cover page of a Master of Arts in Public Policy and Management (MAPPM) leaflet. The model is designed to symbolize the authority, structure, and formality associated with public institutions...",
  },
  {
    src: "assets/icon/cuberangers.png",
    name: "Cube Rangers",
    slug: "aw_cuberangers",
    year: "2021",
    category: "Animation",
    description:
      "A MEL script generates approximately a thousand poly cubes on the surface of a given model, creating a layered and abstract form. These cubes were divided into five color-coded groups (white, red, blue, green, yellow), inspired by Japanese robot transformations...",
  },
  {
    src: "assets/icon/phantomrabbit.png",
    name: "Phantom Rabbit",
    slug: "aw_phantomrabbit",
    year: "2021",
    category: "Animation",
    description:
      "One minute 2D cut-out animation tells the story of a rabbit hero who transforms into a demon in the city. It uses fundamental animation techniques such as walk cycles, jumping, and a bouncing ball, and expresses dark emotions through a purple color palette...",
  },
  {
    src: "assets/icon/voiceswithin.png",
    name: "Voices Within",
    slug: "aw_voiceswithin",
    year: "2021",
    category: "Microcinema",
    description:
      "A mixed microcinema explores a girl’s suffering from a dissociative identity disorder (DID) who went into the drainage tunnel to commit suicide. Her personality was constantly changing during the period. Each personality is communicating and arguing, and the animation part will represent the girl's inner world...",
  },
  {
    src: "assets/icon/amdusuas.png",
    name: "Amduscias: The Marked Ones",
    slug: "aw_amdusuas",
    year: "2020",
    category: "Computer Graphics",
    description:
      "The microcinema poster is featuring demon marks and a shadowy 3D model of Amduscias to set a chilling mood. However, the film's synopsis tells the grim story of Parker Wilkinson, who sacrifices his son's adult body to the demon Amduscias for a miraculous musical career. Decades later, his children...",
  },
  {
    src: "assets/icon/veiledtrading.png",
    name: "Veiled Trading",
    slug: "aw_veiledtrading",
    year: "2018",
    category: "Generative Art",
    description:
      "This work explores the contrast between transparency and corruption in finance. In the background, dozens of small white currency symbols appear clear and unobstructed, suggesting an ideal, open system. In the foreground, oversized symbols loom blurred and indistinct, evoking the hidden, pervasive nature of corruption...",
  },
];

const Gallery = ({ onHoverImage }) => {
  // Vite’s base public path ("/website/" in prod)
  const base = import.meta.env.BASE_URL;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {portfolioImages.map((image, index) => (
        <Link to={`/works/${image.slug}`} key={index}>
          <div
            className="group relative aspect-square overflow-hidden cursor-pointer"
            onMouseEnter={() => onHoverImage(image)}
          >
            {/* Thumbnail */}
            <img
              className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-110"
              src={`${base}${image.src}`}
              alt={image.name}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              <div className="text-center text-white px-4">
                <p className="text-base font-bold">{image.name}</p>
                <p className="text-xs font-semibold opacity-90">
                  {Array.isArray(image.category)
                    ? image.category.join(" & ")
                    : image.category}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;

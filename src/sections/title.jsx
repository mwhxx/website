export default function Title() {
  return (
    <section className="py-16 text-left">
      <h1
        style={{
          textShadow:
            "0 0 4px rgba(255,255,255,0.9), " +
            "0 0 8px rgba(255,255,255,0.8), " +
            "0 0 16px rgba(255,255,255,0.6)",
        }}
        className="
          text-[3rem]           /* 3 rem on mobile */
          md:text-[3.5rem]      /* 3.5 rem on md */
          lg:text-[4rem]        /* 4 rem on lg */
          [@media(max-width:1500px)]:lg:text-[3rem]
          font-extrabold
          text-white
        "
      >
        ENCAGE
      </h1>
      {/* Highlighted artwork subtitle with reduced top margin */}
      <h2
        className="
          -mt-4                  /* reduced gap */
          text-[1.5rem]
          md:text-[1.75rem]
          lg:text-[1rem]
          [@media(max-width:1500px)]:lg:text-[0.8rem]
          font-semibold
          text-white/80
        "
      >
        /HIGHLIGHTED ARTWORK
      </h2>
      <p
        style={{
          fontFamily: "'Lucida Sans Unicode', 'Andale Mono', 'Lucida Grande'",
        }}
        className="
          mt-4
          max-w-[32rem]         /* cap paragraph at 32 rem */
          [@media(max-width:1500px)]:max-w-[22rem] 
          text-[0.8rem]         /* 0.8 rem body text */
          [@media(max-width:1500px)]:lg:text-[0.7rem]
          text-neutral-300
          text-justify
          [text-align-last:left]
        "
      >
        “Encage” is a critical software art created in p5.js that explores the
        emotions of those who have been illegally imprisoned and subjected to
        cruel treatment. They remain confined and unable to escape, even when
        freedom is just a single wall away. This confinement is not solely
        physical. It also reflects deep-seated psychological and systemic forces
        that continue to imprison them.
        <br />
        <br />
        A group of particles combines into a sprite to represent the human soul
        and wanders randomly across the rectangle canvas. On the first layer, a
        softly glowing grid of small rectangles and circles forms a transparent
        electronic wall. The wall overlaps, glows, shifts its pattern and always
        blocked the soul. It’s just like a human trying to escape the room but
        endlessly colliding with the wall and unable to find a way out.
        <br />
        <br />
        The wall becomes an omnipresent force, hindering the soul’s actions.
        Even the light within the grid appears complicit, illuminating not with
        hope but with surveillance. The soul’s futile motion creates a haunting
        rhythm, echoing the psychological torment of endless captivity.
        <br />
        <br />
        Feb 2025
      </p>
    </section>
  );
}

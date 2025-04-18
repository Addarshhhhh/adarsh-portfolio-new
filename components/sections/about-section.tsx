import { AsciiArt } from "@/components/ascii-art"
import { AsciiPortraitComparison } from "@/components/ascii-portrait-comparison"

export function AboutSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="about" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5">
        <img src="public/adarsh_.jpeg" alt="Adarsh Singh" className="rounded-lg w-full h-auto" />
          <div className="text-center text-xs text-muted-foreground mt-2">
            Adarsh Singh
            <br />
            <span className="text-primary/60">Software Development Engineer</span>
          </div>
        </div>

        <div className="space-y-3 md:w-3/5">
          <p>
          Hello! I'm Adarsh Singh, a Software Development Engineer with a strong focus on web development and software engineering. I bring expertise in building responsive user interfaces, optimizing backend systems, and deploying robust applications. My passion lies in crafting efficient, scalable solutions to complex challenges.
          </p>

          <p>
            With experience at Neurosynaptics and Noetic Logistiex, I focus on building efficient, user-friendly
            applications and implementing machine learning solutions.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Personal Bio:</h3>
            <div className="space-y-2 text-sm">
              <p>
                I'm someone who thrives on challenges and enjoys solving complex problems. I've solved over 300+
                problems on coding platforms like LeetCode and GeeksforGeeks.
              </p>

              <p>
                As a Technical Team Lead at MUKTI-FOSSCLUB, I've organized seminars advocating open-source tools and led
                teams on open-source projects ensuring quality code and deadlines.
              </p>

              <p>
                I'm passionate about creating efficient solutions and continuously learning new technologies to stay
                ahead in the rapidly evolving tech landscape.
              </p>
            </div>
          </div>

          <p>
            I'm dedicated to developing robust applications and implementing innovative solutions to complex problems.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Quick Facts:</h3>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-foreground">Location:</span> Bangalore, India
              </li>
              <li>
                <span className="text-muted-foreground">Education:</span> B.E. in EEE, Ramaiah Institute of Technology
                (RIT), CGPA: 7.43
              </li>
              <li>
                <span className="text-muted-foreground">Specialty:</span> Web Development, Machine Learning, Software
                Engineering
              </li>
              <li>
                <span className="text-muted-foreground">Email:</span> thisisadarshhh@outlook.com
              </li>
              <li>
                <span className="text-muted-foreground">Phone:</span> +918318996909
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


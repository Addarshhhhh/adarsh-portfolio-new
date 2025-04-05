import { AsciiArt } from "@/components/ascii-art"

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="experience" />

      <div className="space-y-6">
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Software Development Engineer</h3>
            <p className="text-xs text-muted-foreground">Neurosynaptics | Bangalore, India | February 2025 - Present</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Enhanced GE medical appliances, improving patient data handling and visualization</li>
            <li>Built a React vitals UI, cutting monitor navigation time by 45% for 500+ devices</li>
            <li>Optimized timestamp-based data retrieval via FastAPI, reducing retrieval time by 55%</li>
            <li>Improved real-time graphs with JSCharts, increasing accuracy by 60%</li>
            <li>Automated deployment workflows using Docker, streamlining feature releases</li>
            <li>Tech Stack: React, FastAPI, Docker, JavaScript, JSCharts</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Software Developer Intern</h3>
            <p className="text-xs text-muted-foreground">
              Noetic Logistiex | Bangalore, India | August 2023 - January 2024
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Trained a YOLOv8 model with 98%+ accuracy on 10,000+ images</li>
            <li>Developed an image transformation engine, increasing listing acceptance by 30%</li>
            <li>Automated web scraping via Selenium, collecting 1,200+ images, reducing manual effort by 80%</li>
            <li>Cut training time by 20% with OpenCV preprocessing and augmentations</li>
            <li>Tech Stack: Python, Selenium, YOLOv8, ChromeDriver, OpenCV</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Technical Team Lead</h3>
            <p className="text-xs text-muted-foreground">MUKTI-FOSSCLUB | Extracurricular</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Organized seminars advocating open-source tools and their adoption</li>
            <li>Led teams on open-source projects ensuring quality code and deadlines</li>
            <li>Conducted events on version control and collaborative coding</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


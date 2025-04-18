import { AsciiArt } from "@/components/ascii-art"

export function SkillsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="skills" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2">Programming Languages</h3>
          <div className="space-y-2">
            <SkillBar name="Python (3+ years)" percentage={60} />
            <SkillBar name="C/C++ (3+ years)" percentage={85} />
            <SkillBar name="SQL (3+ years)" percentage={70} />
            <SkillBar name="JavaScript (1+ years)" percentage={50} />
            <SkillBar name="HTML (1+ years)" percentage={70} />
            <SkillBar name="CSS (1+ years)" percentage={70} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Frameworks & Tools</h3>
          <div className="space-y-2">
            <SkillBar name="Node.js" percentage={65} />
            <SkillBar name="React" percentage={70} />
            <SkillBar name="MERN Stack" percentage={70} />
            <SkillBar name="MySQL" percentage={75} />
            <SkillBar name="FastAPI" percentage={60} />
            <SkillBar name="Docker" percentage={55} />
            <SkillBar name="Git" percentage={70} />
            <SkillBar name="REST APIs" percentage={70} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Concepts</h3>
          <div className="space-y-2">
            <SkillBar name="Data Structures and Algorithms" percentage={85} />
            <SkillBar name="Object-Oriented Programming (OOP)" percentage={85} />
            <SkillBar name="DBMS" percentage={80} />
            <SkillBar name="Web Development" percentage={85} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Soft Skills</h3>
          <div className="space-y-2">
            <SkillBar name="Problem Solving" percentage={80} />
            <SkillBar name="Collaboration" percentage={85} />
            <SkillBar name="Project Management" percentage={80} />
            <SkillBar name="Adaptability" percentage={85} />
            <SkillBar name="Time Management" percentage={80} />
            <SkillBar name="Communication" percentage={85} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} skill level: ${percentage}%`}
        />
      </div>
    </div>
  )
}


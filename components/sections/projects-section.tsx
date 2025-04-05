import { AsciiArt } from "@/components/ascii-art"

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Chess vs DeepSeek - Chess AI Analysis Tool</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | React       |---->| TypeScript     |---->| Vite           |
  | Components  |     | Type Checking  |     | Fast Builds    |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| ESLint       |<-------------+
                      | Code Quality |
                      +--------------+
                             |
                             v
                      +---------------+
                      | SWC           |
                      | Fast Refresh  |
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Built a React chess analysis tool with Vite for fast builds, integrated ESLint for type-aware linting and
            code quality, and configured React 18.3 with Fast Refresh via SWC.
          </p>
          <p className="text-xs text-muted-foreground mb-2">Technologies: React, TypeScript, Vite, ESLint</p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Fingerspell - ASL Translator</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | TensorFlow  |---->| OpenCV         |---->| Python         |
  | ML Models   |     | Computer Vision|     | Processing     |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        v                    v                      v
  +-------------+     +----------------+     +----------------+
  | Gesture     |---->| Text           |---->| User           |
  | Recognition |     | Translation    |     | Interface      |
  +-------------+     +----------------+     +----------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Developed an ASL Translator using Machine Learning and Computer Vision, utilizing TensorFlow and OpenCV for
            gesture recognition and text translation.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Python, TensorFlow, OpenCV, Machine Learning
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Google Gemini Clone - AI Chatbot Interface</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | React       |---->| JavaScript     |---->| Google Gemini  |
  | UI          |     | Logic          |     | API            |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        v                    v                      v
  +-------------+     +----------------+     +----------------+
  | Responsive  |---->| Real-time      |---->| AI-Generated   |
  | Design      |     | Feedback       |     | Responses      |
  +-------------+     +----------------+     +----------------+
`}
          </pre>
          <p className="text-sm mb-2">
            Built a chatbot UI in React, integrating Google Gemini API for AI-generated responses. Developed a
            responsive interface with React framework, ensuring smooth query handling and real-time feedback.
          </p>
          <p className="text-xs text-muted-foreground mb-2">Technologies: React, JavaScript, API Integration</p>
        </div>
      </div>
    </div>
  )
}


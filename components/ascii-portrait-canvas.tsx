"use client"

import { useEffect, useRef } from "react"

interface AsciiPortraitCanvasProps {
  width?: number
  height?: number
  contrast?: number
  brightness?: number
}

export function AsciiPortraitCanvas({
  width = 100,
  height = 120,
  contrast = 1.4,
  brightness = 0.7,
}: AsciiPortraitCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    // Create a default ASCII art pattern since we don't have an actual image
    const drawDefaultAsciiArt = () => {
      // Set up the main canvas
      canvas.width = width * 6
      canvas.height = height * 10

      // Clear canvas and set background
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // ASCII characters from darkest to lightest
      const asciiChars = ["@", "%", "#", "*", "+", "=", "-", ":", ".", " "]

      // Draw a simple pattern
      ctx.font = '8px "JetBrains Mono"'

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          // Create a pattern based on position
          const distFromCenter = Math.sqrt(
            Math.pow((x - width / 2) / (width / 2), 2) + Math.pow((y - height / 2) / (height / 2), 2),
          )

          // Map distance to character index
          const charIndex = Math.min(asciiChars.length - 1, Math.floor(distFromCenter * asciiChars.length))

          // Color gradient from center
          const hue = (distFromCenter * 180) % 360
          ctx.fillStyle = `hsl(${hue}, 70%, 60%)`

          // Draw character
          ctx.fillText(asciiChars[charIndex], x * 6, y * 10)
        }
      }
    }

    drawDefaultAsciiArt()
  }, [width, height, contrast, brightness])

  return (
    <div className="ascii-portrait-container flex justify-center my-4">
      <div className="relative group">
        <canvas
          ref={canvasRef}
          className="border border-primary/30 rounded shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
      </div>
    </div>
  )
}


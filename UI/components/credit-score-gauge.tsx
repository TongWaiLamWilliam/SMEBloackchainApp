"use client"

import { cn } from "@/lib/utils"

interface CreditScoreGaugeProps {
  score: number
  className?: string
}

export function CreditScoreGauge({ score, className }: CreditScoreGaugeProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-600"
    if (score >= 60) return "text-emerald-400"
    if (score >= 40) return "text-yellow-500"
    return "text-red-500"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    if (score >= 40) return "Fair"
    return "Bad"
  }

  const scoreColor = getScoreColor(score)

  return (
    <div className={cn("relative w-full max-w-md mx-auto", className)}>
      <svg
        viewBox="0 0 100 55"
        className="w-full transform"
      >
        {/* Background arcs */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          className="stroke-red-500"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="40 100"
          strokeDashoffset="0"
        />
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          className="stroke-yellow-500"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="20 100"
          strokeDashoffset="-40"
        />
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          className="stroke-emerald-400"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="20 100"
          strokeDashoffset="-60"
        />
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          className="stroke-emerald-600"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="20 100"
          strokeDashoffset="-80"
        />


      </svg>

      {/* Score ranges */}
      <div className="flex justify-between px-4 mt-4 text-sm">
        <div className="text-red-500">
          <div>0-39</div>
          <div>Bad</div>
        </div>
        <div className="text-yellow-500">
          <div>40-59</div>
          <div>Fair</div>
        </div>
        <div className="text-emerald-400">
          <div>60-79</div>
          <div>Good</div>
        </div>
        <div className="text-emerald-600">
          <div>80-100</div>
          <div>Excellent</div>
        </div>
      </div>

      {/* Current score */}
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 text-center">
        <div className={cn("text-3xl font-bold", scoreColor)}>{score}</div>
        <div className={cn("text-sm font-medium", scoreColor)}>{getScoreLabel(score)}</div>
      </div>
    </div>
  )
}


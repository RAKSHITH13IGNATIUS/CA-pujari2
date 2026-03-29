"use client"

import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/blocks/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"

const IMAGES = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2340&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2340&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2340&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
]

const HeroDemo1 = () => {
  return (
    <ContainerScroll className="h-[350vh] bg-[#F7F2E8]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl border border-[#A38970]/20"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt="Trading Market Experience"
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center flex flex-col items-center">
        <h1 className="max-w-xl text-5xl md:text-7xl font-extrabold tracking-tighter text-[#3E3730]">
          Master The Markets
        </h1>
        <p className="my-6 max-w-xl text-sm text-[#A38970] md:text-lg font-medium leading-relaxed">
          Dive deep into technical analysis, risk management, and trading psychology. 
          See the unseen with our advanced market charting frameworks.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button className="bg-[#D1AF62] text-white px-8 py-6 rounded-full font-bold text-lg hover:bg-[#C09E51] shadow-lg hover:shadow-[0_0_20px_rgba(209,175,98,0.5)] transition-all">
            Start Learning
          </Button>
          <Button
            variant="ghost"
            className="text-[#3E3730] px-8 py-6 rounded-full font-bold text-lg hover:bg-[#3E3730]/10 transition-colors"
          >
            View Curriculum
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

const HeroDemo2 = () => {
  return (
    <ContainerScroll className="h-[350vh] bg-white">
      <BentoGrid
        variant={"fourCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 3).map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              width="100%"
              height="100%"
              src={imageUrl}
              alt="Live Trading Analytics"
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center flex flex-col items-center">
        <h1
          className="max-w-xl text-5xl font-bold tracking-tighter text-[#3E3730]"
        >
          Data-Driven Decisions
        </h1>
        <p className="my-6 max-w-xl text-sm text-[#A38970] md:text-base font-medium">
          Leverage real-time analytics to understand market structures, support bands, and powerful continuation patterns.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-[#D1AF62] hover:bg-[#C09E51] text-white font-bold rounded-full px-6 py-4">
            Join Community
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

const HeroDemo3 = () => {
  return (
    <ContainerScroll className="h-[350vh] bg-[#3E3730] text-white">
      <BentoGrid
        variant={"threeCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 2).map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-2xl border border-white/10"
          >
            <img
              className="size-full object-cover object-center"
              width="100%"
              height="100%"
              src={imageUrl}
              alt="Trading Terminal View"
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center flex flex-col items-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-white">
          Institutional Insight
        </h1>
        <p className="my-6 max-w-xl text-sm opacity-80 md:text-base font-medium">
          No more guessing. Enter the market with the logic and conviction of an institutional professional.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-[#D1AF62] px-6 py-4 rounded-full font-bold hover:bg-[#C09E51] shadow-[0_0_20px_rgba(209,175,98,0.3)]">
            Explore Courses
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}
export { HeroDemo1, HeroDemo2, HeroDemo3 }

import { Suspense } from "react"
import {
  educationData,
  hobbiesData,
  responsibilitiesData,
  socialLinksData,
} from "@/data/sections-data"

// Import the client page component
import ClientPage from "@/components/client-page"

// Mark the page as a client component
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPage 
        educationData={educationData}
        hobbiesData={hobbiesData}
        responsibilitiesData={responsibilitiesData}
        socialLinksData={socialLinksData}
      />
    </Suspense>
  )
}
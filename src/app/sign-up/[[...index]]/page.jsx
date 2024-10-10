import { SignUp } from '@clerk/nextjs'
import HeaderFooter from "@/components/layout/headerFooter";

export default function Page() {
  return (
    <HeaderFooter>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px 0' }}>
        <SignUp />
      </div>
    </HeaderFooter>
  )
}
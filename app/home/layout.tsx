import Sidebar from '@/components/sidebar/Sidebar'
import NationsList from './components/HomeList'

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <NationsList />
      <div className="h-full">{children}</div>
    </Sidebar>
  )
}

import Sidebar from '@/components/sidebar/Sidebar'

export default async function LeagueLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="bg-secondary-black min-h-full lg:pl-20">{children}</div>
    </Sidebar>
  )
}

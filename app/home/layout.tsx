import Sidebar from '@/components/sidebar/Sidebar'

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="lg:pl-20">{children}</div>
    </Sidebar>
  )
}

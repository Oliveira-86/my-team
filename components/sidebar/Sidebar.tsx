import DesktopSidebar from './DesktopSidebar'
import MobileFooter from './MobileFooter'

export default async function Sidebar({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" h-full">
      <DesktopSidebar />
      <MobileFooter />
      {children}
    </div>
  )
}

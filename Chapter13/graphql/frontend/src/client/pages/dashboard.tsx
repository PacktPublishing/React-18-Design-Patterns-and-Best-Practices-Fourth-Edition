import DashboardLayout from '../components/dashboard/DashboardLayout'
import UserProvider from '../contexts/user'

const Page = () => (
  <UserProvider>
    <DashboardLayout />
  </UserProvider>
)

export default Page

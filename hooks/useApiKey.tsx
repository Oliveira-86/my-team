import { toast } from 'react-hot-toast'
import { redirect } from 'next/navigation'

const useApiKey = () => {
  const apiKey = localStorage.getItem('apiKey')
  if (apiKey) {
    return true
  }

  toast.error('Acesso negado')
  if (!apiKey) {
    redirect('/')
  }

  return <></>
}

export default useApiKey

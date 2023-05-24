'use client'

import Button from '@/app/components/Button'
import Input from '@/app/components/Input'
import { FC, useCallback, useEffect, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { fetchApi } from '@/app/actions/api'
import NavLink from '@/app/components/NavLink'

interface AuthFormProps {}

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm: FC<AuthFormProps> = ({}) => {
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const toggleVariant = useCallback(() => {}, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      api_key: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)

    try {
      const res = await fetchApi(data.api_key, 'countries')
      console.log('res: ', res)
      if (res.errors.endpoint || res.errors.token) {
        setIsLoading(false)
        toast.error(
          res.errors.endpoint ? res.errors.endpoint : res.errors.token
        )
        return
      }

      if (res.errors.length === 0) {
        toast.success('Acesso liberado!')
        setIsLoading(false)
        router.push('/dashboard')
      }
    } catch (error) {
      return toast.error('Erro interno!')
    }
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        className="
            bg-primary-black
            px-4
            py-8
            shadow
            shadow-slate-400
            sm:rounded-lg
            sm:px-10
          "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="api_key"
            label="Insira a chave api-football"
            type="password"
            register={register}
            required
            disabled={isLoading}
            errors={errors}
          />

          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === 'LOGIN' ? 'Acessar' : 'Register'}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                  absolute 
                  inset-0 
                  flex 
                  items-center
                "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-primary-black px-2 text-slate-100">
                Ou continue com
              </span>
            </div>
          </div>
        </div>
        <div
          className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-slate-100
          "
        >
          <div>
            {variant === 'LOGIN'
              ? 'Não tem sua chave?'
              : 'Already have an account?'}
          </div>
          <NavLink
            href="https://dashboard.api-football.com/register"
            name="Acessar site api-football"
          />
        </div>
      </div>
    </div>
  )
}

export default AuthForm

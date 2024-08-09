"use client";

import { Button } from "@/components/ui/button";
import * as wm from '@/components/writingMachine.svg';
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    const formData = new FormData();
    formData.append('content', data.content);
    formData.append('name', data.name);
    formData.append('company', data.company);
    formData.append('email', data.email);
    formData.append('phone', data.phone);

    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      });

      if (!response.ok) {
        setIsError(true);
      }

      setIsSubmitted(true);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id="contact" className="flex flex-col w-full items-center">
        <div className='w-full lg:w-1/3 lg:-mb-24 xl:-mb-32 2xl:-mb-48 max-w-2xl min-h-80 bg-white p-8 lg:pb-24 xl:pb-32 2xl:pb-48'>
          {
            isSubmitted && !isError && (
              <>
                <p className='w-full text-left font-mono'>Votre mail a bien été envoyé.</p>
                <p className='w-full text-right font-mono mt-24'>Merci à vous, Solenne Dauriac</p>
              </>
            )
          }
          {
            !isSubmitted && !isError && !isSubmitted && (
              <>
                <h2 className="font-mono">Chère Solenne,</h2>
                <textarea {...register("content", { required: true })} className={`min-h-20 font-mono text-sm w-full outline-none ${(errors.content && errors.content.type === "required") ? 'border-b-red-600 border-b-2' : 'border-b-orange-300 border-b'} mt-4`} placeholder='Ici, écrivez votre message, pour une mission, une proposition ou tout sujet vous tenant à coeur...' />
                <input type='email' {...register("email", { required: true })} className={`h-10 font-mono text-sm w-full outline-none ${(errors.email && errors.email.type === "required") ? 'border-b-red-600 border-b-2' : 'border-b-orange-300 border-b'} mt-4`} placeholder='Votre email' />
                <input {...register("name", { required: true })} className={`h-10 font-mono text-sm w-full outline-none ${(errors.name && errors.name.type === "required") ? 'border-b-red-600 border-b-2' : 'border-b-orange-300 border-b'} mt-4`} placeholder='Nom et prénom' />
                <input {...register("company")} className='h-10 font-mono text-sm w-full outline-none border-b border-b-orange-300 mt-4' placeholder='Votre entreprise' />
                <input {...register("phone")} className='h-10 font-mono text-sm w-full outline-none border-b border-b-orange-300 mt-4' placeholder='Votre numéro de téléphone' />
                <Button type='submit' size='lg' className='w-full mt-4 text-2xl py-6' disabled={isSubmitting}>{isSubmitting ? (
                <div role="status">
    <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>

                ) : 'Contactez-moi !'}</Button>
              </>
            )
          }
          {
            isError && (
              <p className='w-full text-left font-mono'>Désolé, il semble que ce formulaire ne fonctionne pas actuellement, rééssayez plus tard ou envoyez moi un mail a solenne.drc@gmail.com</p>
            )
          }
          </div>
          <Image className='hidden lg:block' src={wm} alt='writing machine' />
      </div>
    </form>
  )
}

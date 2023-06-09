'use client'

import { useCreateMemory } from '@/hooks/useCreateMemory'
import MediaUpload from './MediaUpload'
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('next/image'), { ssr: false })

const Form = () => {
  const {
    register,
    handleSubmit,
    setCustomValue,
    onSubmit,
    coverUrl,
    isSubmitting,
    errors,
  } = useCreateMemory()

  const regexMP4 = /\.(mp4)$/

  const isVideo = regexMP4.test(coverUrl)

  return (
    <form
      className="flex flex-1 flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center gap-4">
        <MediaUpload onChange={(value) => setCustomValue('coverUrl', value)} />
        <label
          htmlFor="isPublic"
          className="flex items-center gap-1.5 text-sm text-gray-200 transition-colors duration-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            id="isPublic"
            value="true"
            {...register('isPublic')}
            className="h-4 w-4 cursor-pointer rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Make public memory
        </label>
      </div>
      {isVideo && coverUrl && (
        <video
          src={coverUrl}
          controls
          muted
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
      {!isVideo && coverUrl && (
        <Image
          src={coverUrl}
          width={300}
          height={300}
          alt="Cover URL"
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
      <textarea
        {...register('content')}
        name="content"
        spellCheck="false"
        placeholder={
          errors.content?.message ??
          'Feel free to add photos, videos, and stories about that experience you want to remember forever.'
        }
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors duration-200 hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-green-950"
      >
        Save
      </button>
    </form>
  )
}
export default Form

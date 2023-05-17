import Link from 'next/link'

const EmptyMemories = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        You haven&apos;t registered any memories yet, starting{' '}
        <Link
          href=""
          className="underline transition-colors duration-200 hover:text-gray-50"
        >
          creating now
        </Link>
        !
      </p>
    </div>
  )
}

export default EmptyMemories

import Image from 'next/image'

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <Image
        src="/empty.gif"
        alt="No products available"
        className="w-60 h-60 object-contain mb-4"
        width={200}
        height={200}
      />
      <p className="text-gray-500 text-lg font-medium">На жаль, товарів не знайдено.</p>
    </div>
  )
}

export default EmptyState

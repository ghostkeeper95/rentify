import Image from 'next/image'

interface ProductImageProps {
  imageUrl?: string | null
  alt: string
}

export default function ProductImage({ imageUrl, alt }: ProductImageProps) {
  return (
    <div className="w-full h-72 rounded-t-lg overflow-hidden mb-3 relative grid place-items-center">
      <Image
        src={imageUrl || '/placeholder.jpg'}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full h-full object-contain rounded-t-lg"
        loading="lazy"
      />
    </div>
  )
}

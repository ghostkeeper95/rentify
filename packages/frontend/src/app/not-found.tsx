import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] bg-white">
      <h1 className="text-8xl font-bold text-pink-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-4">Сторінка не знайдена</p>
      <Link
        href="/"
        className="text-white bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded-lg transition"
      >
        Повернутися на головну
      </Link>
    </div>
  )
}

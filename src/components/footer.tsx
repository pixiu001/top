export function Footer() {
  return (
    <footer className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
      <div className="container mx-auto">
        <p>
          © {new Date().getFullYear()} 心尘博客 - All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

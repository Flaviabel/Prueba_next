export default function Layout ({ children }) {
  return (
    <html>
      <head><title>Mi titulo</title></head>
      <body>
        <header>
          <nav>
            <ul>
              <li>Home</li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}

import Menu from "../componentes/Menu";
import "./css/base.css";
export const metadata = {
  title: 'Modelos',
  description: 'Projeto Node.js com Next.js',
}

export default function RootLayout({ children }) {
  
    return (

      <html lang="en">
  
        <body>
  
          <header>
  
            <Menu />
  
          </header>
  
          <main>
  
            {children}
  
          </main>
  
          <footer>
  
            <p>Agência Florentina!</p>
  
          </footer>
  
        </body>
  
      </html>
  
    )
  
}

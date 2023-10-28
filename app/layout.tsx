import { Inter } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

const App = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default App;
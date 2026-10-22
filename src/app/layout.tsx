import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Case Shop — Make it yours',description:'Create a custom phone case with your own image, colour and type.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:"try{document.documentElement.dataset.theme=localStorage.getItem('case.theme')==='light'?'light':'dark'}catch{}"}}/></head><body>{children}</body></html>}

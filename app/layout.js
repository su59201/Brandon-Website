import "./globals.css";
export const metadata = {
  title: "Brandon Baek",
  description: "Global Business Builder & Strategic Problem Solver",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Data Management Example",
  description: "An app for built for practicing data management in front end.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

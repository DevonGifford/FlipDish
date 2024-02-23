import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlipDish Test",
  description: "This is a technical assessment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}

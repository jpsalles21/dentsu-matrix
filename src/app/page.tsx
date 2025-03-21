import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";
import { Inter } from 'next/font/google';
import Header from "@/components/Header/Header";
import BookingWidget from "@/components/BookingWidget/BookingWidget";
import Highlights from "@/components/Highlights/Highlights";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className={`${inter.className} ${styles.page}`}>
      <Header />
      <main>
        <section className={styles.booking_widget}>
          <BookingWidget />
        </section>
        <section className={styles.content_wrapper}>
          <Highlights />
        </section>
        <Footer>© 2025 Dentsu. All Rights Reserved</Footer>
      </main>
    </div>
  );
}

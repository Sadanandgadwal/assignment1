import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ images }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="grid grid-cols-3 gap-4">
        {!images
          ? "loading ..."
          : images.map((image, index) => (
              <div key={index}>
                <Image
                  className="flex-none py-8 px-6 rounded-2xl border-2 border-gray-400  shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm object-contain"
                  src={image.data.url}
                  alt="images"
                  width={500}
                  height={200}
                />
              </div>
            ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    "https://www.reddit.com/r/images/new.json?limit=30"
  );
  const images = res.data.data.children;
  return { props: { images } };
}

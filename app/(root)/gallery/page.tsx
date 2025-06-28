import { wonderImages } from "./wonder";
import Link from "next/link";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="items-center justify-center">
      <h1 className="text-4xl font-bold mb-2">Gallery Page</h1>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {wonderImages.map((image: any) => (
          <div
            className="border-2 border-gray-300 bg-blue-950 text-white p-5 flex items-center justify-center rounded-lg"
            key={image.id}
          >
            <Link href={`/gallery/${image.id}`}>
              <Image
                src={image.src}
                alt={image.title}
                width={300}
                height={200}
                className="rounded-lg shadow-md mb-2"
              />
              <h2 className="text-xl font-semibold">{image.title}</h2>
              <p className="">{image.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

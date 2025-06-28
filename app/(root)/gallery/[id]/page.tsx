import Image from "next/image";
import { wonderImages } from "../wonder";

export default async function GalleryPageId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  let { id } = await params;
  let photo = wonderImages.find((image) => image.id === parseInt(id));
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="text-start mb-4">
        <h2 className="text-lg">{photo?.title}</h2>
        <p>{photo?.description}</p>
      </div>
      {photo && (
        <Image
          src={photo?.src}
          alt={photo?.title}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      )}
    </div>
  );
}

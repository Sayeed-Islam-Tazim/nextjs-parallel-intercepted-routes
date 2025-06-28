import Modal from "@/components/ui/modal";
import { wonderImages } from "../../wonder";
import Image from "next/image";

export default async function GalleryPageInterceptedId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  let { id } = await params;
  let photo = wonderImages.find((p) => p.id === parseInt(id))!;
  return (
    <Modal>
      <Image alt={photo.title} src={photo.src} />
      <h2 className="text-lg">{photo.title}</h2>
      <p>{photo.description}</p>
    </Modal>
  );
}

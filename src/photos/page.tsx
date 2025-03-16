import Image from "next/image";
import styles from "./photos.module.css";

const photos = [
  {
    src: "/images/portfolio/thumbnails/image-01.jpg",
    alt: "Close-up of a white horse wearing a black racing mask",
    id: "image-01",
    fullsize: "/images/portfolio/fullsize/image-01.jpg",
  },
  {
    src: "/images/portfolio/thumbnails/image-02.jpg",
    alt: "A child swimming in water wearing a blue cap",
    id: "image-02",
    fullsize: "/images/portfolio/fullsize/image-02.jpg",
  },
  {
    src: "/images/portfolio/thumbnails/image-03.jpg",
    alt: "White and blue Mediterranean alleyway with traditional architecture",
    id: "image-03",
    fullsize: "/images/portfolio/fullsize/image-03.jpg",
  },
  {
    src: "/images/portfolio/thumbnails/image-04.jpg",
    alt: "A cat sleeping on a white ledge",
    id: "image-04",
    fullsize: "/images/portfolio/fullsize/image-04.jpg",
  },
  {
    src: "/images/portfolio/thumbnails/image-05.jpg",
    alt: "Busy market scene with people on motorcycles and shoppers",
    id: "image-05",
    fullsize: "/images/portfolio/fullsize/image-05.jpg",
  },
  {
    src: "/images/portfolio/thumbnails/image-06.jpg",
    alt: "Person sitting on a blue chair against white and blue walls",
    id: "image-06",
    fullsize: "/images/portfolio/fullsize/image-06.jpg",
  },
  {
    src: "/images/portfolio/thumbnails/image-07.jpg",
    alt: "Portrait of an elderly man wearing glasses and a red cap",
    id: "image-07",
    fullsize: "/images/portfolio/fullsize/image-07.jpg",
  },
  {
    src: "/images/portfolio/thumbnails/image-08.jpg",
    alt: "Person in a light-colored suit covering their face",
    id: "image-08",
    fullsize: "/images/portfolio/fullsize/image-08.jpg",
  },
  {
    src: "/images/portfolio/thumbnails/image-09.jpg",
    alt: "Aerial view of a bright pink taxi",
    id: "image-09",
    fullsize: "/images/portfolio/fullsize/image-09.jpg",
  },
  {
    src: "/images/portfolio/thumbnails/image-10.jpg",
    alt: "Person in orange robes in a dark corridor",
    id: "image-10",
    fullsize: "/images/portfolio/fullsize/image-10.jpg",
  },
];

export default function PhotosPage() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-[1216px] mx-auto">
        <h1 className="text-2xl font-medium mb-8">Photos</h1>
        <div className={styles.photoGrid}>
          {photos.map((photo) => (
            <div key={photo.id} className={styles.photoItem}>
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

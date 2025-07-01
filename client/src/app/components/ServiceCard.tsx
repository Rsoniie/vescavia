// components/ServiceCard.js
import Image from 'next/image';

export default function ServiceCard({
  image,
  title,
  description,
  priority,
}: any) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl p-4">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        priority={priority}
        className="w-full h-48 object-cover rounded-xl"
      />
      <h2 className="text-xl font-semibold mt-4 text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </article>
  );
}

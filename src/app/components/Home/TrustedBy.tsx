"use client";
import Image from "next/image"; // Import the Image component
import useFetch from "@/app/app/useFetch";

export default function TrustedBy() {
  const { data } = useFetch("/api/page1?populate[0]=page1.image&populate[1]=page1.trustedBy.image");

  const imgUrl = "http://localhost:1337";

  const fallbackImage = "/assets/img/default-image.webp";
  const trustedByImageUrl =
    data?.page1?.[2]?.trustedBy?.[0]?.image?.[0]?.url
      ? imgUrl + data.page1[2].trustedBy[0].image[0].url
      : fallbackImage;

  // Extract other dynamic images if available (e.g., Qwilr, Juro, Userpilot)
  const qwilrImageUrl =
    data?.page1?.[2]?.trustedBy?.[1]?.image?.[0]?.url
      ? imgUrl + data.page1[2].trustedBy[1].image[0].url
      : fallbackImage;

  const juroImageUrl =
    data?.page1?.[2]?.trustedBy?.[2]?.image?.[0]?.url
      ? imgUrl + data.page1[2].trustedBy[2].image[0].url
      : fallbackImage;

  const userpilotImageUrl =
    data?.page1?.[2]?.trustedBy?.[3]?.image?.[0]?.url
      ? imgUrl + data.page1[2].trustedBy[3].image[0].url
      : fallbackImage;

  return (
    <section>
      <div className="container">
        <div className="relative xl:pb-[80px] sm:pb-[40px] pb-[30px] xl:px-[63px] w-fit mx-auto">
          <div className="flex items-center justify-center gap-x-[30px] sm:gap-x-[46px] flex-wrap gap-y-1 md:px-12 xl:px-0 px-4">
            {/* Trusted By Image */}
            <Image
              className="w-[130px] sm:w-[150px] aspect-[3/2] object-contain"
              src={trustedByImageUrl}
              alt="Trusted By Image"
              width={150}
              height={230}
              priority
              unoptimized
            />

            {/* Dynamically loaded images */}
            <Image
              className="w-[130px] sm:w-[150px] aspect-[3/2] object-contain"
              src={qwilrImageUrl}
              alt="Qwilr Logo"
              width={150}
              height={100}
              priority
              unoptimized
            />

            <Image
              className="w-[80px] sm:w-[100px] aspect-[3/2] object-contain"
              src={juroImageUrl}
              alt="Juro Logo"
              width={100}
              height={70}
              priority
              unoptimized
            />

            <Image
              className="w-[130px] sm:w-[150px] aspect-[3/2] object-contain"
              src={userpilotImageUrl}
              alt="Userpilot Logo"
              width={150}
              height={180}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}

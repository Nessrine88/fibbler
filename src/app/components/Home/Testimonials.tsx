"use client"
import React from "react";
import TrustedBy from "./TrustedBy";
import useFetch from "@/app/app/useFetch";

export default function Testimonials() {
  const {data} = useFetch('/api/page1?populate=page1.image&populate=page1.testimonial.authorImg')
  const imgUrl = "http://localhost:1337";
  const src1 = data?.page1?.[2]?.testimonial?.[0]?.authorImg?.[0]?.url
  ? imgUrl + data.page1[2].testimonial[0].authorImg[0].url
  : "/assets/img/person1.svg";

  const src2 = data?.page1?.[2]?.testimonial?.[1]?.authorImg?.[0]?.url
  ? imgUrl + data.page1[2].testimonial[1].authorImg[0].url
  : "/assets/img/person2.svg";

  const src3 = data?.page1?.[2]?.testimonial?.[0]?.authorImg?.[0]?.url
  ? imgUrl + data.page1[2].testimonial[2].authorImg[0].url
  : "/assets/img/person3.svg";

    return (
    <section className="xl:pb-[150px] lg:pb-[130px] pb-[86px]">
      <div className="container">
        <h1 className="text-center text-[#181127] md:text-[44px] text-[25px] leading-[127%] md:max-w-[884px] sm:max-w-[339px] max-w-[361px] mx-auto font-[600] md:pb-[84px] pb-[40px]">
          {data?.page1[2].title ?? "Join the"}
          <span className="bg-[url('/assets/img/line-shape-2.svg')] bg-no-repeat bg-bottom bg-contain ">
            {" "}
           {data?.page1[2].highlightedText ??" growing community"}
          </span>{" "}
          {data?.page1[2].subtitle ??"of people who can&apos;t stop talking about Fibbler!"}
        </h1>
        <TrustedBy />
        <div className="xl:grid flex flex-wrap justify-center grid-cols-3">
          <div className="sm:border-[5px] border-[4px] border-[#181127] rounded-[15px] sm:p-[41px] p-[30px] bg-[#FCFBFD]  sm:rotate-[-3.848deg] rotate-[-2.193deg] sm:z-[3] xl:mr-[-17px]  lg:max-w-[438px] xl:mt-[-10px] lg:mt-[-15px]">
            <p className="sm:text-[16px] text-[14px] font-[500] satoshifont-500 text-[#181127]">
              {data?.page1[2]?.testimonial[0]?.authorOpinion ??"“During my hunt for a tool to connect CRM data with LinkedIn Ads, I found Fibbler. Most other options are way to expensive, and what I really needed was a way to measure how my campaigns impact the pipeline. With Fibbler, that&apos;s finally doable. It&apos;s super handy for managing LinkedIn ads really shines during meetings with C-level and board members.”"}
            </p>

            <div className="flex items-center gap-[9px] sm:mt-[16px] mt-[11px]">
              <img
                className="rounded-[100%] w-[47px] aspect-square"
                src={src1}
                alt="Picture of Gauthier Gallin"
              />
              <div>
                <h6 className="text-[16px] font-[600] text-[#181127]">
                  {data?.page1[2]?.testimonial[0]?.authorOpinion ??"Gauthier Gallin"}
                </h6>
                <p className="sm:text-[14px] text-[12px] font-[500] satoshifont-500 text-[#181127]">
                  {data?.page1[2]?.testimonial[0]?.authorPosition??"Top 100 Most infuential PPC Expert"}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:border-[5px] border-[4px] border-[#181127] rounded-[15px] sm:p-[41px] p-[30px] bg-[#FCFBFD]  rotate-[1deg] sm:z-[2]  lg:max-w-[414px] xl:ml-[0] ml-0 sm:ml-[-20px] mt-[-9px]">
            <p className="sm:text-[16px] text-[14px] font-[500] satoshifont-500 text-[#181127]">
             { data?.page1[2]?.testimonial[1]?.authorOpinion ??" “We got Fibbler up and running in less than a day and it’s already syncing our LinkedIn Impressions data straight into HubSpot. It has really helped our marketing and sales teams get a clearer picture of how our demand generation efforts are impacting the pipeline. Absolutely love both the product and the price!”"}
            </p>

            <div className="flex items-center gap-[9px] mt-[16px]">
              <img
                className="rounded-[100%] w-[47px] aspect-square"
                src={src2}
                alt="Picture of Alen Todorov"
              />
              <div>
                <h6 className="sm:mt-[16px] mt-[11px] font-[600] text-[#181127]">
                  {data?.page1[2]?.testimonial[1]?.authorName ?? "Alen Todorov"}
                </h6>
                <p className="sm:text-[14px] text-[12px] font-[500] satoshifont-500 text-[#181127]">
                  {data?.page1[2]?.testimonial[1]?.authorPosition ?? "Head of Marketing @SEOmonitor.com"}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:border-[5px] border-[4px] border-[#181127] rounded-[15px] sm:p-[41px] p-[30px] bg-[#FCFBFD]  xl:rotate-[3.848deg] rotate-[3.856deg] lg:rotate-[1deg] xl:ml-[-30px] mt-[-2px]   lg:max-w-[414px] sm:mt-[0px] lg:mt-[-22px] xl:mt-[-10px] sm:z-[2] xl:z-[1]">
            <p className="sm:text-[23px] text-[16px] font-[500] satoshifont-500 text-[#181127]">
              {data?.page1[2]?.testimonial[2]?.authorOpinion ??"“Attribution shoudn&apos;t be an expensive dream. I rely on Fibbler to surface the real extent of my campaigns reach and how much they influenced our pipeline.”"}
            </p>

            <div className="flex items-center gap-[9px] mt-[16px]">
              <img
                className="rounded-[100%] w-[47px] aspect-square"
                src={src3}
                alt="Picture of Eduardo 'Eddie' Casado"
              />
              <div>
                <h6 className="sm:mt-[16px] mt-[11px] font-[600] text-[#181127]">
                 {data?.page1[2]?.testimonial[2]?.authorName ??" Eduardo &quot;Eddie&quot; Casado"}
                </h6>
                <p className="sm:text-[14px] text-[12px] font-[500] satoshifont-500 text-[#181127]">
                  {data?.page1[2]?.testimonial[2]?.authorPosition ?? "Head of Growth Marketing @Mouseflow"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

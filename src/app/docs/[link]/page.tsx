'use client';

import { useState, useEffect } from 'react';
import useFetch from "../../useFetch";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/app/components/common/Header/Header';
import qs from "qs";
import ReactMarkdown from "react-markdown";
import '../../globals.css'
import { TargetArrow } from '@/app/components/Icon';



const PostPage = () => {

  const query = qs.stringify(
    {
      populate: {
        blog: {
          author: {
            populate:"*"
          }
        },
      },
    },
    { encodeValuesOnly: true }
  );
  // Use the constructed query with useFetch
  const { data, error,baseUrl } = useFetch(`/api/docs?${query}`);
  console.log("url",`http://localhost:1337/api/docs?${query}`)
  
  const { link } = useParams(); // Get the dynamic link parameter from the URL


  // Handle loading and error states
  if (!data) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

const currentData = Array.isArray(data)? data :[]
  const currentArticle = currentData?.find((article:any) => article?.link === link);

  // If no matching article is found
  if (!currentArticle) {
    return <p className='text-white'>Article not found.</p>;
  }

  return (
    <div className='text-white'>
       <main>
            <Header />
            <section className="xl:pt-[106px] md:pt-[70px] pt-[50px] pb-10">
              <div className="container mx-auto px-4">
                <h1 className="text-[#181127] font-[600] text-[25px] lg:text-[44px] leading-[109.7%] tracking-[0.44px] text-center lg:max-w-[863px] max-w-[500px] mx-auto mb-[35px]">
                  {currentArticle?.blog.headline ?? "Technical Documentation for Fibbler"}
                </h1>
                <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px] text-center mx-auto max-w-[641px] italic mb-[35px]">
           {currentArticle.blog.introduction ??" Turning LinkedIn ad impressions and engagements into outbound leads can seem like alchemy. But with the right tools and a sprinkle of automation magic, it&apos;s entirely achievable - and dare I say, fun? I&apos;m excited to share my process with you. It&apos;s straightforward, and you&apos;ll be up and running in no time. Let&apos;s dive in!"}          </p>

                <section className="max-w-[763px] mx-auto mb-[35px]">
                  <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
                   {currentArticle?.blog.heading ??" Quick Links"}
                  </h2>
                  <ul className="list-none text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
                      {currentArticle?.blog.quickLinks?.map((link:any, index:number) => (
                      <p key={index} className="mb-[10px]">
                      <a
                      href={link.linkAnchor ?? "#"}
                      className="underline hover:text-[#FB5DA5]"
                      >
                      {link.linkName ?? "Default Link Name"}
                      </a>
                      </p>
                      ))}

                  </ul>
                </section>


                <section className="max-w-[763px] mx-auto">
                  <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
                    {currentArticle.blog.heading2 ??"Overview"}
                  </h2>
                  <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
                   
                  </p>
                </section>
      

      {/* section ||2|| */}

                <section className="max-w-[763px] mx-auto mt-[30px]">
                  <h3
                    id="company-insights"
                    className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]"
                  >
                    {currentArticle.blog.heading3 ??"Fibbler in-app Company Insights"}
                  </h3>
               
<ReactMarkdown>
  {currentArticle.richText}
</ReactMarkdown>
                  <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
                    <img
                      src={`${baseUrl ?? ""}${currentArticle.blog.image1[0].url}`||"/assets/img/docs/insights_tech_docs.png"}
                      alt="How insights works"
                      className="w-full h-full object-contain rounded-[16px]"
                    />
                  </div>
                </section>
      

      {/* section ||3|| */}


                <section className="max-w-[763px] mx-auto mt-[30px]">
                  <h3
                    id="crm-sync"
                    className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]"
                  >
                    {currentArticle.heading ?? "Fibbler CRM Data Sync"}
                  </h3>
                  <ol className="list-decimal ml-[20px] text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
                    
                  <ReactMarkdown>
  {currentArticle.richText}
</ReactMarkdown>
                  </ol>
                  <div className="rounded-[16px] border-[4px] sm:border-[5px] border-[#181127] bg-[#fcfbfd] max-w-[899px] aspect-[2/1] mx-auto my-[30px] sm:my-[40px] lg:my-[81px]">
                    <img
                      src={`${baseUrl ?? ""}${currentArticle?.blog.image2[0].url}`||"/assets/img/docs/datasync_tech_docs.png"}
                      alt="Graph on how to connect our datasource sync"
                      className="w-full h-full object-contain rounded-[16px]"
                    />
                  </div>
                  <ReactMarkdown>
  {currentArticle.richText}
</ReactMarkdown>
                </section>
      
      {/* section ||4|| */}


                <section id="permissions" className="max-w-[763px] mx-auto mt-[30px]">
                  <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
                  {currentArticle.heading ??"Permissions Required"}
                  </h2>
                 
                  <ReactMarkdown>
  {currentArticle.blog.richText}
</ReactMarkdown>
                </section>
      {/* section ||5|| */}
      
                <section id="gdpr" className="max-w-[763px] mx-auto mt-[30px]">
                  <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
                 { currentArticle.heading ??"Are you GDPR compliant?"}
                  </h2>
                
                </section>
                <ReactMarkdown>
  {currentArticle.richText}
</ReactMarkdown>
                <section className="max-w-[763px] mx-auto mt-[30px]">
                  <h2 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] font-semibold mb-[15px]">
                  {currentArticle.heading ?? "Further Questions"}
                  </h2>
                  <p className="text-[#181127] text-[16px] lg:text-[18px] font-[500] satoshifont-500 xl:leading-[28px]">
                   {currentArticle.paragraph ?? " Do you have any other questions? Send us a message at"}{" "}
                    <a
                      href="mailto:support@fibbler.co"
                      className="text-[#FB5DA5] underline hover:text-[#f7338b]"
                    >
                      {currentArticle.paragraph ??"support@fibbler.co"}
                    </a>
                    .
                  </p>
                </section>
              </div>
            </section>

            {/* Author section at the bottom */}
          <div className="max-w-[763px] mx-auto xl:py-[172px] py-[60px] sm:py-[100px]">
            <div>
              <h5 className="text-[18px] sm:text-[20px] text-[#181127] tracking-[0.2px] leading-[109.7%] flex gap-[10px]">
                Written by
                <div className="mt-[10px] rotate-[-47.833deg]">
                  <TargetArrow />
                </div>
              </h5>

              <div className="mt-[15px] flex gap-[12px] items-center">
                <img
                  src={`${baseUrl ?? ""}${currentArticle.blog.author?.avatar[0].url}`||"/assets/img/tarek_reda.jpeg"}
                  className="border-[2px] border-[#fff] rounded-[100%] w-[48px] h-[48px]"
                  alt={currentArticle.blog.author.name??"author Name"}
                />
                <div className="flex flex-col gap-[3px]">
                  <h6 className="text-[#111827] font-[700] text-[16px]">
                    {currentArticle.blog.author.name??"Tarek Reda"}
                  </h6>
                  <p className="text-[#111827] satoshifont-500 font-[500] text-[14px]">
                    {currentArticle.blog.author.name ??"Growth @adam.ai | Founder @BluePencil | B2B Growth Advisor"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </main>
    </div>
  );
};

export default PostPage;

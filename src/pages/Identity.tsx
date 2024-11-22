// src/pages/Identity.tsx
import React, { useState } from "react";

type Section = {
  title: string;
  content: string;
};

const sections: Section[] = [
  { title: "自己紹介", content: "初めまして!コニシと申します。\n現在、新たなチャレンジを求めて転職活動を進めています。まずはWebエンジニアやインフラエンジニアとして基礎を固め、幅広い分野で活躍できるエンジニアになることを目指しています。\n将来的には、DevOpsやSREといった分野にも挑戦し、効率的でスケーラブルなシステムを構築できるスキルを習得したいと考えています。\nまだまだ学びの途中ではありますが、どうぞよろしくお願いいたします!" },
  { title: "Career Overview", content: "Details about my career and experience." },
  { title: "Qualifications & Skills", content: "AWS, LPIC-1, CCNA, and more." },
  { title: "Awards & Achievements", content: "Awarded for outstanding contributions." },
  { title: "Hobbies & Interests", content: "Coding, gaming, and reading." },
  { title: "Strengths in Action", content: "Proven problem-solving and teamwork." },
  { title: "Future Plans", content: "Aiming to excel in DevOps and SRE roles." },
];

const formatContent = (text: string) => 
  text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

export const Identity = ({title , content}: Section) => {
  //
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  return (
    <div className="w-full mx-auto">
      {sections.map((section, index) => (
        <div
          key={index}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2"
        >
          <input type="checkbox" id={`section-${index}`} />
          <label htmlFor={`section-${index}`} className="collapse-title text-lg font-bold cursor-pointer">
            {section.title}
          </label>
          <div className="collapse-content">
            <p>{formatContent(section.content)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

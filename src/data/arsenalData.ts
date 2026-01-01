// src/data/arsenalData.ts

export type Skill = {
    category: string;
    skills: string;
    experience: string;
};

export type Certification = {
    name: string;
    score: string;
};

export const skillsData: Skill[] = [
    {
        category: "プログラミング言語",
        skills: "Python, TypeScript, JavaScript, Bash, VBA",
        experience: "実務経験あり（Python ETL, VBA自動化）"
    },
    {
        category: "フレームワーク",
        skills: "React, Flask",
        experience: "React（本ポートフォリオ）, Flask（監視アプリ）"
    },
    {
        category: "ネットワーク機器",
        skills: "Juniper（SRX/MX/EX）, Juniper MIST, Cisco",
        experience: "実務経験あり（VXLAN/EVPN環境）"
    },
    {
        category: "クラウド/インフラ",
        skills: "AWS, Docker, Git/GitHub, Terraform, Vercel, Linux",
        experience: "AWS SAA取得, IaC実践中"
    },
];

export const certificationsData: Certification[] = [
    {
        name: "AWS Solutions Architect Associate",
        score: "取得済み（861/1000点）"
    },
    {
        name: "JNCIA-Junos",
        score: "取得済み（97%）"
    },
    {
        name: "CCNA",
        score: "取得済み"
    },
    {
        name: "LPIC-2",
        score: "取得済み"
    },
];
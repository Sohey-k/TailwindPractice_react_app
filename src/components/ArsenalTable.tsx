// src/components/ArsenalTable.tsx

import { Skill, Certification } from "../data/arsenalData";

type SkillTableProps = {
    type: "skills";
    headers: string[];
    data: Skill[];
};

type CertificationTableProps = {
    type: "certifications";
    headers: string[];
    data: Certification[];
};

type ArsenalTableProps = SkillTableProps | CertificationTableProps;

export const ArsenalTable = ({ type, headers, data }: ArsenalTableProps) => {
    return (
        <div className="overflow-x-auto mt-6">
            <table className="table w-full">
                {/* ヘッダー */}
                <thead>
                    <tr className="bg-yellow-300">
                        {headers.map((header) => (
                            <th key={header} className="font-bold text-purple-600">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* ボディ */}
                <tbody>
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0 ? "bg-white" : "bg-yellow-100"
                                } hover:bg-yellow-50 text-purple-600`}
                        >
                            {type === "skills" ? (
                                <>
                                    <td className="font-bold">{(row as Skill).category}</td>
                                    <td>{(row as Skill).skills}</td>
                                    <td>{(row as Skill).experience}</td>
                                </>
                            ) : (
                                <>
                                    <td className="font-bold">{(row as Certification).name}</td>
                                    <td>{(row as Certification).score}</td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
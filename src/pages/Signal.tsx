// src/pages/Signal.tsx
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5"; // NOTEの代替アイコン

export const Signal = () => {
  const contacts = [
    {
      name: "GitHub",
      url: "https://github.com/Sohey-k",
      icon: <FaGithub className="text-5xl text-purple-600" />,
      description: "コードやプロジェクトはこちら"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/reep_of_face",
      icon: <FaXTwitter className="text-5xl text-purple-600" />,
      description: "日々の学びや気づきをシェア"
    }
  ];

  return (
    <div className="h-full overflow-y-auto px-4 pt-8 pb-8 font-zenKaku relative z-0">
      <h1 className="font-bold text-2xl pt-8">コンタクト</h1>
      <hr className="border-t-8 border-purple-600 my-4" />

      <p className="mb-6 text-base text-purple-800">
        お気軽にご連絡ください。各種SNSでお待ちしています。
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-yellow-300 rounded-lg shadow-md hover:bg-yellow-400 transition-all"
          >
            <div className="mb-2">{contact.icon}</div>
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              {contact.name}
            </h3>
            <p className="text-sm text-purple-800">{contact.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
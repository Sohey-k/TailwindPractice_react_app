// src/pages/Signal.tsx

export const Signal = () => {
  const contacts = [
    {
      name: "GitHub",
      url: "https://github.com/Sohey-k",
      icon: "🐙",
      description: "コードやプロジェクトはこちら"
    },
    {
      name: "NOTE",
      url: "https://note.com/deft_fish2452",
      icon: "📝",
      description: "技術ブログ・学習記録"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/reep_of_face",
      icon: "🐦",
      description: "日々の学びや気づきをシェア"
    }
  ];

  return (
    <div className="p-6 font-zenKaku">
      <h1 className="font-bold text-2xl pt-2 pb-2">Contact</h1>
      <hr className="border-t-2 border-purple-600 my-4" />

      <p className="mb-6 text-gray-700">
        お気軽にご連絡ください。各種SNSでお待ちしています。
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border-2 border-purple-300 rounded-lg hover:bg-purple-50 hover:border-purple-600 transition-all"
          >
            <div className="text-4xl mb-2">{contact.icon}</div>
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              {contact.name}
            </h3>
            <p className="text-sm text-gray-600">{contact.description}</p>
          </a>
        ))}
      </div>
    </div >
  );
};
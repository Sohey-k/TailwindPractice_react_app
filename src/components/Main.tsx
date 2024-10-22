import Articles from "./Article";

const Main = () => {
  return (
    <div className="p-4 flex-grow">
      <article className="prose lg:prose-xl">
        <h2>私のポートフォリオへようこそ！</h2>
        <Articles />
      </article>
    </div>
  );
};

export default Main;

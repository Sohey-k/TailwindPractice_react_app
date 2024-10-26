import Articles from "./Article";

const Main = () => {
  return (
    <div className="p-4 flex-grow">
      <article className="prose-lg max-w-screen-xl">
        <Articles />
      </article>
    </div>
  );
};

export default Main;

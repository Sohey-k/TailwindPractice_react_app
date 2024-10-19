const Main = () => {
  return (
    <div className="p-4 flex-grow">
      <article className="prose lg:prose-xl">
        <h2>私のポートフォリオへようこそ！</h2>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <div className="card shadow-lg border-2 border-purpleAccent">
          <div className="card-body">
            <h2 className="card-title font-stalinist text-3xl">Cool Design</h2>
            <p className="text-darkText">
              This is an example of a stylish card using daisyUI and Tailwind
              CSS.
            </p>
          </div>
        </div>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
        <ul className="list-disc list-inside text-purpleAccent font-zenKaku">
          <li>Custom Font List Item 1</li>
          <li>Custom Font List Item 2</li>
          <li>Custom Font List Item 3</li>
        </ul>
      </article>
    </div>
  );
};

export default Main;

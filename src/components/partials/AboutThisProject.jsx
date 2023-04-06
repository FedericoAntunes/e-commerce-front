export default function AboutThisProject() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        About this project
      </h2>
      <p className="sm:w-1/2 w-full px-4 mb-8 text-lg font-medium text-gray-700 dark:text-gray-400 text-left leading-relaxed">
        Welcome to No Hunger, an e-commerce platform dedicated to delivering
        food all around the world. Our mission is to make it easy and convenient
        for you to shop for your favorite products while making a positive
        impact on the world. Our goal is to provide a secure and easy-to-use
        shopping experience for our customers. Shop with us today and join the
        fight against hunger!
      </p>
      <ul className="sm:w-1/2 w-full sm:px-4 px-8 mb-8 text-lg font-medium text-gray-700 dark:text-gray-400 text-left leading-relaxed list-decimal">
        <li>
          We used <span className="font-bold">Node.js</span>,{" "}
          <span className="font-bold">Express.js</span>,{" "}
          <span className="font-bold">React.js</span>,{" "}
          <span className="font-bold">Tailwind CSS</span>,{" "}
          <span className="font-bold">Material UI</span>, and{" "}
          <span className="font-bold">MySQL</span>, to create this platform.
        </li>
        <li>
          We focused on making the platform{" "}
          <span className="font-bold">fast</span>,{" "}
          <span className="font-bold">scalable</span>,{" "}
          <span className="font-bold">efficient</span>, and
          <span className="font-bold"> visually appealing.</span>
        </li>
        <li>
          This platform is the <span className="font-bold">final project </span>{" "}
          of a <span className="font-bold">600+ hours</span> coding bootcamp at
          <span className="font-bold"> Hack Academy.</span>
        </li>
        <li>
          The platform was developed by a team of
          <span className="font-bold"> highly trained developers </span>
          committed to staying up-to-date with the{" "}
          <span className="font-bold">latest industry trends</span> and
          <span className="font-bold"> emerging technologies.</span>
        </li>
      </ul>
    </div>
  );
}

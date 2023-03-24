import { Dropdown, Button } from "flowbite-react";

function Filters() {
  return (
    <div className="flex py-2 gap-2">
      <span className="my-auto ml-10">Filter:</span>
      <Button size="xs" color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#F9AE02"
            d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
          ></path>
        </svg>
        More than 4.5
      </Button>
      <Button size="xs" color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#F9AE02"
            fill-rule="evenodd"
            d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-11.757-.757c-.781.78-2.048.78-2.829 0a2.003 2.003 0 010-2.829 2.003 2.003 0 012.829 0c.78.781.78 2.048 0 2.829zm-.707-.707c-.391.39-1.024.39-1.415 0a1.002 1.002 0 010-1.415c.39-.39 1.024-.39 1.415 0 .39.39.39 1.024 0 1.415zm5.656 5.656a2 2 0 11-2.828-2.828 2 2 0 012.828 2.828zm-.707-.707a1 1 0 11-1.414-1.416 1 1 0 011.414 1.416zm.354-7.424a.5.5 0 01.707.707l-7.778 7.778a.5.5 0 01-.707-.707l7.778-7.778z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Promotions
      </Button>
      <div className="ml-auto mr-10 my-auto flex gap-2">
        <Dropdown color="light" label="Oreder by" dismissOnClick={false}>
          <Dropdown.Item>Relevance</Dropdown.Item>
          <Dropdown.Item>Promotions</Dropdown.Item>
          <Dropdown.Item>Rating</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}

export default Filters;

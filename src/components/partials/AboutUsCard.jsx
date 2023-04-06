export default function AboutUsCard({ title, description }) {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <ul className="list-disc list-inside text-left">
        {description.split("\n").map((item, index) => (
          <li key={index} className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-400">{item}</li>
        ))}
      </ul>
    </div>
  );
}

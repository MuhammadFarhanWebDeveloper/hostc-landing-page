import { SectionLayout } from "./SectionLayout";

const plans = [
  {
    name: "Basic Plan",
    price: "$199",
    visits: "Up to 25000",
    sites: 1,
    hosting: "Shared",
    storage: "50 GB",
    color: "bg-white text-gray-900",
    button: "bg-primary text-white",
  },
  {
    name: "Standard Plan",
    price: "$299",
    visits: "Up to 50000",
    sites: 2,
    hosting: "Shared",
    storage: "70 GB",
    color: "bg-primary text-white",
    button: "bg-white text-primary",
  },
  {
    name: "Plus Plan",
    price: "$399",
    visits: "Unlimited",
    sites: 3,
    hosting: "Shared",
    storage: "100 GB",
    color: "bg-white text-gray-900",
    button: "bg-primary text-white",
  },
];
export default function Pricing() {
  return (
    <SectionLayout title="Pricing Plan" heading="Select Your Best Plan">
      <div className="w-full flex justify-center py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl shadow-xl p-8 flex flex-col items-center ${p.color}`}
            >
              <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
              <p className="text-4xl font-bold mb-1">{p.price}</p>
              <p className="text-sm opacity-80 mb-6">/Monthly</p>

              <button className={`btn-primary font-medium mb-6 ${p.button}`}>
                Choose Plan
              </button>

              <ul className="w-full text-sm space-y-3 mt-4">
                <li className="flex justify-between border-b py-2">
                  <span>Visit Per Month</span>
                  <span>{p.visits}</span>
                </li>
                <li className="flex justify-between border-b py-2">
                  <span>Total Sites</span>
                  <span>{p.sites}</span>
                </li>
                <li className="flex justify-between border-b py-2">
                  <span>Hosting Type</span>
                  <span>{p.hosting}</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>Share Hosting</span>
                  <span>{p.storage}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}

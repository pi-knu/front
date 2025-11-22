type StatItem = {
  value: string;
  label: string;
};

export default function Stats() {
  const stats: StatItem[] = [
    { value: "10K+", label: "Premium Items" },
    { value: "500+", label: "Active Auctions" },
    { value: "25K+", label: "Happy Customers" },
    { value: "$2M+", label: "Sales Volume" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s: StatItem) => (
          <div key={s.label}>
            <h2 className="text-3xl font-bold">{s.value}</h2>
            <p className="text-gray-500 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

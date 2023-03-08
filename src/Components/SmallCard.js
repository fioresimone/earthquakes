export default function SmallCard({ label, value }) {
  return (
    <div className="p-4 bg-light-black border-gradient hover:bg-zinc-900 h-22">
      <div>
        <p className="text-slate-400">{label}</p>
        <p className="text-slate-400 text-xl text-right mt-0">{value}</p>
      </div>
    </div>
  );
}

export default function CompleteAccount() {
  return (
    <section className="w-full flex flex-col gap-5">
      <p className="text-center font-bold text-xl">Completa tus datos</p>
      <div className="w-full flex flex-col">
        <label className="label">Nombre:</label>
        <input
          type="text"
          placeholder="Nombre"
          className="input input-bordered"
        />
        <label className="label">Apellido:</label>
        <input
          type="text"
          placeholder="Apellido"
          className="input input-bordered"
        />
        <label className="label">Edad:</label>
        <input type="date" className="input input-bordered" />
      </div>
    </section>
  );
}

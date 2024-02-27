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
                <label className="label">Sobre mi:</label>
                <textarea
                    className="textarea textarea-bordered"
                    placeholder="Sobre mi"
                />
                <label className="label">Genero:</label>
                <select className="select select-bordered">
                    <option disabled selected>
                        Selecciona tu genero
                    </option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Otro</option>
                </select>

                <label className="label">Habilidades:</label>
                <select className="select select-bordered">
                    <option>Selecione sus habilidades</option>
                    <option>🎹 Piano</option>
                    <option>🎸 Guitarra</option>
                    <option>🎤 Cantor</option>
                    <option>🎣 Pesca</option>
                    <option>♟️ Juegos</option>
                </select>
            </div>
            <div className="w-full flex justify-end">
                <button className="btn btn-primary">Omitir este paso</button>
            </div>
        </section>
    );
}

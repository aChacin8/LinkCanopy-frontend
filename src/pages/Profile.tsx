

const Profile = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
  <h1 className="text-2xl font-bold mb-4">Perfil</h1>

  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">Nombre</label>
      <input
        type="text"
        name="name"
        className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        placeholder="Tu nombre"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Correo</label>
      <input
        type="email"
        name="email"
        className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        placeholder="Tu correo electrónico"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Teléfono</label>
      <input
        type="text"
        name="phone"
        className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        placeholder="Tu teléfono"
      />
    </div>

    <div className="flex justify-end">
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Guardar Cambios
      </button>
    </div>
  </form>
</div>

  )
}

export default Profile

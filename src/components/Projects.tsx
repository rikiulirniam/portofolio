
export const Projects = () => {

    return (
        <section className="flex justify-center flex-col items-center bg-[#ffffff] pb-12 ">
            <h1 className="text-5xl p-6 underline font-bold">
                Projects
            </h1>
            {/* {projects.map((p) => (
            <div key={p.id} className="bg-white shadow-md rounded-xl max-w-96 overflow-hidden">
                {p.image && (
                <img
                    src={`http://localhost:8080/img/${p.image}`}
                    alt={p.name}
                    className="h-48 w-full object-cover"
                />
                )}
                <div className="p-4">
                <h2 className="text-xl font-bold">{p.name}</h2>
                <p className="text-gray-600 mb-4">{p.tech}</p>
                <p className="text-gray-500 text-sm mb-4">{p.description}</p>
                <div className="flex justify-end items-center">
                    <span className="text-xs text-gray-400">{new Date(p.created_at).toLocaleDateString()}</span>
                    
                </div>
                </div>
            </div>
            ))} */}
          </section>
    )
}
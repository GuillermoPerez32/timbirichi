import AppBar from "@/Components/AppBar";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, categories }) {
    console.log(categories);

    return (
        <>
            <Head title="Catalogo" />
            <AppBar />

            <div className="w-full grid grid-cols-2 gap-x-1 gap-y-8 py-10 px-2">
                {categories.map(({ id, name, slug, image, products_count }) => (
                    <Link
                        href={route(`categories.show`, slug)}
                        key={id}
                        className="group flex flex-col items-center"
                    >
                        <img
                            loading="lazy"
                            src={`/storage/${image}`}
                            alt={name}
                            height={150}
                            width={150}
                            className="object-cover rounded-lg transition-transform group-hover:scale-105"
                        />
                        <p className="uppercase break-words text-xl font-bold text-center">
                            {name}
                        </p>
                        <p className="text-sm text-slate-500 font-semibold text-center">
                            {products_count} productos
                        </p>
                    </Link>
                ))}
            </div>
        </>
    );
}

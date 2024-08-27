import AppBar from "@/Components/AppBar";
import { Link } from "@inertiajs/react";
import React from "react";

const ShowCategory = ({ category }) => {
    if (!category) {
        return <AppBar />;
    }

    const { name: categoryName, products } = category;
    console.log(products);

    return (
        <>
            <AppBar />
            <h1 className="my-6 mx-4 text-2xl font-bold">
                {categoryName.toUpperCase()}
            </h1>
            <div className="grid grid-cols-2 gap-4 px-4">
                {products.map(
                    ({
                        name,
                        description,
                        currency,
                        image,
                        price,
                        stock,
                        slug,
                    }) => (
                        <Link href={route("products.show", slug)}>
                            <div>
                                <div className="absolute p-2 size-8 bg-black text-white font-bold flex justify-center items-center -translate-x-1/4 -translate-y-1/4 rounded-full">
                                    {stock}
                                </div>
                                <div class="w-full h-full">
                                    <img
                                        src={`/storage/${image}`}
                                        alt={name}
                                        class="inset-0 w-full h-full object-cover rounded-l-lg"
                                        loading="lazy"
                                    />
                                </div>
                                <div class="flex flex-col">
                                    <h1 class="flex-auto text-lg font-semibold text-slate-900 leading-5">
                                        {name}
                                    </h1>
                                    <p class="text-sm text-slate-500 line-clamp-2">
                                        {description}
                                    </p>
                                    <div class="text-sm font-semibold mt-1">
                                        ${price} {currency}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </>
    );
};

export default ShowCategory;
